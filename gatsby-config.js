module.exports = {
  siteMetadata: {
    title: `READ WITH SID`,
    description: `CODE AND READ AMD DO MATH AND OTHER NERDY STUFF`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
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
