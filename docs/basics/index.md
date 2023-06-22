# Basics

Let's say we want to work with the chain corresponding to the following net
spec.

```ts title="nets.ts"
export const myChain = net.ws({ url: "..." })
```

After syncing, you would import the generated API via its `@capi/`-prefixed
kebab-cased name. For this particular example (`myChain`), you would import like
so.

```ts
import { myChain } from "@capi/my-chain"
```

Every Capi-generated module exposes a fluent API root or `ChainRune` subclass.
In the case of the example above, the chain rune is instantiated with the name
`myChain`. These fluent API roots contains a wide range of members, with which
one can access other important APIs, such as that of storage, extrinsic
building, block and event retrieval and more.

```ts
const block = await myChain.block().run()
```

The generated chain rune also exposes pallet-specific containers of
functionality.

```ts
myChain.Balances // `MyChainBalancesRune`
```

It is common for the chain rune to be an argument for pattern libraries, such as
the v1 multisig pattern.

```ts
const multisig = MultisigRune.from(
  myChain, // <--
  {
    signatories: [alexa, billy, carol],
    threshold: 2,
  },
)
```

In the case that the given chain rune lacks pattern-expected functionality (such
as no multisig pallet), we get an immediate type error. We'll dig deeper into
patterns in a future chapter.
