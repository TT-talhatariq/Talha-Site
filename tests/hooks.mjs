// Lets `node --test` load the app's TypeScript: maps "@/x" to src/x and adds
// the .ts extension to extensionless imports. Test-only.
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const src = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src');

export function resolve(specifier, context, next) {
  let target = null;
  if (specifier.startsWith('@/')) target = path.join(src, specifier.slice(2));
  else if (specifier.startsWith('.') && context.parentURL?.endsWith('.ts')) {
    target = path.resolve(path.dirname(fileURLToPath(context.parentURL)), specifier);
  }
  if (target && !path.extname(target) && existsSync(`${target}.ts`)) {
    return next(pathToFileURL(`${target}.ts`).href, context);
  }
  return next(specifier, context);
}
