# Nets

Create a `nets.ts` file. This file will describe all the networks with which you
wish to interact.

Import `net`.

```ts
import { net } from "capi/nets"
```

> Deno users can import via the `deno.land/x` distribution URL.
>
> ```ts
> import { net } from "https://deno.land/x/capi/nets/mod.ts"
> ```

Whether your program is one of Node.JS or Deno, your first step to integrating
Capi is to define your net specs. **These will be the sources of truth from
which Capi generates chain-specific APIs and spawns development networks**.

## Basic Net Specs

The following net spec describes the Polkadot relay chain, accessed through a
proxy WebSocket URL.

```ts
export const polkadot = net.ws({ url: "wss://rpc.polkadot.io" })
```

## Parachain Net Specs

The same approach applies to parachains.

```ts
export const polkadot = net.ws({ url: "wss://statemint-rpc.polkadot.io" })
```

> Note: unlike production parachain net specs, development parachain net specs
> need to be associated with a development relay chain net spec. More on this
> below.

## Development Net Specs

During development, it is likely that you'll want to develop against an
ephemeral local network. Capi makes this incredibly simple. Use the `net.dev`
function to create a development relay chain net spec. Specify the relay chain's
binary and the `chain` argument to be passed to that binary.

```ts
export const polkadotDev = net.dev({
  bin: "polkadot",
  chain: "polkadot-dev",
})
```

## Convenience Binary Builds

The previous example was written with the assumption that we're using the
polkadot CLI and that it is installed and in the current user's path as
`"polkadot"`. Installing binaries such as Polkadot and Cumulus can be arduous.
Instead, let's use `bins`, a utility which tells Capi to download and utilize
precompiled builds.

First, update your import.

```diff
- import { net } from "capi"
+ import { bins, net } from "capi"
```

Next, use `bins` like so, specifying the binary name and desired version.

```ts
const bin = bins({
  polkadot: ["polkadot", "v0.9.38"],
})
```

Finally, use the given helper instance's net-specific prop (in this case aliased
`bin.polkadot`) in the dev net spec factory's `bin`.

```ts
export const polkadotDev = net.dev({
  bin: bin.polkadot,
  chain: "polkadot-dev",
})
```

Altogether now:

```ts
import { bins, net } from "capi"

const bin = bins({ polkadot: ["polkadot", "v0.9.38"] })

export const polkadotDev = net.dev({
  bin: bin.polkadot,
  chain: "polkadot-dev",
})
```

Here is a more complex example of props for `bins`.

```ts
bins({
  polkadot: ["polkadot-fast", "v0.9.38"],
  polkadotParachain: ["polkadot-parachain-fast", "v0.9.380"],
  substrateContractsNode: ["substrate-contracts-node", "v0.24.0"],
  trappistPolkadot: ["polkadot", "v0.9.37"],
  trappistPolkadotParachain: ["polkadot-parachain", "v0.9.370"],
  trappist: ["trappist-collator", "79bba6e"],
})
```

## Development Parachain Net Specs

To configure a development parachain, utilize the corresponding relaychain
spec's `parachain` method.

```ts
const bin = bins({
  polkadot: ["polkadot-fast", "v0.9.38"],
  polkadotParachain: ["polkadot-parachain-fast", "v0.9.380"],
})

export const polkadotDev = net.dev({
  bin: bin.polkadot,
  chain: "polkadot-dev",
})

export const statemintDev = polkadotDev.parachain({
  bin: bin.polkadotParachain,
  chain: "statemine-local",
  id: 1000,
})
```

## Targets

Targets allow us to easily swap the underlying connection during different
stages of development.

```ts
const bin = bins({ polkadot: ["polkadot", "v0.9.38"] })

export const polkadotDev = net.dev({
  bin: bin.polkadot,
  chain: "polkadot-dev",
})

export const polkadot = net.ws({
  url: "wss://rpc.polkadot.io/",
  targets: { dev: polkadotDev },
})
```

We'll dig into this in [the next section](/docs/server.md), where we'll cover
making use of the Capi development server.
