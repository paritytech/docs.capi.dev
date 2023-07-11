# Storage

The first step in interacting with storage is to create a Rune representing the
specific piece of storage.

## Storage Types

Let's use the fluent root to access some different kinds of storage.

## Items

```ts
const now = polkadot.Timestamp.Now.value()

now satisfies StorageRune<Polkadot, "Timestamp", "Now", never>
```

To access the value at a specific block hash, specify `undefined` and the block
hash string as the arguments of `value`. Otherwise, leave these two parameters
blank.

```ts
const now = polkadot.Timestamp.Now.value(undefined, blockHash)
```

## Maps

```ts
declare const publicKey: string

const accountInfo = polkadot.System.Account.value(publicKey)

accountInfo satisfies ValueRune<
  AccountInfo | undefined,
  ConnectionError | ServerError | $.ShapeError
>
```

To access the value at a specific block hash, specify the block hash string as
the second arguments of `value`.

```ts
const now = polkadot.System.Account.value(publicKey, blockHash)
```

## "N" Maps

The arguments of "N" maps' `value` are to be supplied within a tuple. I.e., if
we have an NMap of `(A, B, C)`, we call `.value([a, b, c])`.

## Map Pagination

We can paginate a maps keys and/or entries with `keys`, `keysRaw`, `entries` and
`entriesRaw`. The `Raw`-postfixed methods forgo the decoding process, whereas
the non-raw methods will decode the keys (and values in the case of `entries`)
in accordance with the FRAME metadata.

Let's create a Rune that describes the first 10 entries of Polkadot's `System`
`Account`s map.

```ts
const accountEntries = await polkadot.System.Account.entries({
  limit: 10,
})

accountEntries satisfies Rune<
  [Uint8Array, AccountInfo][],
  ConnectionError | ServerError | $.ShapeError
>
```

We can also supply a starting key and/or a partial key should we want to further
zero in on specific values.

```ts
declare const start: Uint8Array // a public key

const accountEntries = await polkadot.System.Account.entries({
  limit: 10,
  start,
})
```

To access the entries at a specific block hash, specify the block hash string as
the second arguments of `entries`.

```ts
const accountEntries = await polkadot.System.Account.entries(
  { limit: 10 },
  blockHash,
)
```
