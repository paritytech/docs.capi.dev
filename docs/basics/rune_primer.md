# Rune Primer

Before we move any further, let's briefly touch on Rune (which we cover more in
depth in [a later section](/rune)).

Rune is a novel system for modeling TypeScript APIs. Developed by the Capi core
team, this system is geared towards enabling a wide range of capabilities
conducive to enhanced end-user experiences. In the near-term, it enables
type-safe error handling, automatic parallelism and a declarative and
resource-considerate DX.

If this sounds intimidating, worry not; **you'll barely notice Rune's
presence**. You can think of it as Capi's query builder API.

## Basic Example

```ts
import { polkadot } from "@capi/polkadot"

const firstTenEntries = polkadot.System.Account.entries({ limit: 10 })

firstTenEntries.run() // `Promise<AccountInfo>`
```

There are three key steps in this example:

1. We create a rune named `firstTenEntries`. This is a description of what we
   want, not the actual result. Network interaction has yet to occur.
2. We execute the `firstTenEntries` Rune, which gives a promise resolving to
   `AccountInfo`

## Composition

The intention behind Rune is to enable composition of complex interactions
(potentially spanning many chains). This spares developers of needing to think
about properties such as async/await or performance tweaks such as
deduplication.

Let's model a derived read in which we retrieve the active staking era in order
to retrieve that era's reward points.

```ts
import { westend } from "@capi/westend"
import { is } from "capi"

const idx = westend.Staking.ActiveEra
  .value()
  .unhandle(is(undefined))
  .access("index")

const points = await westend.Staking.ErasRewardPoints.value(idx)
```

## "Handling"

You may notice the `unhandle` method usage in the previous snippet. This enables
us to halt Rune execution and bubble up a given value (could be anything, but
usually `undefined` or `Error` subtype). In this regard, Rune is a functional
effect system. We can leverage this system for type-safe error handling.

Consider the example of a simple storage read.

```ts
import { polkadot } from "@capi/polkadot"

const accountInfo = polkadot.System.Account.value(alexa.publicKey)
```

The signature of the `accountInfo` Rune is as follows.

```ts
ValueRune<
  AccountInfo | undefined, // the `T` type parameter, the main type
  ConnectionError | ServerError | $.ShapeError // the `U` type parameter, what has been unhandled
>
```

Let's rehandle `ServerError`s.

```ts
import { polkadot } from "@capi/polkadot"
import { is, Rune, ServerError } from "capi"

const fallback = Rune.constant("the fallback" as const)

const accountInfo = polkadot.System.Account
  .value(alexa.publicKey)
  .rehandle(is(ServerError), () => fallback)
```

In this example, the `accountInfo` Rune now has the following type.

```ts
ValueRune<
  AccountInfo | undefined | "the fallback",
  ConnectionError | $.ShapeError
>
```
