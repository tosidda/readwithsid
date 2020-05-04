import React from 'react'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import styled from 'styled-components'
import { Layout } from '../components/Layout'
import {graphql} from 'gatsby'
import Dump from '../components/Dump'


export default ({data}) => {
    return (
       <>
        <Layout>
          <Dump poop={data}></Dump>
          {data.allMdx.nodes.map(({excerpt, frontmatter}) => (
            <>
            <h1>{frontmatter.title}</h1>
            <h1>{frontmatter.date}</h1>
            <p>{excerpt}</p>
            </>
          ))}
        </Layout>
       </>
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
            date
            title
          }
          fields {
            slug
          }
        }
      }
  }
`
