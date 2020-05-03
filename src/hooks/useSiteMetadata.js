import {graphql, useStaticQuery} from 'gatsby'

export const useSiteMetadata = () => {
    const {site} = useStaticQuery(
        graphql`
        query Get_Site_Metadata {
            site {
              siteMetadata {
                description
                title
              }
            }
          }
        `    
    )

    return site.siteMetadata
}