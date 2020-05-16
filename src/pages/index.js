import React from 'react'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import styled from 'styled-components'
import { Layout } from '../components/Layout'
import SEO from 'react-seo-component'
import {graphql, Link} from 'gatsby'
import Dump from '../components/Dump'
import Img from 'gatsby-image'



const IndexWrapper = styled.main`
  
`

const PostWrapper = styled.div`

`;

const Image = styled(Img)`
  border-radius: 5px;
`

export default ({data}) => {
  const {
    description,
    title,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    authorName
  } = useSiteMetadata()
    return (
        <Layout>
          <SEO
            title={title}
            description={description}
            image={`${siteUrl}${image}`}
            pathname={siteUrl}
            siteLanguage={siteLanguage}
            siteLocale={siteLocale}
            twitterUsername={twitterUsername}
          />
          <IndexWrapper>
          {/* <Dump poop={data}></Dump> */}
            {data.allMdx.nodes.map(({id, excerpt, frontmatter, fields}) => (
              <PostWrapper key={id}>
                <Link to={fields.slug}>
                {!!frontmatter.cover ? (<Image sizes={frontmatter.cover.childImageSharp.sizes}/>) : null}
                <h1>{frontmatter.title}</h1>
                <h1>{frontmatter.date}</h1>
                <p>{excerpt}</p>
                </Link>
              </PostWrapper>
           ))}
          </IndexWrapper>
        </Layout>
    )
}

export const query = graphql`
query SITE_INDEX_QUERY {
      allMdx(sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {published:{eq: true}}}) {
        nodes {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            date(formatString: "YYYY MMMM Do")
            title
            cover {
              publicURL
              childImageSharp {
                sizes(
                  maxWidth: 2000
                  traceSVG: { color: "#639" }
                ) {
                  ...GatsbyImageSharpSizes_tracedSVG
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
  }
`
