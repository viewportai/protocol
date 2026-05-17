# Compatibility Policy

`@viewportai/protocol` is the source of truth. Consumer repos prove compatibility
against it.

## Compatibility Levels

- `target-only`: vocabulary and sample shape exist, but no product consumer may
  claim support.
- `schema-validated`: this package validates the sample shape.
- `consumer-validated`: at least one implementation repo validates the sample in
  required CI.
- `production-ready`: schema validation, consumer validation, docs, migration
  notes, and compatibility tests are all required.

## Required Consumer Gates

Platform:

- validates route/profile/evidence/action/approval/audit samples into storage;
- validates API replay projections against protocol-backed fixtures;
- validates web render fixtures for supported run viewer states;
- rejects unsupported contract versions clearly.

Daemon/runner:

- validates workflow and repo config samples;
- validates action/approval/audit emission shapes;
- validates runner workspace and agent event shapes once promoted;
- rejects unsupported contract versions clearly.

Web:

- imports protocol package types for WebSocket ingress and command egress;
- renders protocol-backed replay fixtures;
- does not define local source-of-truth protocol schemas.

## Release Rule

No compatibility field should say `validated` unless a required CI job proves
that claim. Package-local tests can prove schema shape; they cannot prove a
consumer actually supports the contract.
