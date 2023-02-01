---
title: Why
sidebar_label: Why
---

When deciding to use a new framework, especially a smart contract one, you always have to ask the question "Why?"

**What problem are you trying to solve?**

The Delegatable framework is designed to overcome a number of challenges with native EVM transactions.

#### Examples of specific problem native transactions:

- **Authorization**: Permissions handled on a contact-by-contract basis. Instead of at the protocol or generalized framework level.
- **Ordering**: No expressive and dynamic transaction flows. Transactions must be processed in sequential order.
- **Scalability**: Fine-tuned permissions and delegations generally require on-chain storage.
- **Unbounded**: Access controls are not limited by timestamp, blockNumber or other on-chain conditionals.

When signing a `Transaction` with your `Account`, you expect a `Wallet` application to promptly submit the transaction?

🤔 _But what happens if a Wallet doesn't submit the transaction... immediately._

What if the Wallet has a partnership with a "Secret Flashbots Cabal" and the transaction isn't immediately sent to be mined; instead your transaction is sent to a MEV (miner extractable valuable) data processing warehouse, where they use this information to change the market conditions in 30 - 90 seconds, so you are negatively impacted, when the transaction is finally submitted?

🤯 **A drastic example, but it illustrates the point!**

**Bounded run-time permissions on transactions are very important.** Whether it's limiting attack attacks from bad actors or just dealing with bad network connection, Users should have the **power to decide when and how their transactions are executed.**

## Uniswap V2 - Real World Example

Uniswap V2 includes a blockNumber `deadline` as an input in the `swapTokensForExactTokens` function.

```solidity
function swapTokensForExactTokens(
    uint amountOut,
    uint amountInMax,
    address[] calldata path,
    address to,
    uint deadline
)
```

[Code Source](https://github.com/Uniswap/v2-periphery/blob/master/contracts/UniswapV2Router02.sol#L224)

<!-- You might be saying to yourself right about now _**"But why does that matter?"**_ -->

With the Delegatable framework, a decentralized exchange (DEX) like Uniswap, could use the [BlockNumberBefore Enforcer](/docs/enforcers/block-number-before-enforcer) instead of including blockNumber deadlines at the application/protocol layer. Additionally Users could set **before, after** and **between** conditionals, instead of **just before**, without changing the core smart contract function logic.

_Why is this important, you might ask?_

First, we have to ask the question "**Why does Uniswap have to enforce transaction-level access controls at all?**"

It's actually kind'of odd that UniswapV2 is required to include blockNumber deadlines in an AutomatedMarketMaker primitive when you really think about it. Ultimately that's a decision, which should be made independently of the protocol. A power exclusive to the Account signing and executing the transaction.
