const path = require('path')

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
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        // develop: true,
        content: [path.join(process.cwd(), 'src/**/!(*.d).{ts,js,jsx,tsx}')],
      },
    },
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'souvenirs',
        path: `${__dirname}/src/pages/souvenirs`,
      },
    },
    'gatsby-transformer-remark',
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
    'gatsby-plugin-offline',
  ],
}
