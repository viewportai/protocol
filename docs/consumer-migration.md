# Consumer Migration

Status: active migration guardrail.

The protocol repo is canonical now, but not every consumer should import the
package immediately. Until `@viewportai/protocol` is published or installed
through an explicit package source, consumers should use protocol samples and
compatibility tests rather than sibling-path imports.

## Non-Negotiable Rules

1. Shared shapes move here first.
2. Consumer repos prove compatibility in CI before claiming support.
3. Temporary duplicate shapes must be named as migration debt.
4. Do not add new platform-local, daemon-local, or web-local protocol types when
   the shape is shared across repos.
5. Do not import from a sibling checkout path in product code.

## Current Consumer State

| Consumer | Current State | Next Required Move |
| --- | --- | --- |
| `platform` API | CI checks out public `viewportai/protocol` samples and proves route/profile/record storage and replay compatibility. | Add generated PHP validators or an explicit JSON Schema validation path from this repo. |
| `platform` web | Still has local daemon/websocket/session protocol types. | Migrate only after stable app-runner wire contracts are exported here. |
| `viewport` daemon | Still owns the working daemon/app wire implementation and protocol matrix. | Promote stable wire contracts here, then make daemon tests consume them. |
| `viewport` daemon test UI | Duplicates browser-side protocol helpers. | Remove after daemon/app wire contracts are imported from this repo. |
| Docs/masterplan | Treats this repo as canonical and records target-only boundaries. | Generate public contract reference from this repo after schemas stabilize. |

## Migration Order

1. Keep platform API fixture compatibility pinned to the public protocol repo.
2. Add stable app-runner wire contracts to this repo from the existing daemon
   and web copies.
3. Add package-level tests for those wire contracts.
4. Update daemon protocol matrix tests to import the package.
5. Update platform web websocket/session stores to import the package.
6. Add generated PHP or JSON Schema validation for platform API request paths.
7. Delete migrated local duplicate files after all consumers are green.

## Explicit Debt Inventory

Known duplicate/shared contract locations:

- `platform/apps/web/src/lib/protocol.ts`
- `platform/apps/web/src/lib/protocol-types.ts`
- `viewport/packages/daemon/src/server/ws-protocol.ts`
- `viewport/packages/daemon/tests/ui/lib/protocol.ts`

These files should not expand except to keep existing behavior working while the
canonical contracts are promoted into this repo.

## Package Consumption Policy

Allowed now:

- CI fixture checkout of `viewportai/protocol`;
- local validation through `VIEWPORT_PROTOCOL_SAMPLES_DIR`;
- developer review against canonical samples.

Not allowed yet:

- product-code imports from sibling checkout paths;
- claiming generated validator coverage before it exists;
- publishing broad semver guarantees for target-only contracts.

Allowed after package release:

- imports from `@viewportai/protocol`;
- generated validator artifacts from the package;
- docs generated from package metadata and schemas.

