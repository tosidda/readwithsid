import {graphql, useStaticQuery} from 'gatsby'

export const useSiteMetadata = () => {
    const {site} = useStaticQuery(
        graphql`
        query Get_Site_Metadata {
            site {
              siteMetadata {
                description
                title
                image
                siteUrl
                siteLanguage
                siteLocale
                twitterUsername
                authorName
              }
            }
          }
        `    
    )

    return site.siteMetadata
}