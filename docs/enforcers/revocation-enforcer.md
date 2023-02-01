---
title: Revocation Enforcer
sidebar_label: Revocation
---

The `RevocationEnforcer.sol` smart contract allows the delegator (owner) to revoke his signed delegation immediately.

## Deployments

- Mainnet: Coming Soon
- Polygon: Coming Soon
- Optimism: Coming Soon

# How It Works

1. The delegator needs to include the `RevocationEnforcer` caveat, in the (signed) delegation - otherwise he won't be able to revoke his delegation later.
2. If the delegator decides to revoke the delegation, he needs to call `revocationEnforcer.revokeDelegation(signedDelegation, domainHash)`. He has to submit that tx himself.

## Javascript Example-1: including the revocation caveat

```js
const delegation = {
  delegate: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045', // vitalik.eth
  authority:
    '0x0000000000000000000000000000000000000000000000000000000000000000',
  caveats: [
    {
      enforcer: RevocationEnforcer.address,
      terms: '0x00',
    },
  ],
};
```

## Javascript Example-2: revoking a delegation

```js
let tx = await revocationEnforcer
  .connect(delegator)
  .revokeDelegation(signedDelegation, domainHash);
await tx.wait();
```

### Smart Contract

```solidity
contract RevocationEnforcer is
    CaveatEnforcer,
    Delegatable("RevocationEnforcer", "1")
{
    mapping(bytes32 => bool) isRevoked;

    function enforceCaveat(
        bytes calldata _terms,
        Transaction calldata _transaction,
        bytes32 delegationHash
    ) public view override returns (bool) {
        require(!isRevoked[delegationHash], "RevocationEnforcer:revoked");
        return true;
    }

    function revokeDelegation(
        SignedDelegation calldata signedDelegation,
        bytes32 domainHash
    ) public {
        address signer = verifyExternalDelegationSignature(
            signedDelegation,
            domainHash
        );
        address sender = _msgSender();
        console.log("Sender is ", sender);
        console.log("signer is ", signer);
        console.log("msg sender is ", msg.sender);
        require(signer == sender, "RevocationEnforcer:invalid-revoker");
        bytes32 delegationHash = GET_SIGNEDDELEGATION_PACKETHASH(
            signedDelegation
        );
        isRevoked[delegationHash] = true;
    }

    function verifyExternalDelegationSignature(
        SignedDelegation memory signedDelegation,
        bytes32 domainHash
    ) public view virtual returns (address) {
        Delegation memory delegation = signedDelegation.delegation;
        bytes32 sigHash = getExternalDelegationTypedDataHash(
            delegation,
            domainHash
        );
        address recoveredSignatureSigner = recover(
            sigHash,
            signedDelegation.signature
        );
        return recoveredSignatureSigner;
    }

    function getExternalDelegationTypedDataHash(
        Delegation memory delegation,
        bytes32 domainHash
    ) public pure returns (bytes32) {
        bytes32 digest = keccak256(
            abi.encodePacked(
                "\x19\x01",
                domainHash,
                GET_DELEGATION_PACKETHASH(delegation)
            )
        );
        return digest;
    }

    /**
     * This is boilerplate that must be added to any Delegatable contract if it also inherits
     * from another class that also implements _msgSender().
     */
    function _msgSender() internal view override returns (address sender) {
        if (msg.sender == address(this)) {
            bytes memory array = msg.data;
            uint256 index = msg.data.length;
            assembly {
                // Load the 32 bytes word from memory with the address on the lower 20 bytes, and mask those.
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
