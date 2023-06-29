# Why `capi.dev`?

`capi.dev` is to designed to facilitate developing with Capi, while only being a
dev-time dependency. `capi.dev` is the recommended and ergonomic approach, but
an entirely local setup is supported.

`capi.dev` is a public instance of Capi's codegen server. For Node, the codegen
server serves package tarballs (like `npmjs.org`), and for Deno, it serves `.js`
and `.d.ts` files (like `deno.land`). In both cases, it is a development-only
dependency – once your app is deployed, it does not use `capi.dev`, and thus it
will continue to work even in the unlikely event that `capi.dev` goes down.

## How do I use an entirely local setup?

You do not have to use `capi.dev` for codegen. To run the codegen server
locally, simply run `capi serve`, and it will be available at
http://localhost:4646/. Then, pass the `--server http://localhost:4646/` option
to `capi sync`.

## Can I host an internal instance of `capi.dev`?

Yes, you can host your own instance of the codegen server, as all of the code is
open-source. We use Deno Deploy to host `capi.dev` (with
[this entrypoint](https://github.com/paritytech/capi/blob/main/server/capi.dev/delegatee.ts)),
which uses S3 buckets for storage & caching.

## Why a codegen server?

The advantage of using a codegen server instead of a traditional codegen
approach is that it allows the codegen to be treated like any other dependency.
In a traditional codegen approach, the codegen is run as a separate
build/install step and imported like project code, not library code. This
creates friction, and – importantly – means that the codegen output is baked
separately into each library, so if multiple libraries are using the same chain,
the codegen output will not be deduplicated, bloating bundle sizes.
