import React from 'react'

const CustomHeader = ({ event: { frontmatter } }) => (
  <>
    <div className="d-flex justify-content-between">
      <div>{frontmatter.who}</div>
      <h5>{frontmatter.date}</h5>
    </div>
    <h3>{frontmatter.title}</h3>
    <div className="text-uppercase">{frontmatter.location.city}</div>
  </>
)

export default CustomHeader
