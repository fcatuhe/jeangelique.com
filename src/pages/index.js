import React from 'react'
import { Link } from 'gatsby'

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

    <div className="fixed-bottom-right mx-3 my-2">
      <Link to="disclaimer">Disclaimer</Link>
    </div>
  </Layout>
)

export default IndexPage
