// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Breadcrumbs",
  tagline: "Flexible hierarchies in Obsidian.md",
  url: "https://breadcrumbs-wiki.onrender.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "SkepticMystic", // Usually your GitHub org/user name.
  projectName: "Breadcrumbs Wiki", // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/SkepticMystic/BC-wiki",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Breadcrumbs",
        logo: {
          alt: "My Site Logo",
          src: "img/bread-slice-solid.svg",
        },
        items: [
          {
            type: "doc",
            docId: "Home",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/SkepticMystic/breadcrumbs",
            label: "Plugin",
            position: "right",
          },
          {
            href: "https://github.com/SkepticMystic/BC-wiki",
            label: "Edit Docs",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Home",
                to: "/docs/Home",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Breadcrumbs Wiki. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
