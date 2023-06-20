# Blocks

## Latest Finalized Block Hash

```ts
const blockHash = await chain.blockHash()
```

## Latest Finalized Block

```diff
const block = await chain
  .blockHash()
+ .block()
```

## Reference A Specific Block

```ts
declare const hash: string

const block = await blockHash
  .blockHash(hash)
  .block()
```

## Block Extrinsics

```ts
const block = await blockHash
  .blockHash()
  .block()
  .extrinsics()
```

> Note: the `extrinsics` decodes the extrinsics in accordance with the given
> chain's FRAME metadata. To instead access the raw (encoded) extrinsics, use
> the `extrinsicsRaw` method.

## Block Events

```ts
const block = await blockHash
  .blockHash()
  .block()
  .events()
```
