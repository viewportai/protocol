import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { WIRE_SCHEMAS } from '../src/wire-schemas.js';

const schemaDir = path.resolve(import.meta.dirname, '../generated/json-schema');

describe('generated JSON Schema artifacts', () => {
  it('publishes every implemented wire schema in the manifest', async () => {
    const manifest = JSON.parse(await readFile(path.join(schemaDir, 'manifest.json'), 'utf8'));
    const entries = new Map(
      (manifest.schemas as Array<{ key: string; schemaId: string; jsonSchema?: string }>).map((entry) => [
        entry.key,
        entry,
      ]),
    );

    for (const schema of WIRE_SCHEMAS) {
      const entry = entries.get(schema.key);
      expect(entry).toMatchObject({
        key: schema.key,
        schemaId: schema.schemaId,
        jsonSchema: `generated/json-schema/${schema.key}.schema.json`,
      });
    }
  });

  it('emits root definitions for workflow run WebSocket envelopes', async () => {
    for (const schema of WIRE_SCHEMAS) {
      const document = JSON.parse(
        await readFile(path.join(schemaDir, `${schema.key}.schema.json`), 'utf8'),
      );

      expect(document.definitions?.[schema.schemaId]).toBeDefined();
    }
  });
});
