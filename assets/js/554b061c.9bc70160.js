"use strict";(self.webpackChunkdocs_capi_dev_2=self.webpackChunkdocs_capi_dev_2||[]).push([[193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={title:"Capi v0.1.0-gamma.0",authors:["harry","t6"]},i=void 0,s={permalink:"/blog/2023/06/29/v0.1.0-gamma.0",source:"@site/blog/2023-06-29-v0.1.0-gamma.0.md",title:"Capi v0.1.0-gamma.0",description:"Today marks",date:"2023-06-29T00:00:00.000Z",formattedDate:"June 29, 2023",tags:[],readingTime:5.405,hasTruncateMarker:!1,authors:[{name:"Harry Solovay",url:"https://twitter.com/harrysolovay",imageURL:"https://avatars.githubusercontent.com/u/4893548",key:"harry"},{name:"Thomas J. J. Ferguson, VI",url:"https://github.com/tjjfvi",imageURL:"https://avatars.githubusercontent.com/u/44031566",key:"t6"}],frontMatter:{title:"Capi v0.1.0-gamma.0",authors:["harry","t6"]}},l={authorsImageUrls:[void 0,void 0]},p=[{value:"Release Highlights",id:"release-highlights",level:2},{value:"Fully-Typed APIs For Every Chain",id:"fully-typed-apis-for-every-chain",level:3},{value:"<code>capi.dev</code>",id:"capidev",level:3},{value:"Ephemeral Development Networks",id:"ephemeral-development-networks",level:3},{value:"Automatic Binary Installation",id:"automatic-binary-installation",level:3},{value:"Pre-Funded Development Users",id:"pre-funded-development-users",level:3},{value:"Rune",id:"rune",level:3},{value:"Cross-Engine Support",id:"cross-engine-support",level:3},{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2}],c={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Today marks\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/capi/releases/tag/v0.1.0-gamma.0"},"the first 'gamma' release"),"\nof ",(0,o.kt)("a",{parentName:"p",href:"https://docs.capi.dev"},"Capi"),", a TypeScript framework for crafting\ninteractions with Substrate chains. For over a year, we've been developing in\nthe open, experimenting with different designs and tirelessly iterating. After\n49 beta releases, we're now confident that Capi's architecture, and developer\nexperience can support and grow with the Polkadot ecosystem. ",(0,o.kt)("strong",{parentName:"p"},"We're holding off\non a formal v0.1.0 release until stabilization of the new JSON RPC API spec and\nrelated Smoldot integration.")," That being said, we would be grateful for your\nfeedback. Please visit ",(0,o.kt)("a",{parentName:"p",href:"https://docs.capi.dev/setup"},"the setup guide")," to get\nstarted with Capi and don't hesitate to engage us about anything Capi-related in\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/capi/issues"},"the GitHub issues"),"."),(0,o.kt)("h2",{id:"release-highlights"},"Release Highlights"),(0,o.kt)("p",null,"Let's touch on a few parts of the experience that we believe will bring joy to\nour community (especially you beautiful TypeScript developers)."),(0,o.kt)("h3",{id:"fully-typed-apis-for-every-chain"},"Fully-Typed APIs For Every Chain"),(0,o.kt)("p",null,"One of the qualities we love most about the Polkadot ecosystem is its focus on\ninteroperability. Everything from XCM integration, to Polkadot's core\narchitecture, to the very name itself is geared towards a future in which\npurpose-built chains can talk to one another. It would stand to reason that an\napp developer may want to integrate with many chains \u2014 potentially within the\nsame program. Capi makes this easy. Simply declare the nets with which you wish\nto interact."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="nets.ts"',title:'"nets.ts"'},'import { net } from "capi/nets"\n\nexport const polkadot = net.ws({ url: "wss://rpc.polkadot.io/" })\nexport const statemint = net.ws({ url: "wss://statemint-rpc.polkadot.io/" })\nexport const collectives = net.ws({ url: "wss://collectives.api.onfinality.io/public-ws" })\n// ...\n')),(0,o.kt)("p",null,"Then, ",(0,o.kt)("a",{parentName:"p",href:"/setup#syncing"},(0,o.kt)("inlineCode",{parentName:"a"},"sync"))," and import corresponding, chain-specific APIs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="main.ts"',title:'"main.ts"'},'import {\n  polkadot, // the root of the chain\'s API, from which one can access pallets, storage, etc.\n  AccountInfo, // a TypeScript type based on a type from the Rust source\n  // ...\n} from "@capi/polkadot"\n')),(0,o.kt)("p",null,"These APIs are typed according to the unique properties of each chain. You can\ncompose interactions across chains with confidence. Follow any red lines to\nvictory."),(0,o.kt)("p",null,"To learn more, see our ",(0,o.kt)("a",{parentName:"p",href:"/types"},"type conversion guide"),"."),(0,o.kt)("h3",{id:"capidev"},(0,o.kt)("inlineCode",{parentName:"h3"},"capi.dev")),(0,o.kt)("p",null,"We host a public instance of our codegen server on ",(0,o.kt)("inlineCode",{parentName:"p"},"capi.dev"),", for ease of use\n(but local codegen is also supported). This allows developers to treat the\ncodegen like any other library, in both Node and Deno. It also allows the\ncodegen to be deduplicated between libraries, reducing bundle sizes."),(0,o.kt)("p",null,"For more information on our reasoning behind ",(0,o.kt)("inlineCode",{parentName:"p"},"capi.dev"),", and the alternatives,\nsee ",(0,o.kt)("a",{parentName:"p",href:"/faq/why-capi-dev"},'"Why capi.dev?"'),"."),(0,o.kt)("h3",{id:"ephemeral-development-networks"},"Ephemeral Development Networks"),(0,o.kt)("p",null,"Capi makes it easy for developers to configure and test against ephemeral\nnetworks based on any runtime."),(0,o.kt)("p",null,"For example, a simple XCM-compatible relay chain and parachain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="nets.ts"',title:'"nets.ts"'},'import { net } from "capi/nets"\n\nexport const rococo = net.dev({\n  bin: "polkadot",\n  chain: "rococo-local",\n})\n\nexport const rococoContracts = rococo.parachain({\n  bin: "polkadot-parachain",\n  chain: "contracts-rococo-local",\n  id: 1000,\n})\n')),(0,o.kt)("p",null,"You can then import from ",(0,o.kt)("inlineCode",{parentName:"p"},"@capi/rococo")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@capi/rococo-contracts"),", which will\nautomatically spawn the network."),(0,o.kt)("p",null,"For more information, refer to our guide on\n",(0,o.kt)("a",{parentName:"p",href:"/setup/development_nets"},"development setup"),"."),(0,o.kt)("h3",{id:"automatic-binary-installation"},"Automatic Binary Installation"),(0,o.kt)("p",null,"In the previous example, you (and anyone else trying your project) would've\nneeded to manually compile and install the ",(0,o.kt)("inlineCode",{parentName:"p"},"polkadot")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"polkadot-parachain"),"\nbinaries, which can take several hours. Instead, you can configure Capi to\nautomatically install pre-built binaries (which we automatically build across a\nmatrix of versions and architectures)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="nets.ts"',title:'"nets.ts"'},'import { net, bins } from "capi/nets"\n\n// highlight-start\nconst bin = bins({\n  polkadot: ["polkadot", "v0.9.38"],\n  polkadotParachain: ["polkadot-parachain", "v0.9.380"],\n})\n// highlight-end\n\nexport const rococo = net.dev({\n  // highlight-next-line\n  bin: bin.polkadot,\n  chain: "rococo-local",\n})\n\nexport const rococoContracts = rococoDev.parachain({\n  // highlight-next-line\n  bin: bin.polkadotParachain,\n  chain: "contracts-rococo-local",\n  id: 1000,\n})\n')),(0,o.kt)("p",null,"For certain chains, we also maintain patched builds with faster block times.\nSimply add ",(0,o.kt)("inlineCode",{parentName:"p"},"-fast")," to the binary name and watch your test time drop."),(0,o.kt)("p",null,"The infrastructure for these builds is located in the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/capi-binary-builds"},(0,o.kt)("inlineCode",{parentName:"a"},"capi-binary-builds")," repo"),"."),(0,o.kt)("h3",{id:"pre-funded-development-users"},"Pre-Funded Development Users"),(0,o.kt)("p",null,"Every Capi development server can vend pre-funded development users. Calling\n",(0,o.kt)("inlineCode",{parentName:"p"},"createDevUsers")," in your tests produces distinct users in each of your tests,\nmeaning that they can be safely run in parallel without interfering with each\nother."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { westendDev } from "@capi/westend-dev"\nimport { createDevUsers } from "capi"\nimport { signature } from "capi/patterns/signature/polkadot"\n\n// highlight-next-line\nconst { alexa, billy } = await createDevUsers()\n\nawait westendDev.Balances\n  .transfer({\n    value: 12345n,\n    dest: billy.address,\n  })\n  // highlight-next-line\n  .signed(signature({ sender: alexa }))\n  .sent()\n  .dbgStatus("Transfer:")\n  .finalized()\n  .run()\n')),(0,o.kt)("p",null,"You could safely run hundreds of instances of this test in parallel without\nworrying about conflicting nonces or running out of funds. Although we love\nAlice, Bob, Charlie, and the others... Capi's got more (up to 10,000 to be\nexact)."),(0,o.kt)("h3",{id:"rune"},"Rune"),(0,o.kt)("p",null,"Capi's API is built on top of Rune, a library we've developed that facilitates\nbuilding fluent APIs supporting derived queries and derived subscriptions. Rune\nensures correct results when working with multiple interrelated subscriptions,\nwhich arise from cross-chain interactions. Other benefits include request\ndeduplication and type-safe error handling."),(0,o.kt)("p",null,"To learn more, see our ",(0,o.kt)("a",{parentName:"p",href:"/rune"},"Rune documentation"),"."),(0,o.kt)("h3",{id:"cross-engine-support"},"Cross-Engine Support"),(0,o.kt)("p",null,"Capi supports Deno, Node, and (modern) browsers. We are developing our codebase\nusing Deno, as we believe it provides the best basis for supporting these three\ntargets. We test every PR on both Deno and Node, and we'll soon expand this to\nautomatically test on browsers as well."),(0,o.kt)("p",null,"We've tested bundling Capi for the browser with Vite and Webpack (see\n",(0,o.kt)("a",{parentName:"p",href:"/setup/build_tool_integration"},"our guide on the necessary configuration"),"), but\nif you're using a different bundler and run into any issues, please\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/capi/issues/new/choose"},"open an issue"),"."),(0,o.kt)("h2",{id:"whats-next"},"What's Next?"),(0,o.kt)("p",null,"Next, we will be moving to a Smoldot-first developer experience."),(0,o.kt)("p",null,"We'll try to keep the API as stable as possible, but changes may need to be\nmade, as the API surface Smoldot exposes is very different from what we've been\nworking with so far."),(0,o.kt)("p",null,"For live information on what we're working on, see our\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/capi/issues/1077"},"v0.1.0 roadmap"),"."),(0,o.kt)("p",null,"If you encounter any bugs, or there's anything you'd like to see us add to Capi,\nplease don't hesitate to\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/capi/issues/new/choose"},"open an issue"),"."),(0,o.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,o.kt)("p",null,"Thank you so much to the incredible folks that made Capi possible. A special\nshout out to our two other Capi team members,\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kratico"},"Matias Volpe")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/ryanleecode"},"Ryan Lee"),"; thank you for joining us in this\nmission. Thank you to Parity leadership, especially\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/statictype"},"Andreea Efteene")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/sopke86"},"Stefan Sopic"),". Thank you to\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vjjft"},"Tom Ferguson")," for his help on fleshing out Rune's\ntiming system. And, thank you to those whose projects and ideas have served as\ninspiration for Capi. Some names for good measure:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sam-goodwin"},"Sam Goodwin"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/emeshbi"},"Elad Ben-Israel"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/schickling"},"Johannes Schickling"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/MichaelArnaldi"},"Michael Arnaldi"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/colelawrence"},"Cole Lawrence")," and friends."),(0,o.kt)("p",null,"Finally, thank you for taking an interest in Capi!"))}h.isMDXComponent=!0}}]);