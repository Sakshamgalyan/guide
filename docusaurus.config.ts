import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Paysecure Guide',
  tagline: 'Your guide to Paysecure onboarding and configuration',
  favicon: 'img/favicon.ico',

  // Enable future flags for compatibility with Docusaurus v4
  future: {
    v4: true,
  },

  // Set the production URL (replace with your actual domain)
  url: 'https://guide.paysecure.net',
  // Base URL is fine as root for most deployments
  baseUrl: '/',

  // GitHub organization and project names updated to reflect your setup
  organizationName: 'Paysecure',
  projectName: 'paysecureGuide',

  // Fail the build on broken links to ensure site integrity
  onBrokenLinks: 'throw',
  // Warn on broken Markdown links without failing the build
  onBrokenMarkdownLinks: 'warn',

  // Internationalization settings (English only for now)
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  
  themeConfig: {
    // Social card image for sharing (ensure this file exists in static/img/)
    navbar: {
      title: 'Paysecure Guide',
      logo: {
        alt: 'Paysecure Guide Logo',
        src: 'img/logo.svg', // Ensure this file exists in static/img/
      },
      items: [
        {
          // Updated type to 'docSidebar' (correct Docusaurus type) and label for clarity
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        }, 
        {
          // Updated GitHub URL to match organizationName and projectName
            href: 'https://paysecure.net/',
            label: 'Paysecure',
            position: 'right',
          },
          ],
        },
        colorMode: {
          defaultMode: 'light',
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
              // Updated label to 'Introduction' for clarity, assuming /docs/intro exists
              label: 'Introduction',
              to: '/docs/White‑Label Merchant Onboarding and Configuration',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Paysecure/paysecureGuide',
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