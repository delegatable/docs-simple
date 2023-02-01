---
title: Features
sidebar_label: Features
---

The Delegatable Framework is a generalized access control system for EVM compatible blockchains using counterfactual, revocable delegations.

Enabling complex transaction execution conditionals using a [Capabilities](https://en.wikipedia.org/wiki/Capability-based_security) inspired architecture used in UNIX systems.

> Capability-based security refers to the principle of designing user programs such that they directly share capabilities with each other according to the principle of least privilege, and to the operating system infrastructure necessary to make such transactions efficient and secure. Capability-based security is to be contrasted with an approach that uses traditional UNIX permissions and Access Control Lists.

The Delegatable framework is a **principled peer-to-peer access control system** for the EVM Operating Systems.

### Features

- [Counterfactual Delegations](#counterfactual-delegations)
- [Peer-to-Peer Access Controls](#peer-to-peer-access-controls)
- [Transaction Execution Conditionals](#transaction-execution-conditionals-caveat-enforcers)
- [Meta-Transactions](#meta-transactions)
- [Non-Blocking Nonce Queues](#non-blocking-nonce-queues)

### Counterfactual Delegations

On-chain access controls are **invoked** using **capabilities** enabled off-chain signatures.

In other words, fine-tuned transaction execution conditionals (access controls) can be crafted/shared off-chain (saving gas). Instead of requiring an on-chain delegation or single-use delegation, the Delegatable framework, enables Users to define more complex, peer-to-peer access controls that are both privacy preserving and scalable in nature.

**All of this done without compromising on the security guarantees of final execution in the smart contract.**

Without a centralized registry or any on-chain transaction, a `Wallet` is able to grant permissions to another `Wallet` to act on their behalf. The delegated permissions can also be bounded by **timestamps, blockNumbers, allowances, oracles,** and **more!**

#### The Situation - `Alice` and `Bob` sharing `Tokens` between `Vaults`

Let's imagine `Alice` has a balance of `1000` tokens in `VaultA`. `Alice` wants to give a `Bob` permission to borrow tokens, in case of an emergency. And `Bob` is very thankful for the generosity of `Alice`!

How it works with Delegatable:

- `Alice` signs a `Delegation` and gives `Bob` permission to transfer `500` tokens from `VaultA` to `VaultB` for 30 days.
- `Bob` saves the `Delegation` to a local device.
- `Alice` and `Bob` are the only parties who know about this delegation.
- `Bob` after 1 week, decides to `Invoke` the `Delegation` and transfer `500` tokens from `VaultA` to `VaultB` for 30 days.

_**Magic**_ 🪄 a Web of Trust is beginning to emerge.

### Transaction Execution Conditionals (Caveat Enforcers)

Core to the Delegatable framework is the ability to define **transaction execution conditionals**. Accounts can limit when and how a transaction is executed using existing and/or customer enforcers.

Existing enforcers include:

- Allowed Methods
- BlockNumber
- Timestamp
- ERC20 Allowance
- Revocation

### Meta-Transactions

Meta-transactions, a technology pioneered at uPort/ConsenSys (CTO Christian Lundkvist), enables third-party accounts to pay gas costs for a transaction. The Delegatable framework includes a meta-transaction sub-system, so all Delegations are automatically meta-transaction compatible.

Account signing a Delegation DO NOT have to submit and pay for the transaction.

### Non-Blocking Nonce Queues

A challenge with today's EOA and Smart Wallet is the usage of single nonce. All transactions must be processed in sequential order. The Delegatable framework introduces horizontally scalable **nonce queues** to overcome the limitations of a single threaded account.
