---
title: Caveat Enforcers
sidebar_label: Overview
---

The original delegator delegates with `authority=0x00`. A delegation with `authority=0x00`, and no caveats, gives the delegate the same exact powers as the delegator. This means that if the contract is `Ownable`, the delegator just allowed the delegate to `transferOwnership`.

In order for the original delegator to limit the delegate's powers, he needs to introduce caveats. Caveats are a set of contracts that act as constraints to the delegate's powers. If the delegator had set an `AllowedMethodsEnforcer` for a specific function (e.g. the `function setPurpose(string _newPurpose)`, then any attempt of the delegate to `transferOwnership` will fail.

What's even better? Caveat Enforcers add run-time conditionals to EVM transactions.

**Native EVM transaction** can **NOT** enforce **when/how** the transaction is executed.

When signing a Transaction an Account is NOT able to enforce important run-time rules and conditions:

#### Basic Run-Time Rules missing from native EVM transactions:

- When (`block.timestamp`) the transaction can be executed i.e. before/after/between timestamp(s).
- What block (`block.blockNumber`) the transaction must be included in i.e. before/after/between blockNumber(s).

#### Advanced Run-Time Rules missing from native EVM transactions:

- **PROBLEM:** If the transaction requires other on-chain state conditionals (`oracles`) to be true/false before executing.
- **SOLUTION:** The Delegatable framework's Caveat Enforcers enable nuanced run-time transaction execution rules that unlock these transaction signing **super powers**!

## Examples of (primitive) Enforcers

- [AllowedMethodsEnforcer](/docs/enforcers/allowed-methods-enforcer)
- [BlockNumberEnforcerAfter](/docs/enforcers/block-number-after-enforcer)
- [BlockNumberEnforcerBefore](/docs/enforcers/block-number-before-enforcer)
- [ERC20AllowanceEnforcer](/docs/enforcers/erc20-allowance-enforcer)
- [LimitedCallsEnforcer](/docs/enforcers/limited-calls-enforcer)
- [RevocationEnforcer](/docs/enforcers/revocation-enforcer)
- [TimestampEnforcerAfter](/docs/enforcers/timestamp-after-enforcer)
- [TimestampEnforcerBefore](/docs/enforcers/timestamp-before-enforcer)

## Composability

**Enforcers can be composed together**. A single enforcer perhaps even multiple times in certain situations.

For example a User may choose to use the `TimestampEnforcerBefore` and the `ERC20AllowanceEnforcer` enforcers to give a friend permission to spend up to `100 tokens` for the next `30 days`.

As long as the verifying contract inherits from `Delegatable.sol`, developeds can focus on what they do best, and write their own, custom made enforcers for their Dapps', and users' needs.
