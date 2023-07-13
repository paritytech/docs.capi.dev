"use strict";(self.webpackChunkdocs_capi_dev_2=self.webpackChunkdocs_capi_dev_2||[]).push([[735],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={},o="Basics",s={unversionedId:"basics/index",id:"basics/index",title:"Basics",description:"Let's say we want to work with the chain corresponding to the following net",source:"@site/docs/basics/index.md",sourceDirName:"basics",slug:"/basics/",permalink:"/basics/",draft:!1,editUrl:"https://github.com/paritytech/docs.capi.dev/tree/main/docs/basics/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Build Tool Integration",permalink:"/setup/build_tool_integration"},next:{title:"Rune Primer",permalink:"/basics/rune_primer"}},c={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basics"},"Basics"),(0,a.kt)("p",null,"Let's say we want to work with the chain corresponding to the following net\nspec."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="nets.ts"',title:'"nets.ts"'},'export const myChain = net.ws({ url: "..." })\n')),(0,a.kt)("p",null,"After syncing, you would import the generated API via its ",(0,a.kt)("inlineCode",{parentName:"p"},"@capi/"),"-prefixed\nkebab-cased name. For this particular example (",(0,a.kt)("inlineCode",{parentName:"p"},"myChain"),"), you would import like\nso."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { myChain } from "@capi/my-chain"\n')),(0,a.kt)("p",null,"Every Capi-generated module exposes a fluent API root or ",(0,a.kt)("inlineCode",{parentName:"p"},"ChainRune")," subclass.\nIn the case of the example above, the chain rune is instantiated with the name\n",(0,a.kt)("inlineCode",{parentName:"p"},"myChain"),". These fluent API roots contains a wide range of members, with which\none can access other important APIs, such as that of storage, extrinsic\nbuilding, block and event retrieval and more."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const block = await myChain.block().run()\n")),(0,a.kt)("p",null,"The generated chain rune also exposes pallet-specific containers of\nfunctionality."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"myChain.Balances // `MyChainBalancesRune`\n")),(0,a.kt)("p",null,"It is common for the chain rune to be an argument for pattern libraries, such as\nthe v1 multisig pattern."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const multisig = MultisigRune.from(\n  myChain, // <--\n  {\n    signatories: [alexa, billy, carol],\n    threshold: 2,\n  },\n)\n")),(0,a.kt)("p",null,"In the case that the given chain rune lacks pattern-expected functionality (such\nas no multisig pallet), we get an immediate type error. We'll dig deeper into\npatterns in a future chapter."))}m.isMDXComponent=!0}}]);