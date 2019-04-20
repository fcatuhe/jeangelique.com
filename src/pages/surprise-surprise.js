import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { Timeline, TimelineElement } from '../components/timeline'

const SurpriseSurprisePage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const souvenirs = edges.map(edge => edge.node)

  return (
    <Layout skipContainer className="bg-info">
      <Timeline>
        {souvenirs.map(souvenir => (
          <TimelineElement
            date={souvenir.frontmatter.date}
            iconStyle={{ background: '#ff6f61', color: '#fff' }}
            key={souvenir.fields.slug}
          >
            <div className="m-3">
              <h3>{souvenir.frontmatter.title}</h3>
              <h6 className="text-uppercase">
                {souvenir.frontmatter.location.city}
              </h6>
            </div>
            <img className="img-fluid" src={souvenir.frontmatter.image} />
            {souvenir.html && (
              <div
                className="m-3"
                dangerouslySetInnerHTML={{ __html: souvenir.html }}
              />
            )}
          </TimelineElement>
        ))}
      </Timeline>
    </Layout>
  )
}

export default SurpriseSurprisePage

export const surpriseSurpriseQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "souvenirs" } } }
      sort: { fields: [fields___timestamp], order: ASC }
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
          }
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
