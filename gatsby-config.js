module.exports = {
  siteMetadata: {
    title: `TulsaJS`,
    description: `A community of Javascript developers in and around Tulsa, Oklahoma`,
    author: `@nearbycoder`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tulsajs website`,
        short_name: `tulsajs`,
        start_url: `/`,
        background_color: `#38b2ac`,
        theme_color: `#38b2ac`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
