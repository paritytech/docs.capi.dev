# Introduction

Rune is the basis for Capi's fluent query builder API.

## Why?

Rune facilitates obtaining correct results when working with multiple
interrelated subscriptions, which arise from cross-chain interactions.

Additionally, Rune abstracts away how queries are executed, allowing developers
to focus on defining the data they want to access.

## Basic Examples

A rune can be created from a value, resulting in a `ValueRune`. The rune can
then be `.run()` to retrieve the original value.

```ts
import { Rune } from "capi"

const myRune = Rune.constant(123)
// myRune: ValueRune<number>

const myValue = await myRune.run(scope) // the `.run()` method takes a scope argument
console.log(myValue) // 123
```

A rune can also be created from a function, which results in a `FnRune`. Runes
are inherently lazy – they don't do anything until you `.run()` them.

```ts
import { Rune } from "capi"

const printAndAdd = Rune.fn((a: number, b: number) => {
  console.log(a + b)
})
// printAndAdd: FnRune<(a: number, b: number) => void>

const printThree = printAndAdd.call(1, 2) // no console output
// printThree: ValueRune<void>

await printThree.run() // 3
```

## An Interesting Example

Here, we'll use Capi to see real-world Rune usage.

```ts
import { polkadot } from "@capi/polkadot"
// polkadot: ChainRune

// Specific to Capi's API:
//   `polkadot` has `PalletRune` members, such as `polkadot.Timestamp`.
//   `polkadot.Timestamp` has `StorageRune` members, such as `polkadot.Timestamp.Now`.
//    A `StorageRune` corresponds an on-chain storage map or item.

// The chain's current recorded time.
const time = polkadot.Timestamp.Now.value()
// time: ValueRune<bigint>
// Specific to Capi's API:
//   On-chain timestamps are stored as `u64`s (64-bit integers).
//   A regular JS `number` is not large enough to store all 64-bit integers.
//   Thus, in JS, it is a `bigint`.

console.log(await time.run()) // 1683481710000n (for example)
```

We can also get the timestamp at a specific block hash:

```ts
import { polkadot } from "@capi/polkadot"

const blockHash =
  "0x0fb7fb31a01c7b6697d663d0040ae034e7c2d4e2a4aa7517424a8d3af2fa4135"

const time = polkadot.Timestamp.Now.value(undefined, blockHash)
// Specific to Capi's API:
//   The `undefined` corresponds to the storage key.
//   To specify the second argument (the block hash), we must now explicitly specify the storage key.
//   Because `Now` is a storage item (not a storage map), its only key is `undefined`.

console.log(await time.run()) // 1683556218000n
```

## Subscriptions

Rune is also designed to seamlessly integrate subscriptions. We can modify the
previous example to subscribe to the latest timestamp.

```ts
import { polkadot } from "@capi/polkadot"

const blockHash = polkadot.latestBlockHash
// blockHash: BlockHashRune
// `blockHash` is a subscription to the chain's latest block.
// Like the other runes, it doesn't do anything until it is run.

const time = polkadot.Timestamp.Now.value(undefined, blockHash)
// Because we passed a subscription in to the block hash parameter,
// the `time` rune is also a subscription.

// We can iterate over the values of the subscription using `.iter()`.
// `.iter()` is like `.run()` except it returns an `AsyncIterable`.
for await (const value of time.iter()) {
  console.log(value) // This will continually print out timestamps until the script is stopped.
  // Output:
  //   1683555966001n
  //   1683555972000n
  //   1683555978000n
  //   ...
}
```

Rune is able to correctly merge multiple (potentially interdependent)
subscriptions.

```ts
import { polkadot } from "@capi/polkadot"
import { Rune } from "capi"

const blockHash = polkadot.latestBlockHash
const time = polkadot.Timestamp.Now.value(undefined, blockHash)

// `Rune.object` takes multiple runes and combines them.
const blockWithTime = Rune.object({ blockHash, time })
// blockWithTime: ValueRune<{ blockHash: string, time: bigint }>
// Since `blockHash` and `time` are subscriptions, `blockWithTime` is also a subscription.
// Though `blockHash` and `time` are two separate subscriptions, they are interdependent.
// Rune ensures that all interdependent subscriptions are correctly paired.

// Specific to Capi's API:
//   It's not easy to get a subscription like `blockWithTime` from the RPC calls the nodes expose.
//   Though there is a method to subscribe to blocks, and a method to subscribe to storage,
//   there isn't a good way to know how those line up.
//   Under the hood, Capi is subscribing to the latest block, and on every new block, querying storage.
//   These results come in at different times, but Rune ensures that they are outputted simultaneously.

for await (const value of blockWithTime.iter()) {
  console.log(value)
  // Output:
  //   {
  //     blockHash: "0x0fb7fb31a01c7b6697d663d0040ae034e7c2d4e2a4aa7517424a8d3af2fa4135",
  //     time: 1683556218000n, // we'll confirm this value in the next example
  //   }
  //   {
  //     blockHash: "0x0cd01e56e75308c90ebc7015e5488172454264aedb2906213a15631db503a59c",
  //     time: 1683556224001n,
  //   }
  //   {
  //     blockHash: "0xdf1184b56340dd2f467417fb4366cfc941c7abb2802dd6be50d39a6328d25fad",
  //     time: 1683556230000n,
  //   }
  //   ...
}
```

The `blockHash` and `time` values are correctly paired, meaning that each `time`
value corresponds to the time at the block specified by `blockHash`. We can
confirm this using one of our earlier examples:

```ts
import { polkadot } from "@capi/polkadot"

// The `blockHash` from the first object printed
const blockHash =
  "0x0fb7fb31a01c7b6697d663d0040ae034e7c2d4e2a4aa7517424a8d3af2fa4135"

const time = polkadot.Timestamp.Now.value(undefined, blockHash)

// The `time` from the first object printed
console.log(await time.run()) // 1683556218000n
```
