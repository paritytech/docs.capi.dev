/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    "introduction",
    {
      type: "category",
      label: "Setup",
      link: {
        type: "doc",
        id: "setup/index",
      },
      items: [
        "setup/net_specs",
        "setup/development_nets",
        "setup/build_tool_integration",
      ],
    },
    {
      type: "category",
      label: "Basics",
      link: { type: "doc", id: "basics/index" },
      items: [
        "basics/rune_primer",
        "basics/blocks",
        "basics/storage",
        "basics/extrinsics",
      ],
    },
    "types",
    {
      type: "category",
      label: "Rune",
      link: { type: "doc", id: "rune/index" },
      items: [
        "rune/subclasses",
        "rune/interop",
        {
          type: "category",
          label: "Advanced",
          link: { type: "doc", id: "rune/advanced/index" },
          items: [
            "rune/advanced/timing",
            "rune/advanced/custom-runes",
            "rune/advanced/runes-vs-observables",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "FAQ",
      link: { type: "doc", id: "faq/index" },
      items: [
        "faq/why-capi-dev",
        "faq/why-deno",
      ],
    },
  ],
}

module.exports = sidebars
