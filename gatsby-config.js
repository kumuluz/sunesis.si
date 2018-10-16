module.exports = {
  siteMetadata: {
    title: `Sunesis`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 10
      }
    }
  ]
};
