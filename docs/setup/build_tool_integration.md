# Build Tool Integration

If you wish to use Capi's development network orchestrator, it's important that
your build tool pipe the necessary environment variables from Capi's server
process into your application.

Consider the following Capi server instantiation.

```sh
capi serve -- <your-cmd-here>
```

In this example, we start the Capi server, which runs everything after the `--`,
passing in `CAPI_SERVER` as an environment variable. In the case that you
specify a target for devnet-swapping, it will also pass `CAPI_TARGET`.

```sh
capi serve --target dev -- your-cmd-here
```

To recap:

- `CAPI_SERVER`: the URL of the running Capi server
- `CAPI_TARGET`: the `--target` with which the Capi server was instantiated

## Vite

Configure your development task such that it instantiates the Capi server and
passes in your Vite development command.

```sh
capi serve --target dev -- vite
```

The resulting `vite` process will have the environment variables. However, the
`vite.config.ts` needs to specify that those variables are to be used by the
Vite development server.

```ts
import { defineConfig } from "vite"

export default defineConfig({
  define: {
    "process.env.CAPI_SERVER": process.env.CAPI_SERVER,
    "process.env.CAPI_TARGET": process.env.CAPI_TARGET,
  },
})
```

## Webpack

Configure your development task such that it instantiates the Capi server and
passes in your webpack development command.

```sh
capi serve --target dev -- webpack serve
```

The shape of Webpack configurations varies greatly. If the following approach
doesn't work for you, please
[submit an issue](https://github.com/paritytech/capi/issues/new) for guidance
(preferably with a simple reproduction). Such issues will help us improve this
doc for future users.

```ts
import webpack from "webpack"

export default {
  externals: {
    'node:fs': {},
  },
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          CAPI_SERVER: JSON.stringify(process.env.CAPI_SERVER),
          CAPI_TARGET: JSON.stringify(process.env.CAPI_TARGET),
        },
      },
    }),
  ],
}
```
