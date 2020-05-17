const siteMetadata = {
  title: `READ WITH SID`,
  description: `CODE AND READ AMD DO MATH AND OTHER NERDY STUFF`,
  image: `/defualt-site-image.jpg`,
  siteUrl: `https://readwithsid.com`,
  siteLanguage: `en-US`,
  siteLocale: `en_us`,
  twitterUsername: `@readwithsid`,
  authorName: `Sidda Chalamalasetty`,
} 

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 540,
            }
          }
        ],
        plugin: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 540,
            }
          }
        ]
      }
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            path: `${__dirname}/posts`,
            name: `posts`
        }
    }
  ],
};
