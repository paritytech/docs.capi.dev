"use strict";(self.webpackChunkdocs_capi_dev_2=self.webpackChunkdocs_capi_dev_2||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2023/06/29/v0.1.0-gamma.0","metadata":{"permalink":"/blog/2023/06/29/v0.1.0-gamma.0","source":"@site/blog/2023-06-29-v0.1.0-gamma.0.md","title":"Capi v0.1.0-gamma.0","description":"Today marks","date":"2023-06-29T00:00:00.000Z","formattedDate":"June 29, 2023","tags":[],"readingTime":5.405,"hasTruncateMarker":false,"authors":[{"name":"Harry Solovay","url":"https://twitter.com/harrysolovay","imageURL":"https://avatars.githubusercontent.com/u/4893548","key":"harry"},{"name":"Thomas J. J. Ferguson, VI","url":"https://github.com/tjjfvi","imageURL":"https://avatars.githubusercontent.com/u/44031566","key":"t6"}],"frontMatter":{"title":"Capi v0.1.0-gamma.0","authors":["harry","t6"]}},"content":"Today marks\\n[the first \'gamma\' release](https://github.com/paritytech/capi/releases/tag/v0.1.0-gamma.0)\\nof [Capi](https://docs.capi.dev), a TypeScript framework for crafting\\ninteractions with Substrate chains. For over a year, we\'ve been developing in\\nthe open, experimenting with different designs and tirelessly iterating. After\\n49 beta releases, we\'re now confident that Capi\'s architecture, and developer\\nexperience can support and grow with the Polkadot ecosystem. **We\'re holding off\\non a formal v0.1.0 release until stabilization of the new JSON RPC API spec and\\nrelated Smoldot integration.** That being said, we would be grateful for your\\nfeedback. Please visit [the setup guide](https://docs.capi.dev/setup) to get\\nstarted with Capi and don\'t hesitate to engage us about anything Capi-related in\\n[the GitHub issues](https://github.com/paritytech/capi/issues).\\n\\n## Release Highlights\\n\\nLet\'s touch on a few parts of the experience that we believe will bring joy to\\nour community (especially you beautiful TypeScript developers).\\n\\n### Fully-Typed APIs For Every Chain\\n\\nOne of the qualities we love most about the Polkadot ecosystem is its focus on\\ninteroperability. Everything from XCM integration, to Polkadot\'s core\\narchitecture, to the very name itself is geared towards a future in which\\npurpose-built chains can talk to one another. It would stand to reason that an\\napp developer may want to integrate with many chains \u2014 potentially within the\\nsame program. Capi makes this easy. Simply declare the nets with which you wish\\nto interact.\\n\\n```ts title=\\"nets.ts\\"\\nimport { net } from \\"capi/nets\\"\\n\\nexport const polkadot = net.ws({ url: \\"wss://rpc.polkadot.io/\\" })\\nexport const statemint = net.ws({ url: \\"wss://statemint-rpc.polkadot.io/\\" })\\nexport const collectives = net.ws({ url: \\"wss://collectives.api.onfinality.io/public-ws\\" })\\n// ...\\n```\\n\\nThen, [`sync`](/setup#syncing) and import corresponding, chain-specific APIs.\\n\\n```ts title=\\"main.ts\\"\\nimport {\\n  polkadot, // the root of the chain\'s API, from which one can access pallets, storage, etc.\\n  AccountInfo, // a TypeScript type based on a type from the Rust source\\n  // ...\\n} from \\"@capi/polkadot\\"\\n```\\n\\nThese APIs are typed according to the unique properties of each chain. You can\\ncompose interactions across chains with confidence. Follow any red lines to\\nvictory.\\n\\nTo learn more, see our [type conversion guide](/types).\\n\\n### `capi.dev`\\n\\nWe host a public instance of our codegen server on `capi.dev`, for ease of use\\n(but local codegen is also supported). This allows developers to treat the\\ncodegen like any other library, in both Node and Deno. It also allows the\\ncodegen to be deduplicated between libraries, reducing bundle sizes.\\n\\nFor more information on our reasoning behind `capi.dev`, and the alternatives,\\nsee [\\"Why capi.dev?\\"](/faq/why-capi-dev).\\n\\n### Ephemeral Development Networks\\n\\nCapi makes it easy for developers to configure and test against ephemeral\\nnetworks based on any runtime.\\n\\nFor example, a simple XCM-compatible relay chain and parachain:\\n\\n```ts title=\\"nets.ts\\"\\nimport { net } from \\"capi/nets\\"\\n\\nexport const rococo = net.dev({\\n  bin: \\"polkadot\\",\\n  chain: \\"rococo-local\\",\\n})\\n\\nexport const rococoContracts = rococo.parachain({\\n  bin: \\"polkadot-parachain\\",\\n  chain: \\"contracts-rococo-local\\",\\n  id: 1000,\\n})\\n```\\n\\nYou can then import from `@capi/rococo` and `@capi/rococo-contracts`, which will\\nautomatically spawn the network.\\n\\nFor more information, refer to our guide on\\n[development setup](/setup/development_nets).\\n\\n### Automatic Binary Installation\\n\\nIn the previous example, you (and anyone else trying your project) would\'ve\\nneeded to manually compile and install the `polkadot` and `polkadot-parachain`\\nbinaries, which can take several hours. Instead, you can configure Capi to\\nautomatically install pre-built binaries (which we automatically build across a\\nmatrix of versions and architectures).\\n\\n```ts title=\\"nets.ts\\"\\nimport { net, bins } from \\"capi/nets\\"\\n\\n// highlight-start\\nconst bin = bins({\\n  polkadot: [\\"polkadot\\", \\"v0.9.38\\"],\\n  polkadotParachain: [\\"polkadot-parachain\\", \\"v0.9.380\\"],\\n})\\n// highlight-end\\n\\nexport const rococo = net.dev({\\n  // highlight-next-line\\n  bin: bin.polkadot,\\n  chain: \\"rococo-local\\",\\n})\\n\\nexport const rococoContracts = rococoDev.parachain({\\n  // highlight-next-line\\n  bin: bin.polkadotParachain,\\n  chain: \\"contracts-rococo-local\\",\\n  id: 1000,\\n})\\n```\\n\\nFor certain chains, we also maintain patched builds with faster block times.\\nSimply add `-fast` to the binary name and watch your test time drop.\\n\\nThe infrastructure for these builds is located in the\\n[`capi-binary-builds` repo](https://github.com/paritytech/capi-binary-builds).\\n\\n### Pre-Funded Development Users\\n\\nEvery Capi development server can vend pre-funded development users. Calling\\n`createDevUsers` in your tests produces distinct users in each of your tests,\\nmeaning that they can be safely run in parallel without interfering with each\\nother.\\n\\n```ts\\nimport { westendDev } from \\"@capi/westend-dev\\"\\nimport { createDevUsers } from \\"capi\\"\\nimport { signature } from \\"capi/patterns/signature/polkadot\\"\\n\\n// highlight-next-line\\nconst { alexa, billy } = await createDevUsers()\\n\\nawait westendDev.Balances\\n  .transfer({\\n    value: 12345n,\\n    dest: billy.address,\\n  })\\n  // highlight-next-line\\n  .signed(signature({ sender: alexa }))\\n  .sent()\\n  .dbgStatus(\\"Transfer:\\")\\n  .finalized()\\n  .run()\\n```\\n\\nYou could safely run hundreds of instances of this test in parallel without\\nworrying about conflicting nonces or running out of funds. Although we love\\nAlice, Bob, Charlie, and the others... Capi\'s got more (up to 10,000 to be\\nexact).\\n\\n### Rune\\n\\nCapi\'s API is built on top of Rune, a library we\'ve developed that facilitates\\nbuilding fluent APIs supporting derived queries and derived subscriptions. Rune\\nensures correct results when working with multiple interrelated subscriptions,\\nwhich arise from cross-chain interactions. Other benefits include request\\ndeduplication and type-safe error handling.\\n\\nTo learn more, see our [Rune documentation](/rune).\\n\\n### Cross-Engine Support\\n\\nCapi supports Deno, Node, and (modern) browsers. We are developing our codebase\\nusing Deno, as we believe it provides the best basis for supporting these three\\ntargets. We test every PR on both Deno and Node, and we\'ll soon expand this to\\nautomatically test on browsers as well.\\n\\nWe\'ve tested bundling Capi for the browser with Vite and Webpack (see\\n[our guide on the necessary configuration](/setup/build_tool_integration)), but\\nif you\'re using a different bundler and run into any issues, please\\n[open an issue](https://github.com/paritytech/capi/issues/new/choose).\\n\\n## What\'s Next?\\n\\nNext, we will be moving to a Smoldot-first developer experience.\\n\\nWe\'ll try to keep the API as stable as possible, but changes may need to be\\nmade, as the API surface Smoldot exposes is very different from what we\'ve been\\nworking with so far.\\n\\nFor live information on what we\'re working on, see our\\n[v0.1.0 roadmap](https://github.com/paritytech/capi/issues/1077).\\n\\nIf you encounter any bugs, or there\'s anything you\'d like to see us add to Capi,\\nplease don\'t hesitate to\\n[open an issue](https://github.com/paritytech/capi/issues/new/choose).\\n\\n## Acknowledgements\\n\\nThank you so much to the incredible folks that made Capi possible. A special\\nshout out to our two other Capi team members,\\n[Matias Volpe](https://github.com/kratico) and\\n[Ryan Lee](https://twitter.com/ryanleecode); thank you for joining us in this\\nmission. Thank you to Parity leadership, especially\\n[Andreea Efteene](https://github.com/statictype) and\\n[Stefan Sopic](https://twitter.com/sopke86). Thank you to\\n[Tom Ferguson](https://github.com/vjjft) for his help on fleshing out Rune\'s\\ntiming system. And, thank you to those whose projects and ideas have served as\\ninspiration for Capi. Some names for good measure:\\n[Sam Goodwin](https://github.com/sam-goodwin),\\n[Elad Ben-Israel](https://twitter.com/emeshbi),\\n[Johannes Schickling](https://github.com/schickling),\\n[Michael Arnaldi](https://twitter.com/MichaelArnaldi),\\n[Cole Lawrence](https://github.com/colelawrence) and friends.\\n\\nFinally, thank you for taking an interest in Capi!"}]}')}}]);