// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight")
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
          sidebarCollapsible: false,
          breadcrumbs: false,
          editUrl: "https://github.com/paritytech/docs.capi.dev/tree/main/docs/",
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
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
        items: [
          {
            href: "https://github.com/paritytech/capi/tree/main/examples",
            label: "Examples",
            position: "left",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
          {
            href: 'https://github.com/paritytech/capi',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["bash", "rust"],
      },
    },
}

module.exports = config
