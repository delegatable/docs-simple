---
title: ERC20Allowance eEnforcer
sidebar_label: ERC20Allowance
---

We created an `ERC20Delegatable` contract (inherits from `ERC20` and `Delegatable`), to better illustrate the `Delegatable Framework`'s `ERC20Permit`'s functionality, and then some - through the use of `Enforcers`.

## Deployments

- Mainnet: Coming Soon
- Polygon: Coming Soon
- Optimism: Coming Soon

# How It Works

1. deploy an ERC20Delegatable contract
2. deploy an ERC20AllowanceEnforcer, through which delegators can approve delegates to spend on their behalf

## Smart Contracts

```solidity
contract ERC20Delegatable is ERC20, Delegatable {
    constructor(
        string memory name,
        string memory symbol,
        uint256 amount
    ) Delegatable(name, "1") ERC20(name, symbol) {
        _mint(msg.sender, amount);
    }

    function _msgSender()
        internal
        view
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

```solidity
contract ERC20AllowanceEnforcer is CaveatEnforcer {
    mapping(address => mapping(bytes32 => uint256)) spentMap;

    /**
     * @notice Allows the delegator to specify a maximum sum of the contract token to transfer on their behalf.
     * @param terms - The numeric maximum allowance that the recipient may transfer on the signer's behalf.
     * @param transaction - The transaction the delegate might try to perform.
     * @param delegationHash - The hash of the delegation being operated on.
     */
    function enforceCaveat(
        bytes calldata terms,
        Transaction calldata transaction,
        bytes32 delegationHash
    ) public override returns (bool) {
        bytes4 targetSig = bytes4(transaction.data[0:4]);
        bytes4 allowedSig = bytes4(0xa9059cbb);
        require(
            targetSig == allowedSig,
            "ERC20AllowanceEnforcer:invalid-method"
        );
        uint256 limit = BytesLib.toUint256(terms, 0);
        uint256 sending = BytesLib.toUint256(transaction.data, 36);
        spentMap[msg.sender][delegationHash] += sending;
        uint256 spent = spentMap[msg.sender][delegationHash];
        require(spent <= limit, "ERC20AllowanceEnforcer:allowance-exceeded");
        return true;
    }
}

```

## Javascript Example

```js
const delegation = {
  delegate: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045', // vitalik.eth
  authority:
    '0x0000000000000000000000000000000000000000000000000000000000000000',
  caveats: [
    {
      enforcer: ERC20AllowanceEnforcer.address,
      terms: ethers.utils.hexZeroPad(utils.parseEther('0.5').toHexString(), 32),
    },
  ],
};
```
