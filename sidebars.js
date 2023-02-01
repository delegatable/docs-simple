/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation.
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

module.exports = {
  docs: [
    {
      type: 'category',
      label: '📖 Introduction',
      items: [
        'why',
        'features',
        'getting-started',
        'security-and-audits',
        'counterfactual-delegation',
        'eip712-signed-typed-data',
      ],
    },
    {
      type: 'category',
      label: '🧱 How It Works',
      items: [
        'how-it-works/delegations',
        'how-it-works/on-chain-execution',
        'how-it-works/off-chain-signatures',
        'how-it-works/multi-party-delegations',
      ],
    },
    {
      type: 'category',
      label: '🔐 Caveat Enforcers',
      items: [
        'enforcers/overview',
        'enforcers/allowed-methods-enforcer',
        'enforcers/block-number-before-enforcer',
        'enforcers/block-number-after-enforcer',
        'enforcers/timestamp-before-enforcer',
        'enforcers/timestamp-after-enforcer',
        'enforcers/limited-calls-enforcer',
        'enforcers/erc20-allowance-enforcer',
        'enforcers/revocation-enforcer',
      ],
    },
    {
      type: 'category',
      label: '🚀 Advanced Concepts',
      items: ['advanced/eip1271'],
    },
    {
      type: 'category',
      label: '💻 Examples',
      items: ['frontend/quickstart'],
    },
    {
      type: 'doc',
      label: '📚 Changelog',
      id: 'changelog',
    },
  ],
};
