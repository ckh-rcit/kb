// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IT Handbook',
  tagline: 'Spreading Knowledge',
  url: 'https://it-handbook.github.io',
  trailingSlash: false,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'it-handbook', // Usually your GitHub org/user name.
  projectName: 'kb', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
      navbar: {
        title: 'IT Handbook',
        logo: {
          alt: 'Handbook Logo',
          src: 'img/ithand_64.png',
        },
        items: [
          {
            href: 'https://github.com/IT-Handbook',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      algolia: {
        appId: 'NOBTYSVZF9',
        apiKey: '1a7418931329464fe75eefa75fec87fa',
        indexName: 'kb',
        contextualSearch: true,
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CKH. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
