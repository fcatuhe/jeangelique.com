import React from 'react'
import { graphql } from 'gatsby'

// import Timeline from 'react-image-timeline'
// import 'react-image-timeline/dist/timeline.css'

import Layout from '../components/layout'

const SouvenirsTemplate = ({ data: { markdownRemark } }) => {
  return <Layout />
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
