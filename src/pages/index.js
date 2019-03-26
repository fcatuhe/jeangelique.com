import React from 'react'

import Layout from '../components/layout'

import jeangeliqueSaveTheDate from '../images/jeangelique-save-the-date.gif'

const IndexPage = () => (
  <Layout skipContainer>
    <div
      className="viewport"
      style={{
        backgroundImage: `url(${jeangeliqueSaveTheDate})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
      }}
    />
  </Layout>
)

export default IndexPage
