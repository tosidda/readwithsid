const {createFilePath} = require(`gatsby-source-filesystem`);
const path = require(`path`)

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions
    const bpt = path.resolve(
        'src/templates/blogPostTemplate.js'
    )
    return graphql(`
    {
        allMdx(sort: {fields: [frontmatter___date], order: DESC}
        filter: {frontmatter: {published:{eq: true}}}) {
          nodes {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date
              title
            }
            fields {
              slug
            }
          }
        }
    }
    `).then(results => {
        if (results.errors) {
            throw results.errors
        }

        const posts = results.data.allMdx.nodes
        posts.forEach((post, index) => {
            let previous = index === post.length - 1 ? null: posts[index+1]
            let next = index === 0 ? null: posts[index - 1]
            createPage({
                path: post.fields.slug,
                component: bpt,
                context: {
                    slug: post.fields.slug,
                    previous,
                    next,
                }
            })
        })
    })
}

exports.onCreateNode = ({node, actions, getNode}) => {
    const { createNodeField } = actions
    if (node.internal.type === `Mdx`) {
        const value = createFilePath({node, getNode})
        createNodeField({
            name: `slug`,
            node,
            value
        })
    }
}