const path = require('path');
const packageJson = require('./package.json');

module.exports = {
  siteMetadata: {
    title: `Web Developer Toolbox`,
    author: packageJson.author,
    description: packageJson.description,
    keywords: packageJson.keywords,
    siteUrl: packageJson.homepage,
    repositoryUrl: packageJson.repository.url,
    bugUrl: packageJson.bugs.url
  },
  plugins: [
    'gatsby-plugin-layout',
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve(__dirname, 'icons'),
        name: 'icons'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve(__dirname, 'lessons'),
        name: 'lessons'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-external-links',
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590
            }
          },
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              active: true,
              size: 32,
              class: 'emoji-icon'
            }
          }
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/config/typography'
      }
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Web Developer Toolbox',
        short_name: 'Webdev Tools',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#b71c1c',
        display: 'standalone',
        icon: 'icons/icon.png',
        legacy: true
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify'
  ]
};
