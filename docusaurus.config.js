// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Trò chuyện IT",
  tagline: "Trò chuyện về ngành công nghệ",
  favicon: "img/logo.svg",

  // Set the production url of your site here
  url: "https://trochuyenit.hung.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "nvh95", // Usually your GitHub org/user name.
  projectName: "trochuyenit.hung.dev", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "vi",
    locales: ["vi"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          blogDescription:
            "Trò chuyện IT - Cùng trò chuyện về công việc và cuộc sống của những con người đang làm trong ngành công nghệ",
          routeBasePath: "/",
          showReadingTime: false,
          editUrl: "https://github.com/nvh95/trochuyenit.hung.dev/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-KJCSXLHXL1",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/social-card.jpg",
      navbar: {
        title: "Trò chuyện IT",
        logo: {
          alt: "",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://www.youtube.com/@trochuyenit",
            label: "Youtube",
            position: "right",
          },
          {
            href: "https://www.facebook.com/hungdotdev/",
            label: "Facebook",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: "Docs",
          //   items: [
          //     {
          //       label: "Tutorial",
          //       to: "/docs/intro",
          //     },
          //   ],
          // },
          {
            title: "Community",
            items: [
              {
                label: "Youtube",
                href: "https://www.youtube.com/@trochuyenit",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/hungdotdev/",
              },

              {
                label: "Twitter",
                href: "https://twitter.com/hung_dev",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Hung's Blog",
                href: "https://hung.dev",
              },
              {
                label: "GitHub",
                href: "https://github.com/nvh95/trochuyenit.hung.dev",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hung Viet Nguyen. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
