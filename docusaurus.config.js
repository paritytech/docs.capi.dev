// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/vsDark")
// oceanicNext

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Capi Docs",
  tagline: "A framework for crafting interactions with Substrate chains",
  favicon: "img/favicon.ico",
  url: "https://docs.capi.dev/",
  baseUrl: "/",
  organizationName: "paritytech", // Usually your GitHub org/user name.
  projectName: "capi", // Usually your repo name.
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  noIndex: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  themes: [
    [require.resolve("@easyops-cn/docusaurus-search-local"), { hashed: true }],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/paritytech/docs.capi.dev/tree/main/docs/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/paritytech/docs.capi.dev/tree/main/blog/",
        },
        theme: {
          customCss: require.resolve("./custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      navbar: {
        title: "Capi Docs",
        logo: {
          alt: "Capi Logo",
          src: "img/logo.svg",
        },
        items: [{
          type: "doc",
          docId: "introduction",
          position: "left",
          label: "Docs",
        }, {
          href: "https://github.com/paritytech/capi/tree/main/examples",
          label: "Examples",
          position: "left",
        }, {
          to: "/blog",
          label: "Blog",
          position: "right",
        }, {
          href: "https://github.com/paritytech/capi",
          label: "GitHub",
          position: "right",
        }],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
}

module.exports = config
