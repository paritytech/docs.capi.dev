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
      type: "doc",
      id: "examples/dev/dev_users",
      label: "Dev Users",
    },
    {
      type: "category",
      label: "Read",
      items: [
        {
          type: "doc",
          id: "examples/read/account_info",
          label: "Basic Read",
        },
        {
          type: "doc",
          id: "examples/read/era_reward_points",
          label: "Derived Retrieval",
        },
        {
          type: "doc",
          id: "examples/blocks",
          label: "Blocks",
        },
        {
          type: "doc",
          id: "examples/paginate",
          label: "Pagination",
        },
      ],
    },
    {
      type: "category",
      label: "Transact",
      items: [
        {
          type: "doc",
          id: "examples/tx/balances_transfer",
          label: "Balance Transfer",
        },
        {
          type: "doc",
          id: "examples/tx/handle_errors",
          label: "Error Handling",
        },
        {
          type: "doc",
          id: "examples/tx/utility_batch",
          label: "Batching",
        },
      ],
    },
    {
      type: "category",
      label: "Sign",
      items: [
        {
          type: "doc",
          id: "examples/sign/offline",
          label: "Offline",
        },
        {
          type: "doc",
          id: "examples/sign/pjs",
          label: "Polkadot-JS Signers",
        },
        {
          type: "doc",
          id: "examples/sign/ed25519",
          label: "Ed25519",
        },
      ],
    },
    {
      type: "category",
      label: "Rune",
      items: [
        {
          type: "doc",
          id: "examples/rune/intro",
          label: "Introduction",
        },
        {
          type: "doc",
          id: "examples/rune/u_track",
          label: "U Track",
        },
        {
          type: "doc",
          id: "examples/rune/collections",
          label: "Collections",
        },
        {
          type: "doc",
          id: "examples/rune/subclassing",
          label: "Subclassing",
        },
      ],
    },
    {
      type: "doc",
      id: "examples/dynamic",
      label: "Dynamic DX",
    },
    {
      type: "category",
      label: "Multisig Patterns",
      items: [
        {
          type: "doc",
          id: "examples/multisig/basic",
          label: "Basic",
        },
        {
          type: "doc",
          id: "examples/multisig/basic",
          label: "Stash",
        },
        {
          type: "doc",
          id: "examples/multisig/virtual",
          label: "Virtual",
        },
      ],
    },
    {
      type: "doc",
      id: "examples/nfts",
      label: "Nfts",
    },
    {
      type: "category",
      label: "XCM",
      items: [
        {
          type: "doc",
          id: "examples/xcm/asset_teleportation",
          label: "Asset Teleportation",
        },
        {
          type: "doc",
          id: "examples/xcm/reserve_transfer",
          label: "Reserve Transfer",
        },
      ],
    },
    {
      type: "category",
      label: "Ink Patterns",
      items: [
        {
          type: "doc",
          id: "examples/ink/deploy",
          label: "Deploy",
        },
        {
          type: "doc",
          id: "examples/ink/interact",
          label: "Interact",
        },
      ],
    },
    {
      type: "category",
      label: "Raw RPC",
      items: [
        {
          type: "doc",
          id: "examples/raw_rpc/call",
          label: "Call",
        },
        {
          type: "doc",
          id: "examples/raw_rpc/subscription",
          label: "Subscription",
        },
      ],
    },
  ],
}

module.exports = sidebars
