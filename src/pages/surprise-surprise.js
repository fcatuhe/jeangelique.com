import React from 'react'
import { graphql } from 'gatsby'

import Timeline from 'react-image-timeline'
import 'react-image-timeline/dist/timeline.css'

import Layout from '../components/layout'

const SurpriseSurprisePage = ({ data: { allMarkdownRemark } }) => {
  const souvenirs = allMarkdownRemark.edges.map(edge => edge.node)

  const events = souvenirs.map(souvenir => ({
    title: souvenir.frontmatter.title,
    date: new Date(souvenir.frontmatter.date),
    imageUrl: souvenir.frontmatter.image,
    text: `${souvenir.frontmatter.location.city}, ${
      souvenir.frontmatter.location.country
    } · by ${souvenir.frontmatter.author}`,
  }))

  return (
    <Layout>
      <Timeline events={events} />
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
