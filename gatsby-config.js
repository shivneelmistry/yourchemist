module.exports = {
  siteMetadata: {
    title: `yourchemist`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    `gatsby-plugin-styled-components`, 
    `gatsby-plugin-material-ui`,
    `gatsby-theme-material-ui`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/data/`,
        typeName: ({ node, object, isArray }) => object.level,
      },
    }   
  ],
};