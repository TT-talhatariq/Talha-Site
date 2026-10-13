import assert from 'node:assert/strict';
import { test } from 'node:test';

import { LeadSaver } from '../src/lib/leadSaver.ts';

const SESSION = '7f3c9a0e-5b1d-4c2e-9f8a-2d6b1c0ee21a';
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const fields = (o = {}) => ({ name: 'Ahmed', email: '', whatsapp: '0300 1234567', ...o });

function make({ delay = 0, ok = true, saver: extra = {} } = {}) {
  const sent = [];
  const saver = new LeadSaver({
    sessionId: SESSION,
    course: 'web-dev',
    debounceMs: 20,
    send: async (p) => {
      sent.push(p);
      if (delay) await wait(delay);
      return ok;
    },
    ...extra,
  });
  return { saver, sent };
}

test('typing sends once, after the pause, with the latest values', async () => {
  const { saver, sent } = make();
  for (const name of ['A', 'Ah', 'Ahm', 'Ahmed']) {
    saver.update(fields({ name }));
    await wait(5);
  }
  assert.equal(sent.length, 0);
  await wait(60);
  assert.equal(sent.length, 1);
  assert.equal(sent[0].name, 'Ahmed');
  assert.equal(sent[0].whatsapp, '923001234567');
  assert.equal(sent[0].stage, 'details');
});

test('nothing is sent until the WhatsApp number is valid', async () => {
  const { saver, sent } = make();
  saver.update(fields({ whatsapp: '0300123' }));
  await wait(60);
  await saver.flush();
  assert.equal(sent.length, 0);
  saver.update(fields({ whatsapp: '03001234567' }));
  await wait(60);
  assert.equal(sent.length, 1);
});

test('an unchanged payload is never sent twice', async () => {
  const { saver, sent } = make();
  saver.update(fields());
  await saver.flush();
  await saver.flush();
  saver.update(fields());
  await wait(60);
  assert.equal(sent.length, 1);
});

test('stage advances immediately, only forward', async () => {
  const { saver, sent } = make();
  saver.update(fields());
  await saver.flush();
  await saver.advance('screenshot_uploaded');
  await saver.advance('verification_failed');
  await saver.advance('screenshot_uploaded'); // retry after a failed check: no regress
  await saver.advance('enrolled');
  assert.deepEqual(
    sent.map((p) => p.stage),
    ['details', 'screenshot_uploaded', 'verification_failed', 'enrolled'],
  );
});

test('a stage reached before the number is valid is kept and sent later', async () => {
  const { saver, sent } = make();
  await saver.advance('screenshot_uploaded');
  assert.equal(sent.length, 0);
  saver.update(fields());
  await wait(60);
  assert.equal(sent.length, 1);
  assert.equal(sent[0].stage, 'screenshot_uploaded');
});

test('edits during a slow request collapse into one follow-up with the newest values', async () => {
  const { saver, sent } = make({ delay: 80 });
  saver.update(fields({ name: 'One' }));
  const first = saver.flush(); // request 1 in flight for ~80ms
  saver.update(fields({ name: 'Two' }));
  await wait(30); // debounce fires while request 1 is still in flight
  saver.update(fields({ name: 'Three' }));
  await wait(30); // fires again, still in flight
  await first;
  await wait(200);
  assert.deepEqual(sent.map((p) => p.name), ['One', 'Three']);
});

test('a failed send is retried on the next flush, not forgotten', async () => {
  let ok = false;
  const sent = [];
  const saver = new LeadSaver({
    sessionId: SESSION,
    course: 'web-dev',
    debounceMs: 10,
    send: async (p) => {
      sent.push(p);
      return ok;
    },
  });
  saver.update(fields());
  await saver.flush();
  assert.equal(sent.length, 1);
  ok = true;
  await saver.flush(); // same payload, but the first never landed
  assert.equal(sent.length, 2);
  await saver.flush(); // landed: now it is a no-op
  assert.equal(sent.length, 2);
});

test('a throwing transport never escapes', async () => {
  const saver = new LeadSaver({
    sessionId: SESSION,
    course: 'web-dev',
    debounceMs: 10,
    send: async () => {
      throw new Error('offline');
    },
  });
  saver.update(fields());
  await saver.flush();
});

test('a runaway page is capped', async () => {
  const { saver, sent } = make({ saver: { maxSends: 3 } });
  for (let i = 0; i < 10; i++) {
    saver.update(fields({ name: `n${i}` }));
    await saver.flush();
  }
  assert.equal(sent.length, 3);
});

test('dispose stops pending saves', async () => {
  const { saver, sent } = make();
  saver.update(fields());
  saver.dispose();
  await wait(60);
  await saver.flush();
  assert.equal(sent.length, 0);
});
