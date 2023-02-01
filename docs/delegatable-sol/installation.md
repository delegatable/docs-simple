---
title: Installation
sidebar_label: Installation
---

- Solidity: `0.8.15`
- Package: `v0.0.0-beta.0`

```sh
npm add @delegatable/core-sol
```

```sh
yarn add @delegatable/core-sol
```

```sh
pnpm add @delegatable/core-sol
```

#### Inheriting Delegatable Functionality

```solidity
//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@delegatable/core-sol/contracts/Delegatable.sol";

contract ExampleDelegatable is Delegatable, Ownable {

    constructor(string memory name) Delegatable(name, "1") {}

    /// @notice Override the _msgSender method
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
