import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { CONTRACTS, ProtocolDocumentSchemas } from '../src/index.js';

const outDir = path.resolve(import.meta.dirname, '../generated/json-schema');
await mkdir(outDir, { recursive: true });

const manifest = [];

for (const contract of CONTRACTS) {
  const zodSchema =
    ProtocolDocumentSchemas[contract.schemaId as keyof typeof ProtocolDocumentSchemas];
  if (!zodSchema) {
    manifest.push({
      key: contract.key,
      schemaId: contract.schemaId,
      status: contract.status,
      jsonSchema: null,
      reason: 'No Zod contract exists yet for this schema id.',
    });
    continue;
  }

  const fileName = `${contract.key}.schema.json`;
  const jsonSchema = zodToJsonSchema(zodSchema, {
    $refStrategy: 'none',
    name: contract.schemaId,
    target: 'jsonSchema7',
  });

  await writeFile(
    path.join(outDir, fileName),
    `${JSON.stringify(jsonSchema, null, 2)}\n`,
    'utf8',
  );

  manifest.push({
    key: contract.key,
    schemaId: contract.schemaId,
    status: contract.status,
    jsonSchema: `generated/json-schema/${fileName}`,
  });
}

await writeFile(
  path.join(outDir, 'manifest.json'),
  `${JSON.stringify({ generatedBy: 'npm run generate:json-schemas', schemas: manifest }, null, 2)}\n`,
  'utf8',
);
