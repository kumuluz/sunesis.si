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
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        reportOnly: false,
        mergeScriptHashes: true,
        mergeStyleHashes: true,
        mergeDefaultDirectives: true,
        directives: {
          "default-src": "'self'",
          "script-src": "'self'",
          "style-src": "'self' 'unsafe-hashes' https://fonts.googleapis.com",
          "img-src": "'self' data: https:",
          "font-src": "'self' data: https://fonts.gstatic.com",
          "connect-src": "'self' https://www.google-analytics.com",
          "object-src": "'none'",
          "base-uri": "'self'",
          "form-action": "'self'",
          "frame-ancestors": "'none'",
          "upgrade-insecure-requests": true
        }
      }
    }
  ]
};
