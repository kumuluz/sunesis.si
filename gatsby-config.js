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
        mergeStyleHashes: false,
        mergeDefaultDirectives: true,
        directives: {
          "default-src": "'self'",
          "script-src": "'self' 'sha256-7Y8EpCoqVAbwtKUn+XCkV6j+lVvDuW/E9oM+l6Lk130=' 'sha256-zqw0pcdRbJTCYhXGdhzSjWVEHO8qlCGFvJ8a9S9S0yU=' 'sha256-egpbluqkD8NT0bY3bWy7raM9tRIMkfUWboq0Y8KqsFk=' 'sha256-8EDTNrGjCv0kGPBwCoZx2H5ZP32EIwiR5LI6YX2zruA=' 'sha256-VwXMPj9F9wxgy4T80Dkdc3av5+1Ao0id2iG/eTYcoAM=' https://cdn.segment.com",
          "style-src": "'self' 'unsafe-inline' https://fonts.googleapis.com",
          "img-src": "'self' data: https:",
          "font-src": "'self' data: https://fonts.gstatic.com",
          "connect-src": "'self' https://www.google-analytics.com https://cdn.segment.com https://api.segment.io https://sessions.bugsnag.com",
          "frame-src": "'self' https://app.netlify.com",
          "object-src": "'none'",
          "base-uri": "'self'",
          "form-action": "'self'",
          "upgrade-insecure-requests": []
        }
      }
    }
  ]
};
