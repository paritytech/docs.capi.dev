# Blocks

## Latest Finalized Block Hash

```ts
const blockHash = await chain.blockHash().run()
```

## Latest Finalized Block

```diff
const block = await chain
  .blockHash()
+ .block()
  .run()
```

## Reference A Specific Block

```ts
declare const hash: string

const block = await chain
  .blockHash(hash)
  .block()
  .run()
```

## Block Extrinsics

```ts
const block = await chain
  .blockHash()
  .block()
  .extrinsics()
  .run()
```

> Note: the `extrinsics` decodes the extrinsics in accordance with the given
> chain's FRAME metadata. To instead access the raw (encoded) extrinsics, use
> the `extrinsicsRaw` method.

## Block Events

```ts
const block = await chain
  .blockHash()
  .block()
  .events()
  .run()
```
