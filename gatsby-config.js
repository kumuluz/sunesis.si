module.exports = {
  siteMetadata: {
    title: `Sunesis`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/static/locales`
      }
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        localeJsonSourceName: "locale",
        languages: ["sl", "en"],
        defaultLanguage: "sl",
        siteUrl: "https://sunesis.si",
        redirect: false,
        i18nextOptions: {
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          keySeparator: ".",
          nsSeparator: ":"
        }
      }
    },
  ]
};
