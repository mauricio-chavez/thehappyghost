module.exports = {
  siteMetadata: {
    title: `The Happy Ghost`,
    description: `Software hecho a mano y con amor.`,
    author: `The Happy Ghost`,
  },
  plugins: [
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
        name: `the-happy-ghost`,
        short_name: `the-happy-ghost`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/logos/logo.png`,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
