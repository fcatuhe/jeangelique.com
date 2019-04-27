import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { Timeline, TimelineElement } from '../components/timeline'

const SouvenirsTemplate = ({ data: { markdownRemark } }) => {
  const souvenirs = [markdownRemark]

  return (
    <Layout skipContainer>
      <Timeline>
        {souvenirs.map(souvenir => (
          <TimelineElement
            key={souvenir.fields.slug}
            date={souvenir.frontmatter.date}
          >
            <div className="timeline-element-header">
              <h3>{souvenir.frontmatter.title}</h3>
              <h6 className="text-uppercase">
                {souvenir.frontmatter.location.city}
              </h6>
            </div>
            <img
              src={
                souvenir.frontmatter.image &&
                `${souvenir.frontmatter.image}?nf_resize=fit&w=600`
              }
            />
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

export default SouvenirsTemplate

export const souvenirsQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
`
