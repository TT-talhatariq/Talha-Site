import assert from 'node:assert/strict';
import { test } from 'node:test';

import {
  furtherStage,
  normalizeWhatsapp,
  parseLeadPayload,
} from '../src/lib/leads.ts';

const SESSION = '7f3c9a0e-5b1d-4c2e-9f8a-2d6b1c0ee21a';

test('every common way of typing a Pakistani mobile normalizes to 923XXXXXXXXX', () => {
  for (const raw of [
    '03001234567',
    '0300 1234567',
    '0300-123-4567',
    '3001234567',
    '923001234567',
    '+92 300 1234567',
    '+92-300-1234567',
    '0092 300 1234567',
  ]) {
    assert.equal(normalizeWhatsapp(raw), '923001234567', raw);
  }
});

test('half-typed and foreign numbers are rejected', () => {
  for (const raw of [
    '',
    '0300',
    '030012345',
    '0300123456',
    '030012345678',
    '02001234567', // not a mobile prefix
    '+1 415 555 2671',
    '+44 7911 123456',
    'abc',
    null,
    undefined,
    12345,
  ]) {
    assert.equal(normalizeWhatsapp(raw), null, String(raw));
  }
});

test('stage never goes backwards', () => {
  assert.equal(furtherStage('details', 'screenshot_uploaded'), 'screenshot_uploaded');
  assert.equal(furtherStage('verification_failed', 'screenshot_uploaded'), 'verification_failed');
  assert.equal(furtherStage('enrolled', 'details'), 'enrolled');
});

test('parseLeadPayload cleans a good body', () => {
  const lead = parseLeadPayload({
    sessionId: SESSION.toUpperCase(),
    name: '  Ahmed Khan ',
    whatsapp: '0300 1234567',
    email: ' ahmed@gmail.com ',
    course: 'web-dev',
    stage: 'details',
  });
  assert.deepEqual(lead, {
    sessionId: SESSION,
    name: 'Ahmed Khan',
    whatsapp: '923001234567',
    email: 'ahmed@gmail.com',
    course: 'web-dev',
    stage: 'details',
  });
});

test('half-typed email is dropped, not rejected; name is optional', () => {
  const lead = parseLeadPayload({
    sessionId: SESSION,
    whatsapp: '03001234567',
    email: 'ahmed@',
    course: 'upwork',
    stage: 'details',
  });
  assert.equal(lead.email, '');
  assert.equal(lead.name, '');
});

test('parseLeadPayload rejects anything it should not save', () => {
  const good = {
    sessionId: SESSION,
    whatsapp: '03001234567',
    course: 'web-dev',
    stage: 'details',
  };
  for (const bad of [
    null,
    'x',
    [],
    { ...good, sessionId: 'nope' },
    { ...good, sessionId: undefined },
    { ...good, whatsapp: '0300' },
    { ...good, course: 'sql-injection' },
    { ...good, stage: 'paid' },
  ]) {
    assert.equal(parseLeadPayload(bad), null, JSON.stringify(bad));
  }
});

test('overlong name is cut to what the database accepts', () => {
  const lead = parseLeadPayload({
    sessionId: SESSION,
    whatsapp: '03001234567',
    course: 'web-dev',
    stage: 'details',
    name: 'x'.repeat(500),
  });
  assert.equal(lead.name.length, 120);
});
