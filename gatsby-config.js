/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');

module.exports = {
  siteMetadata: {
    title:
      'Hêtre sous le Charme - Cabanes perchées dans les arbres en Corrèze surplombant la Dordogne',
    description:
      'Hêtre sous le Charme - Cabanes perchées dans les arbres en Corrèze surplombant la Dordogne',
    keywords:
      'Hetre sous le charme, Cabanes, perchees, arbres, Correze, Dordogne, hetresouslecharme.com, location, cabane, arbre, Le Bourg, Saint Martial, Entraygues, vacances, nature.',
  },
  plugins: [
    'gatsby-plugin-no-index',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `jpg`],
          placeholder: 'blurred',
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              backgroundColor: 'transparent',
            },
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options here
      },
    },
  ],
};
