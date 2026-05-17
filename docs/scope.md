# Protocol Scope

The protocol repo owns shared contracts, not every implementation detail.

## Owned Here

- Document contracts:
  - workflow
  - route
  - execution profile
  - runner workspace
  - context package
  - evidence packet
  - action proposal
  - authorization decision
  - approval decision
  - context receipt
  - audit receipt
- Stable app-to-runner wire contracts:
  - daemon-to-app event envelopes
  - app-to-daemon command envelopes
  - session, workflow run, hook, and discovery message shapes
- Samples and fixtures that all consumers use for compatibility.
- Generated types/schemas for supported languages.
- Optional provider reconciliation metadata on execution receipts. This records
  a read-after-write/provider-check result; it is not a substitute for runner
  signing, Merkle inclusion, or managed-provider attestation.

## Not Owned Here

- User/device key material.
- Epoch internals.
- Relay transport implementation.
- Database schemas except as generated projections.
- Platform-only REST resource shapes.
- UI component state.

## Promotion Rule

Experimental shapes can exist as samples or `target-only` contracts, but product
code must not rely on them as production-ready until:

1. the schema is validated in this repo;
2. at least one implementation consumer proves compatibility in CI;
3. docs describe the contract and compatibility boundary;
4. versioning and migration impact are understood.
