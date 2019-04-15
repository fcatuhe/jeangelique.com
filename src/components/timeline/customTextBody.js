import React from 'react'

const CustomTextBody = ({ event: { html } }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
)

export default CustomTextBody
