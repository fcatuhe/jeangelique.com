import React from 'react'
import { graphql } from 'gatsby'

import Timeline from 'react-image-timeline'
import 'react-image-timeline/dist/timeline.css'

import Layout from '../components/layout'

const SouvenirsTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  const event = {
    title: frontmatter.title,
    date: new Date(frontmatter.date),
    imageUrl: frontmatter.image,
    text: `${frontmatter.location.city}, ${frontmatter.location.country} · by ${
      frontmatter.author
    }`,
  }

  return (
    <Layout>
      <Timeline events={[event]} />

      <p>{frontmatter.who}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default SouvenirsTemplate

export const souvenirsQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
