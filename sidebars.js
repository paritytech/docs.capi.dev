/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "introduction",
    },
    {
      type: "category",
      label: "Getting Started",
      items: [
        "getting_started/overview",
        "getting_started/setup",
        "getting_started/server",
        "getting_started/first_steps",
        "getting_started/import_mapping",
      ],
    },
    {
      type: "category",
      label: "Rune",
      items: [
        "rune/introduction",
      ],
    },
  ],
}

module.exports = sidebars
