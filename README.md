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
- generated TypeScript types and future JSON Schema artifacts.

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
- generated PHP/web/JSON Schema projections exist for claimed consumers.

## Implemented Today

- `viewport.workflow/v1`
- repo config `schema: viewport.repo_config/v1` plus daemon-compatible
  `version: 1`
- route and execution profile shape validation
- evidence, action proposal, approval decision, authorization decision, context
  receipt, and audit receipt shape validation

Compatibility claims are not release claims by themselves. A contract is only
production-ready when the relevant consumer repos prove it in CI.

## Target-Only

The runner workspace, context package registry semantics, normalized agent event,
authorization decision emission, and context receipt emission are not fully
implemented end to end yet. Their samples exist to lock vocabulary and review
shape before product code relies on them.

## Commands

```bash
npm ci
npm run typecheck
npm test
npm run validate:samples
npm run build
npm run pack:smoke
```

`validate:samples` performs package-local validation everywhere. If sibling
Viewport repos are present, it also runs compatibility checks against them. For
explicit consumer checks, set:

```bash
VIEWPORT_DAEMON_ROOT=/path/to/viewport/packages/daemon
VIEWPORT_PLATFORM_ROOT=/path/to/platform
```

## Consumer Migration Order

1. Add stable daemon/app wire contracts here.
2. Migrate platform web WebSocket ingress validation to import this package.
3. Migrate workflow run records and session transcript types.
4. Migrate daemon UI tests and daemon compatibility checks.
5. Remove local duplicate protocol files only after consumers are green.

Do not expand platform-local schemas to make a feature work. Move or generate
the contract here first.
