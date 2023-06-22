# Types

The types of the on-chain world are declared in a given
[Substrate](https://substrate.io/)-based chain's (Rust) source code. While many
types may remain consistent across chains, many may differ. On one chain,
`AccountData` may be defined with fields describing fungible assets; on another
(hypothetical) chain, perhaps `AccountData` describes non-fungible assets,
reputation, linked accounts or something else entirely. Capi's codegen outputs
TypeScript-idiomatic equivalents of the Rust-declared types, along with
utilities such as object and variant factories, type guards and runtime
[scale-ts](https://github.com/paritytech/scale-ts) codecs. This reduces the
friction of targeting a Rust-defined environment from your JavaScript
environment. It also ensures optimal type safety!

## Conversion Table

The following table describes how Capi translates a given chain's Rust-declared
types to and from JavaScript types.

<table><tr><td><b>Rust</b></td><td><b>TypeScript</b></td></tr><tr><td>

```rust
type T0 = ();
type T1 = (A,);
type T2 = (A, B);
type T3 = Vec<u8>;
type T4 = [u8; N];
type T5 = Vec<A>;
type T6 = [A; N];
type T7 = Option<A>;
type T8 = Result<O, E>;

struct S0;
struct S1(A);
struct S2(A, B);
struct S3 { a: A }

enum E0 {}
enum E1 { A, B, C }
enum E2 {
  W,
  X(A),
  Y(B, C),
  Z { d: D },
}
```

</td><td>

```ts
type T0 = null
type T1 = A
type T2 = [A, B]
type T3 = Uint8Array
type T4 = Uint8Array
type T5 = A[]
type T6 = A[] & { length: N }
type T7 = A | undefined
type T8 = O | ChainError<E>

type S0 = null
type S1 = A
type S2 = [A, B]
type S3 = { a: A }

type E0 = never
type E1 = "A" | "B" | "C"
type E2 =
  | { type: "W" }
  | { type: "X"; value: A }
  | { type: "Y"; value: [B, C] }
  | { type: "Z"; d: D }
​
```

</td></tr></table>

## Declarations

After syncing (covered in [the setup section](/setup)), we can access
type-related exports from the net-specific codegen.

Let's consider the example of Polkadot's `AccountInfo` type.

```ts
import { AccountInfo } from "@capi/polkadot"
```

The `AccountInfo` type has the following signature.

```ts
type AccountInfo = {
  nonce: number
  consumers: number
  providers: number
  sufficients: number
  data: {
    free: bigint
    reserved: bigint
    miscFrozen: bigint
    feeFrozen: bigint
  }
}
```

Rust enum variants' narrow representations are accessible from a namespace
overlapping their union type.

```ts
import { XcmV1Junction } from "@capi/statemine"
//       ^ a union, member of which is `XcmV1Junction.Parachain`

type Parachain = XcmV1Junction.Parachain
```

## Factories

Accompanying every object, tuple and union member type is a runtime factory for
simple construction of on-chain data types within JavaScript.

Let's use the `AccountData` example from earlier. We can utilize the very same
import as a factory with no change to our imports.

```ts
const accountData = AccountData({
  nonce: 0,
  consumers: 1,
  providers: 2,
  sufficients: 3,
  data: {/* ... */},
})
```

In the case of a union variant, the factories take care of tagging the value.

Instead of writing the following...

```ts
const J = {
  type: "Parachain",
  value: 1,
}
```

... we can do this:

```ts
const J = XcmV1Junction.Parachain(1)
```

These factories accept both resolved JS values and (unresolved) Runes (covered
in [a previous section](/basics/rune)).

```ts
const one = Rune.constant(1)
const J = XcmV1Junction.Parachain(one)
```

## Guards

Every union variant has an accompanying type guard. This helps us check for
specific variants, all the while narrowing the value for safer handling.

```ts
import { RuntimeEvent } from "@capi/ink-chain"

event // `RuntimeEvent`
if (RuntimeEvent.isContracts(event)) {
  event // `RuntimeEvent.Contracts`
}
```

## Codecs

The `$`-prefixed, camel-cased type name is actually a `scale-ts` codec. This
codec can be used for many use cases.

For instance, we may want to perform runtime validation of some untrusted data.

```ts
import { $accountInfo } from "@capi/polkadot"
import { $ } from "capi"

try {
  $.assert($accountInfo, untrustedData)
  untrustedData // `AccountInfo`
  console.log("We know that `untrustedData` is of type `AccountInfo`")
} catch (e) {
  console.log("`untrustedData` is not of type `AccountInfo`")
}
```

Or, we may want to compose a new codec for our own use case, such as a tRPC
resolver.

```ts
import { $ } from "capi"

const $accountInfos = $.array($accountInfo)

const appRouter = t.router({
  getAccountData: t.procedure
    .input($accountInfos) // <--
    .query((accountInfos) => {
      // ...
    }),
})
```

> Note: scale-ts codecs are supported natively by tRPC for typing and
> validation.
