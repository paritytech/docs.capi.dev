# Development

During development, you'll likely want to run the Capi server as to make use of
ephemeral development networks.

To start the Capi server, use the CLI's `serve` command.

```sh
capi serve
```

This will start the Capi server on port 4646. You can override the port with
`--port`.

## Bind To Your Process

`serve` conveniently supports specificity of an adjacent process to be run; this
ensures that the Capi server is alive for the duration of your process (and then
closed gracefully).

```sh
capi serve -- <your-command-here>
```

This is useful for executing development scripts. For example:

```ts title="nets.ts"
import { bins, nets } from "capi/nets"

const bin = bins({ polkadot: ["polkadot", "v0.9.38"] })

export const polkadotDev = net.dev({
  bin: bin.polkadot,
  chain: "polkadot-dev",
})

export const polkadot = net.ws({
  url: "wss://rpc.polkadot.io/",
})
```

```js title="main.js"
import { polkadotDev } from "@capi/polkadot-dev"

const accountKeys = await polkadotDev.System.Account.keys({ limit: 10 }).run()
```

Running `capi serve -- node main.js` will first start the Capi server and then
run the node script, spawning an ephemeral Polkadot development network (based
on the net spec).

## Targets

To avoid needing to replace import statements between development and
production, we can specify `targets` in the `nets.ts` file.

```ts title="nets.ts"
import { bins, nets } from "capi/nets"

const bin = bins({ polkadot: ["polkadot", "v0.9.38"] })

export const polkadotDev = net.dev({
  bin: bin.polkadot,
  chain: "polkadot-dev",
})

export const polkadot = net.ws({
  url: "wss://rpc.polkadot.io/",
  // highlight-next-line
  targets: { dev: polkadotDev },
})
```

Now we can import from `@capi/polkadot`, both during development and production.

```ts title="main.js"
// highlight-next-line
import { polkadot } from "@capi/polkadot"

const accountKeys = await polkadot.System.Account.keys({ limit: 10 }).run()
```

When run normally, this will query the main polkadot network, but if you run the
capi server with a different target:

```sh
capi serve --target dev -- node main.js
```

This will instead spawn and query an ephemeral Polkadot development network.

## Development Users

When developing against a dev chain, the `createDevUsers` utility provides
`Sr25519` instances, which correspond to dev users who are pre-seeded with
funds. This simplifies signing extrinsics for submission to the given dev chain.

The following creates two dev users.

```ts
import { createDevUsers } from "capi"

const [userA, userB] = await createDevUsers(2)
```

The `createDevUsers` util is overloaded for the sake of consistent naming. You
can omit a number and destructure the named users.

```ts
const { alexa, billy } = await createDevUsers()
```

> Note: `createDevUsers` always returns fresh users (up to 10K per server
> instance).
>
> ```ts
> const { alexa: alexaA } = await createDevUsers()
> const { alexa: alexaB } = await createDevUsers()
>
> assert(alexaA !== alexaB)
> ```
