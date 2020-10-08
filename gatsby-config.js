/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/content/pages`,
      },
    },
    `gatsby-transformer-remark`,
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
  ],
}
