# Setup

## Installation

NPM-install `capi` (not applicable for Deno users).

```sh
npm i capi
```

## CLI

You may also want to add Capi to your scripts/tasks for convenience.

`package.json`

```diff
{
  // ...
  "scripts": {
    // ...
+   "capi": "capi"
  }
}
```

> Deno users can reference the CLI via the `deno.land/x` distribution URL.
>
> `deno.jsonc`
>
> ```diff
> {
>   // ...
>   "tasks": {
>     // ...
> +   "capi": "deno run -r -A https://deno.land/x/capi/main.ts"
>   }
> }
> ```

## `nets.ts`

Create a `nets.ts` file; for example:

```ts
import { net } from "capi/nets"

export const polkadot = net.ws({ url: "wss://rpc.polkadot.io" })
```

This file is covered more in depth in [the `nets.ts` section](./nets).

> Note: you can forgo this setup if your app determines target chain at runtime.
> For an example of such usage, see
> [the dynamic example](https/examples/dynamic.eg.ts).

## `sync`ing

Once you've configured your net specs, use the Capi CLI's `sync` command to
prepare the code generation.

```sh
capi sync node # or `capi sync deno`
```

In the case of Node.js projects, syncing will update your `package.json` with
new dependencies for each net spec (each net spec's export name will be
kebab-cased and prefixed with `@capi/`).

For example, for the `nets.ts` file in the previous section, the resulting
package additions would be as follows:

```diff
 {
   // ...
   "dependencies": {
     // ...
+    "@capi/polkadot": "..."
  }
 }
```

> In the case of Deno projects, syncing will update the `import_map.json`.
