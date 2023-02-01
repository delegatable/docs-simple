---
title: Quickstart
sidebar_label: Quickstart
---

The Delegatable JS library helps developers structure Delegations, Invocations and Revocations.

- Sign Delegation
- Sign Invocation

### Create and Sign a Delegation

A `Delegation` grants authority to a third-party wallet to act on behalf of the signing wallet.

- **Delegate**: Address receiving delegated permissions/authority.
- **Authority**: ...
- **Caveats**: Rules and caveats limiting a delegated addresses permissions.

When first learning about the Delegatable the two most important parameters are `delegate` and `caveats`.

:::warning

Without any `caveats` the third-party has full `permissions` of the signing wallet.

:::
