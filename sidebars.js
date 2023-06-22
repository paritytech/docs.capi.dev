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
    "setup/development",
    "setup/build_tool_integration",
    "setup/nets",
      ],
    },
    { type: "category",
      label: "Basics",
      link: { type: "doc", id: "basics/index" },
      items: [
        "basics/rune",
        "basics/blocks",
        "basics/storage",
        "basics/extrinsics",
      ]
  },
    "types",
  ],
}

module.exports = sidebars
