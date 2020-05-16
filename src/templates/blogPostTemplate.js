import React from 'react'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import {graphql, Link} from 'gatsby'
import {Layout} from '../components/Layout'
import Dump from '../components/Dump'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import SEO from 'react-seo-component'

export default ({data, pageContext}) => {
    const {frontmatter, body, fields, excerpt} = data.mdx
    const {previous, next} = pageContext
    const {siteLanguage, siteLocale, twitterUsername, authorName, siteUrl, image} = useSiteMetadata()
    const {title, cover, date} = frontmatter
    return (
        <Layout>
            <Dump
                title={title}
                description={excerpt}
                image={`${siteUrl}${image}`}
                image={cover === null ? `${siteUrl}${image}` : `${siteUrl}${cover.publicURL}`}
                pathname={`${siteUrl}${fields.slug}`}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitterUsername}
                author={authorName}
                article={true}
                publishedDate={date}
                modifiedDate={new Date(Date.now()).toISOString()}
            />
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <MDXRenderer>{body}</MDXRenderer>
            {previous === false ? null:(
                <>
                    {previous && (
                        <Link to={previous.fields.slug}>
                            <p>{previous.frontmatter.title}</p>
                        </Link>
                    )}
                </>
            )}
            {next === false ? null:(
                <>
                    {next && (
                        <Link to={next.fields.slug}>
                            <p>{next.frontmatter.title}</p>
                        </Link>
                    )}
                </>
            )}
        </Layout>
    )
}

export const query = graphql`
query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
        cover {
          publicURL
        }
      }
      body
      excerpt
      fields {
        slug
      }
    }
  }
`

