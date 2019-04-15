import React from 'react'
import { graphql } from 'gatsby'

import Timeline from 'react-image-timeline'

import Layout from '../components/layout'

import CustomHeader from '../components/timeline/customHeader'
import CustomTextBody from '../components/timeline/customTextBody'
import CustomFooter from '../components/timeline/customFooter'

const SurpriseSurprisePage = ({ data: { allMarkdownRemark } }) => {
  const souvenirs = allMarkdownRemark.edges.map(edge => edge.node)

  const events = souvenirs.map(souvenir => ({
    date: new Date(souvenir.frontmatter.date),
    imageUrl: souvenir.frontmatter.image,
    ...souvenir,
  }))

  return (
    <Layout skipContainer>
      <Timeline
        events={events}
        customHeader={CustomHeader}
        customTextBody={CustomTextBody}
        customFooter={CustomFooter}
      />
    </Layout>
  )
}

export default SurpriseSurprisePage

export const surpriseSurpriseQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "souvenirs" } } }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            author
            title
            who
            date
            location {
              city
              country
            }
            image
          }
          html
        }
      }
    }
  }
`
