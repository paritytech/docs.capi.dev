# Server

## `sync`ing

Once you've configured your net specs (see
[instructions in previous section](/docs/setup.md#netsts)), use the Capi CLI's
sync command to prepare the code generation.

```sh
capi sync node # or `capi sync deno`
```

In the case of Node.js projects, syncing will update your `package.json` with
new dependencies for each net spec (each net spec's export name will be
kebab-cased and prefixed with `@capi/`).

Let's say you exported the following net specs.

```ts
export const polkadotDev = net.dev({
  bin: "polkadot",
  chain: "polkadot-dev",
})

export const polkadot = net.ws({
  url: "wss://rpc.polkadot.io/",
  version: "v0.9.40",
  targets: { dev: polkadotDev },
})
```

The resulting package additions would be as follows:

```diff
{
  // ...
  "dependencies": {
    // ...
+   "@capi/polkadot-dev": "...",
+   "@capi/polkadot": "..."
  }
}
```

> When targeting Deno, sync is used similarly:
>
> ```diff
> - capi sync node
> + capi sync deno
> ```
>
> This however results in additions to the `imports` of an `import_map.json`
> (not `package.json`). One can customize the selected import map by specifying
> the `--import-map` flag.

## Development vs. Production

During development, you'll likely want to run the Capi server as to make use of
its ephemeral development network orchestration.

To start the Capi server, use the CLI's `serve` command.

```sh
capi serve
```

This will start the Capi server on port 4646. You can override the port with
`--port`.

### Bind To Your Process

`serve` conveniently supports specificity of an adjacent process to be run; this
ensures that the Capi server is alive for the duration of your process (and then
closed gracefully).

```sh
capi serve -- <your-command-here>
```

This is useful for executing development scripts. For example:

```sh
capi serve -- node main.js
```

Let's say we've defined our `main.js` as follows.

```js
import { polkadotDev } from "@capi/polkadot-dev"
import { Scope } from "capi"

const accountKeys = await polkadotDev.System.Account
  .keys({ limit: 10 })
  .run(new Scope())
```

Running `capi serve -- node main.js` will first start the Capi server and then
run the node script, which will in turn spawn a Polkadot development network
(based on the net spec).

### Targets

To avoid needing to replace import statements between development and
production, we can supply the `--target` to the `serve` command.

```diff
- capi serve -- node main.js
+ capi serve --target dev -- node main.js
```

Now we can import from `@capi/polkadot`, both during development and production.

```diff
- import { polkadotDev } from "@capi/polkadot-dev"
+ import { polkadot } from "@capi/polkadot"
  import { Scope } from "capi"

- const accountKeys = await polkadotDev.System.Account
+ const accountKeys = await polkadot.System.Account
    .keys({ limit: 10 })
    .run(new Scope())
```

### Development Users

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
> instance). The following alexas and billys are different development users.
>
> ```ts
> const [
>   { alexa: alexaA, billy: billyA },
>   { alexa: alexaB, billy: billyB },
> ] = await Promise.all([createDevUsers(), createDevUsers()])
> ```
