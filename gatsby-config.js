module.exports = {
  siteMetadata: {
    title: '#JEANGELIQUE',
    description: 'jeangelique',
    author: '@jeangelique',
    siteUrl: 'https://jeangelique.com',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: ['/$'], disallow: ['/'] }],
      },
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        whitelist: [
          'fade',
          'modal',
          'modal-backdrop',
          'modal-body',
          'modal-content',
          'modal-dialog',
          'show',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'jeangelique',
        short_name: 'jeangelique',
        start_url: '/',
        background_color: '#ff6f61',
        theme_color: '#ff6f61',
        display: 'minimal-ui',
        icon: 'src/images/jeangelique-save-the-date.gif', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
