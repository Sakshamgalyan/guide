import * as dotenv from 'dotenv';
dotenv.config();
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Paysecure Guide',
  tagline: 'Your guide to Paysecure onboarding and configuration',
  favicon: 'img/favicon.ico',
  url: 'https://guide.paysecure.net',
  baseUrl: '/',
  organizationName: 'Paysecure',
  projectName: 'paysecureGuide',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  future: {
    v4: true,
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  customFields: {
    companyName: process.env.COMPANY_NAME,
    openaiApiKey: process.env.OPENAI_API_KEY,
  },

  themeConfig: {
    algolia: {
      appId: '85705598-8aa0-4975-bba8-5ac349bb1a95',
      apiKey: '92bba9f8d7f9d230c91fbfa5ed1db26a',
      indexName: 'instant_search',
      contextualSearch: true,
      searchParameters: {},
    },
    navbar: {
      title: 'Paysecure Guide',
      logo: {
        alt: 'Paysecure Guide Logo',
        className: 'navbar_logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apmDocs',
          position: 'left',
          label: 'APM Docs',
        }, 
        {
          type: 'docSidebar',
          sidebarId: 'api',
          position: 'left',
          label: 'API Reference',
        },
        {
          type: 'search',
          position: 'right',
          className: 'navbar_search_bar',
        },
        {
          href: 'https://paysecure.net/',
          label: 'Paysecure',
          position: 'right',
          className: 'navbar_link',
        },
      ],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false, 
      respectPrefersColorScheme: true,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Onboarding and Configuration',
              to: '/docs/White‑Label Merchant Onboarding and Configuration',
            },
          ],
        },
        {
          title: 'APM Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/introduction',
            },
            {
              label: 'Authentication',
              to: '/docs/authentication',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/sakshamgalyan/guide',
            },
            {
              label: 'Paysecure',
              href: 'https://paysecure.net/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Paysecure, Inc. Built by Saksham.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
