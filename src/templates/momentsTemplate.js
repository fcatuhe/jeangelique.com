import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const MomentTemplate = ({ data, location }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.who}</p>
      <p>
        {frontmatter.date} in {frontmatter.location.city},{' '}
        {frontmatter.location.country}
      </p>
      <p>by {frontmatter.author}</p>
      <img src={frontmatter.image} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default MomentTemplate

export const momentQuery = graphql`
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
