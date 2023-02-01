/* eslint-disable @typescript-eslint/no-var-requires */
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const lightCodeTheme = require('prism-react-renderer/themes/github');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: 'Delegatable',
    tagline:
      'Solidity framework for extending smart contracts with counterfactual revocable-delegation',
    url: 'https://delegatable.org',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'Delegatable',
    projectName: 'Delegatable',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            path: 'docs',
            sidebarPath: 'sidebars.js',
            editUrl:
              'https://github.com/delegatable/docs/edit/main/packages/website/',
            versions: {
              current: {
                label: 'v1.0.0',
              },
            },
            lastVersion: 'v0.0.0',
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],
    plugins: ['my-loaders', 'tailwind-loader'],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        algolia: {
          appId: 'R2IYF7ETH7',
          apiKey: '599cec31baffa4868cae4e79f180729b',
          indexName: 'docsearch',
          contextualSearch: true,
        },
        navbar: {
          hideOnScroll: true,
          logo: {
            alt: 'Delegatable',
            src: 'img/logo-simple-dark.png',
            srcDark: 'img/logo-simple-light.png',
          },
          items: [
            // left
            {
              label: 'Why',
              to: 'docs/why',
              position: 'left',
            },
            {
              label: 'How',
              to: 'docs/counterfactual-delegation',
              position: 'left',
            },
            {
              label: 'Documentation',
              to: 'docs/getting-started',
              position: 'left',
            },
            // right
            {
              type: 'docsVersionDropdown',
              position: 'right',
            },
            {
              href: 'https://github.com/delegatable/delegatable-sol',
              position: 'right',
              className: 'header-github-link',
            },
          ],
        },
        colorMode: {
          defaultMode: 'light',
          disableSwitch: false,
          respectPrefersColorScheme: true,
        },
        announcementBar: {
          content:
            '⭐️ If you like Delegatable, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/delegatable/delegatable-sol">GitHub</a>! ⭐️',
        },
        footer: {
          // links: [
          //   {
          //     title: 'Docs',
          //     items: [
          //       {
          //         label: 'Getting Started',
          //         to: 'docs/what-is-delegatable',
          //       },
          //       {
          //         label: 'FAQ',
          //         to: 'docs/docsearch-program',
          //       },
          //       {
          //         label: 'DocSearch v3',
          //         to: 'docs/DocSearch-v3',
          //       },
          //     ],
          //   },
          //   {
          //     title: 'Guides',
          //     items: [
          //       {
          //         label: 'Apply',
          //         to: 'apply',
          //       },
          //       {
          //         label: 'Issues',
          //         to: 'https://github.com/delegatable/delegatable-sol/issues',
          //       },
          //       {
          //         label: 'Privacy',
          //         to: 'https://www.algolia.com/policies/privacy/',
          //       },
          //     ],
          //   },
          //   {
          //     title: 'Social',
          //     items: [
          //       {
          //         label: 'GitHub',
          //         to: 'https://github.com/delegatable/delegatable-sol',
          //       },
          //       {
          //         label: 'Twitter',
          //         to: 'https://twitter.com/docsearch_',
          //       },
          //       {
          //         label: 'Algolia Blog',
          //         to: 'https://algolia.com/blog/',
          //       },
          //     ],
          //   },
          // ],
          copyright: 'Delegatable Framework - Open Source MIT License',
        },
        image: 'img/og_image.png',
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
