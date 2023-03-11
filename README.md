# docs.capi.dev

# Rune

Rune is a framework for interacting with blockchains. It handles connection, parallelization, data transformation, type generation and much more for you. 

### 


## Structuring your rune program

### Rune & Running
Every time you interact with a blockchain using rune, whether it's reading data or adding a transaction, you'll receive a Rune object that contains that interaction and it's result.

A Rune object is a function call that has not been sent yet, a reference to the action (which may be a transaction, a read, etc).

Once you `.run()` a rune, it's sent to the blockchain (which may be through rpc or another implementation-specific protocol). 

Interactions that depend on each other will be emitted sequentially, and many will be parallelized when possible for optimization.
In a situation where two runes don't depend on each other, they could be parallelized in order to resolve to their values. Only runes that depend on other runes are ran sequentially. 

### Chaining runes

Your program will usually form a dependency graph of interactions that depend on others in order to execute. These dependencies can be implicit or explicit:

```ts
const price: Rune<number> = Nfts.ItemPriceOf.entry([collection, nft]).access(0) // rune for geting the NFT's price
const buyNft = Nfts.buyItem({collection, nft, bidPrice: price}) // transaction rune for buying the NFT
```

Here you can see that the [transaction](https://wiki.polkadot.network/docs/learn-extrinsics) for buying a NFT - which is a ExtrinsicRune - implicitly depends on the previous ValueRune completing with a price by receiving the rune in its parameters. 

If you have multiple transactions that need to execute sequentially, you can use `chain` to explicitly declare that one should only execute after the other has completed:

```ts
Rune
  .chain(() => createCollection)
  .chain(() => setCollectionMetadata)
  .chain(() => mintItem)
  .chain(() => setItemMetadata)
  .chain(() => setItemPrice)
  .chain(() => lockItemProperties)
  .chain(() => setCollectionMaxSupply)
  .chain(() => lockCollection)
```

These are the two main ways of expressing sequentiality and declaring which rune depends on another to compute.
or executing a rune that depends on a previous value
### Chain and Map



### Rune types

### Functions & data transformation

You'll frequently need a value in order to transform it, or execute other functions based on its value.

In order to facilitate interaction with rune, it's ideal to build your functions with rune in mind:

## Extending Rune
