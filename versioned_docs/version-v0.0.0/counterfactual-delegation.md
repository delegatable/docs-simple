---
title: Counterfactual Delegations
sidebar_label: Counterfactual Delegations
---

The Delegatable Framework, architected by [Dan Finlay](https://twitter.com/danfinlay) and [Rick Dudley](https://twitter.com/AFDudley0), inspired by exisiting [Object Capabilities](https://en.wikipedia.org/wiki/Object-capability_model) and [Capability](https://en.wikipedia.org/wiki/Capability-based_security) security models, is a scalable peer-to-peer access control system for EVM compute environments.

> Capability-based security is a concept in the design of secure computing systems, one of the existing security models. A capability (known in some systems as a key) is a communicable, unforgeable token of authority. It refers to a value that references an object along with an associated set of access rights. A user program on a capability-based operating system must use a capability to access an object.
>
> Capability-based security refers to the principle of designing user programs such that they directly share capabilities with each other according to the principle of least privilege, and to the operating system infrastructure necessary to make such transactions efficient and secure. Capability-based security is to be contrasted with an approach that uses traditional UNIX permissions and Access Control Lists.

The Delegatable Framework uses counterfactual assertions to enable unforgeable and revocable on-chain delegations.

Caveat enforcers enable transaction-level limiters using on-chain information like timestamp, blockNumber and data from on-chain DataStreams and/or Oracles; **features not currently available to native transactions.**

**Creating A Minimal Viable Counterfactual Substrate**

- On-chain Enforcers (transaction invocation rules)
- Off-chain Signatures (peer-to-peer access controls)

#### Source Material

- [History](https://roamresearch.com/#/app/capabul/page/cnW_23H8w)
- [Introduction](https://mirror.xyz/0x55e2780588aa5000F464f700D2676fD0a22Ee160/pTIrlopsSUvWAbnq1qJDNKU1pGNLP8VEn1H8DSVcvXM)

### What is counterfactual?

The Delegatable framework use counterfactual assertions to unlock on-chain capabilities.

> A counterfactual explanation describes a causal situation in the form: “If X had not occurred, Y would not have occurred”

As stated by Christoph Molnar in ["Interpretable Machine Learning: 9.2 Counterfactual Explanations"](https://christophm.github.io/interpretable-ml-book/counterfactual.html) the term counterfactual, in the world of computer science, pertains to conditional logic operator statements. It's the classic _"If this, than that."_ statement formally defined in terms of `contradictions` and `hypotheticals` used to declare the `TRUE`-ness of a computed `statement`.

**Basic Examples**

If `Alice` doesn't have off-chain signature `X` than `Alice` can't execute on-chain action `B`.

If on-chain condition `Z` is not satisfied than off-chain signature `T` can't be executed.

If Delegation `M` is not revoked than Invocation `N` can be executed.

**How It Works**

The Delegatable framework uses off-chain `assertions` to unlock on-chain access controls.

In other words, it's not possible to look at the blockchain, and _discover_ what accounts, have what permissions, because the `state` is only known to the involved parties; **opposite to most of today's EVM based access control systems.**

If the permission is not intended to be executed in the immediate future, than most smart contracts will use an on-chain delegation system, for managing access controls. While,this is a _perfectly fine approach_, it does have limitations. Plus, the conditional logic operators (timestamp, blockNumber, etc..) have to be included at protocol smart contract level, which is not ideal, if we're striving for modularity and separation of concerns. **And, _yes_, we are striving for modularity and separation of concerns.**

**Resources**

- https://christophm.github.io/interpretable-ml-book/counterfactual.html
