import React from 'react'
import { graphql } from 'gatsby'

import Timeline from 'react-image-timeline'
import 'react-image-timeline/dist/timeline.css'

import Layout from '../components/layout'

import CustomHeader from '../components/timeline/customHeader'
import CustomTextBody from '../components/timeline/customTextBody'
import CustomFooter from '../components/timeline/customFooter'

const SouvenirsTemplate = ({ data: { markdownRemark } }) => {
  const souvenirs = [markdownRemark]

  const events = souvenirs.map(souvenir => ({
    date: new Date(souvenir.frontmatter.date),
    imageUrl: souvenir.frontmatter.image,
    ...souvenir,
  }))

  return (
    <Layout>
      <Timeline
        events={events}
        customHeader={CustomHeader}
        customTextBody={CustomTextBody}
        customFooter={CustomFooter}
      />
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
