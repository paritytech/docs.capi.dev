# Extrinsics

At the heart of any extrinsic is some call data. Let's first create some call
data to represent one of the most common runtime operations: a balance transfer.

> Note: these examples assume there are two
> [test users](/setup/development_nets#development-users) in scope (`alexa` and
> `billy`).

```ts
import { polkadot } from "@capi/polkadot"

const call = polkadot.Balances.transfer({
  value: 12345n,
  dest: billy.address,
})
```

Now we must decide what to do with this call data. In most cases, you'll want to
sign it so that it can be submitted, either by you or by someone acting on your
behalf.

## Signature Patterns

Different chains can implement different means of signing and handling of signed
extras and "additionals." Such handling impacts behavior such as tipping and
validation. There is no obvious _good_ way to generate factories for
chain-specific signature management. Fortunately, Capi exposes several
hard-coded pattern libraries which cover the most common of signatures.

Let's import and utilize the Polkadot signature pattern.

```ts
import { polkadot } from "@capi/polkadot"
import { signature } from "capi/patterns/signature/polkadot"

const signed = polkadot.Balances
  .transfer({
    value: 12345n,
    dest: billy.address,
  })
  .signed(signature({ sender: alexa }))
```

> Note: we rename `call` to `signed` given that we're now calling `signed`,
> which chains into a `SignedExtrinsicRune`.

We can do a few things with the resulting `SignedExtrinsicRune`; two of the most
common use cases are submission and serialization, from which we get a
representation of the signed extrinsic for later submission.

## Submission & Beyond

To model the submission of the extrinsic, we use the `sent` method on
`SignedExtrinsicRune`.

```ts
const sent = polkadot.Balances
  .transfer({/* ... */})
  .signed(signature({ sender: alexa }))
  .sent()
```

The resulting `ExtrinsicStatusRune` contains a wide range of methods:

- `dbgStatuses`: console logs transaction statuses as they're received
- `statuses`: accepts a callback, to be called with transaction statuses as
  they're received
- `inBlock`: gives us the `inBlock` hash
- `inBlockEvents`: gives us the `inBlock` events
- `finalized`: gives us the `finalized` hash
- `finalizedEvents`: gives us the `finalized` events
