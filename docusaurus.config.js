// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ASI4AI',
  tagline: 'Igniting the Intelligence Explosion',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://gair-nlp.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GAIR-NLP', // Usually your GitHub org/user name.
  projectName: 'AI4ASI', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // 禁用docs功能
        blog: {
          routeBasePath: 'articles', // Change from default 'blog' to 'articles'
          showReadingTime: true,
          blogSidebarCount: 0, // Disable sidebar to avoid listing conflicts
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} SII-GAIR.`,
          },
          blogTitle: 'ASI4AI Blog',
          blogDescription: 'Exploring the future of Artificial Superintelligence in AI research',
          postsPerPage: 10,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      
      // Set default color mode to light
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      
      navbar: {
        title: '',
        logo: {
          alt: 'ASI4AI Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/research',
            label: 'Research',
            position: 'left',
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
          {
            to: '/about',
            label: 'About',
            position: 'left',
          },

        ],
      },
      footer: {
        style: 'light',
        links: [],
        copyright: `© ${new Date().getFullYear()} SII-GAIR · <a href="https://github.com/GAIR-NLP" target="_blank" rel="noopener noreferrer">GitHub</a> · <a href="https://plms.ai/" target="_blank" rel="noopener noreferrer">SII-GAIR</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
