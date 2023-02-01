---
title: On-Chain Execution
sidebar_label: On-Chain Execution
---

## Getting Started

The Delegatable smart contracts must be inherited in order to utilize the counterfactual delegation. The smart contracts are not intended to be used as `library` or in a `proxy` pattern. The commonly used `_msgSender()` method must also be overwritten.

#### Important Reminders

- Delegatable smart contract **must** be inherited.
- The `_msgSender()` method **must** be overridden.

```solidity
import { Delegatable } from "@delegatable/core-sol";

contract ExampleContract is Delegatable {
    constructor(string memory contractName) Delegatable(contractName, "1") {}

    function _msgSender()
        internal
        view
        virtual
        override(DelegatableCore, Context)
        returns (address sender)
    {
        if (msg.sender == address(this)) {
            bytes memory array = msg.data;
            uint256 index = msg.data.length;
            assembly {
                sender := and(
                    mload(add(array, index)),
                    0xffffffffffffffffffffffffffffffffffffffff
                )
            }
        } else {
            sender = msg.sender;
        }
        return sender;
    }
}
```

## Invocations (Executing a Delegation)

The primary method exposed by the Delegatable framework is the `invoke` method.

```solidity
function invoke(SignedInvocation[] calldata signedInvocations) external returns (bool success);
```

The `invoke` method when executed by an EOA (externally owned account) is designed to call other `public/external` methods on the same target smart contract.

For example let's imagine `ExampleContract.sol` has two methods: `set` and `update`.

After ExampleContract.sol inherits Delegatable.sol, the `ExampleContract` interface will include third `public` method named `invoke` which can call `set` and `update` for third-party `accounts` which have been delegated off-chain, counterfactual delegations.

ExampleContract.sol **before** inheriting Delegatable.sol

- `set(string memory purpose);`
- `update(string memory purpose, string memory reason);`

ExampleContract.sol **after** inheriting Delegatable.sol

- `set(string memory purpose);`
- `update(string memory purpose, string memory reason);`
- `invoke(SignedInvocation[] calldata signedInvocations)`
  - call => `set(string memory purpose);`
  - call => `update(string memory purpose, string memory reason);`

### How Invocations Work

Invocations are very similar to normal transactions. Including core fields like `data` and `value` which are part of every transaction.

But wrapped around those core fields is a signing schema to enable flexible transaction execution conditionals.

As mentioned in the [Introduction/Why](/docs/why) page it's somewhat odd, protocols like Uniswap have to include blockNumber deadlines in an Automated Market Making (AMM) protocol. The Delegatable framework introduces a unique EIP712 signing schema to enable transaction execution conditionals at a new part of the EVM stack.

```sol
function invoke(SignedInvocation[] calldata signedInvocations)
    external
    override
    returns (bool success)
{
    for (uint256 i = 0; i < signedInvocations.length; i++) {
        SignedInvocation calldata signedInvocation = signedInvocations[i];
        address invocationSigner = verifyInvocationSignature(
            signedInvocation
        );
        _enforceReplayProtection(
            invocationSigner,
            signedInvocations[i].invocations.replayProtection
        );
        _invoke(signedInvocation.invocations.batch, invocationSigner);
    }
}
```

The `invoke` function ingests `SignedInvocation`, which are wrapping `Delegations` containing transaction execution conditional rule-sets. Makes perfect sense right 😅 not too worry though if that sounds like an empty world salad, with more examples, it will start to make sense.
