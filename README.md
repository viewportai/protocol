# @viewportai/protocol

Canonical protocol contracts for Viewport.

This repository owns the public/shared contract surface used by the Viewport
control plane, `vpd` runner, relay-aware clients, SDKs, fixtures, and docs. It
is intentionally separate from product implementation repos so platform, daemon,
web, and future SDKs cannot drift into local copies of the same contract.

## Scope

Included:

- schema ids and version policy;
- workflow, route, execution profile, context, evidence, action, approval, and
  audit contracts;
- stable app-to-runner message contracts once promoted from the current daemon
  and web copies;
- samples and compatibility fixtures;
- generated TypeScript types and JSON Schema artifacts.

Excluded:

- private crypto implementation details;
- trusted-edge epoch internals;
- secret material, key storage, and local daemon persistence internals;
- platform-specific API resource DTOs;
- product UI state that is not a wire or persisted contract.

The rule is simple: if two repos need to agree on a shape, it belongs here or is
generated from here. Local copies are temporary migration debt and must be called
out explicitly.

## Current Status

This repository is public because protocol contracts are the shared OSS boundary.
The npm package remains unpublished/private while the contracts are being
hardened. It is package-release-ready only after:

- exports point at built artifacts;
- packed package import smoke passes;
- platform and daemon consumer contract tests are required in CI;
- target-only contracts are clearly separated from implemented contracts;
- generated JSON Schema projections exist for Zod-backed contracts;
- generated PHP/web projections exist for claimed consumers.

## Implemented Today

- `viewport.workflow/v1`
- repo config `schema: viewport.repo_config/v1` plus daemon-compatible
  `version: 1`
- route and execution profile shape validation
- evidence, action proposal, authorization decision, approval decision, context
  receipt, and audit receipt shape validation
- platform storage/replay compatibility for authorization decision records
- daemon emission plus platform storage/replay/health compatibility for context
  receipt records
- execution receipt provider response digests and optional provider
  reconciliation metadata shape validation
- workflow run wire projection schemas for run lists, run detail, run nodes,
  artifacts, evidence packets, approval decisions, side-effect receipts, audit
  receipts, contract health, and resource manifests

Compatibility claims are not release claims by themselves. A contract is only
production-ready when the relevant consumer repos prove it in CI.

## Target-Only

The runner workspace, context package registry semantics, normalized agent
event, and authorization decision runtime emission are not fully implemented end
to end yet. Their samples exist to lock vocabulary and review shape before
product code relies on them. Context receipts are implemented as provider usage
receipts, but the broader context package registry/update-governance contract is
still target-only.

## Commands

```bash
npm ci
npm run typecheck
npm test
npm run validate:samples
npm run generate:json-schemas
npm run build
npm run pack:smoke
```

Generated JSON Schema artifacts live under
[`generated/json-schema`](generated/json-schema). The manifest records which
contract keys currently have generated schemas and which still depend on
consumer-specific validators or target-only planning docs.

`validate:samples` performs package-local validation everywhere. If sibling
Viewport repos are present, it also runs compatibility checks against them. For
explicit consumer checks, set:

```bash
VIEWPORT_DAEMON_ROOT=/path/to/viewport/packages/daemon
VIEWPORT_PLATFORM_ROOT=/path/to/platform
```

## Consumer Migration Order

1. Add stable daemon/app wire contracts here.
2. Migrate workflow run records and run list/detail messages.
3. Migrate platform web WebSocket ingress validation to import this package.
4. Migrate daemon UI tests and daemon compatibility checks.
5. Remove local duplicate protocol files only after consumers are green.

Do not expand platform-local schemas to make a feature work. Move or generate
the contract here first.

See [`docs/consumer-migration.md`](docs/consumer-migration.md) for the active
consumer migration guardrails and known duplicate contract inventory.
