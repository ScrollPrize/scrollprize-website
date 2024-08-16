// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Vesuvius Challenge",
  tagline: "A $1,000,000+ machine learning and computer vision competition",
  url: "https://scrollprize.org",
  baseUrl: "/",
  onBrokenAnchors: "throw",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/social/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ScrollPrize", // Usually your GitHub org/user name.
  projectName: "scrollprize.org", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: false,
          breadcrumbs: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ScrollPrize/scrollprize-website/tree/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: 'G-NLQQENBL0L',
          anonymizeIP: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Vesuvius Challenge",
        logo: {
          alt: "Vesuvius Challenge Logo",
          src: "img/social/favicon-64x64.png",
        },
        items: [],
      },
      metadata: [
        // Primary Meta Tags
        {
          name: "description",
          content:
            "A $1,000,000+ machine learning and computer vision competition",
        },
        // Open Graph / Facebook
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://scrollprize.org/",
        },
        {
          property: "og:title",
          content: "Vesuvius Challenge",
        },
        {
          property: "og:description",
          content: "A machine learning & computer vision competition.",
        },
        {
          property: "og:image",
          content: "https://scrollprize.org/img/social/opengraph.jpg",
        },
        // Twitter
        {
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          property: "twitter:url",
          content: "https://scrollprize.org/",
        },
        {
          property: "twitter:title",
          content: "Vesuvius Challenge",
        },
        {
          property: "twitter:description",
          content: "A machine learning & computer vision competition.",
        },
        {
          property: "twitter:image",
          content: "https://scrollprize.org/img/social/opengraph.jpg",
        },
      ],
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          if (process.env.NODE_ENV !== "development") {
            postcssOptions.plugins.push(require("autoprefixer"));
          }
          return postcssOptions;
        },
      };
    },
    "./src/plugins/fetch-content",
  ],
};

module.exports = config;
