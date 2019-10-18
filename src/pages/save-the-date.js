import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SaveTheDatePage = () => (
  <Layout skipContainer>
    <div
      className="viewport"
      style={{
        backgroundImage: `url(/images/jeangelique-save-the-date.gif)`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
      }}
    />

    <div className="fixed-bottom-right mx-3 my-2">
      <Link to="disclaimer">Disclaimer</Link>
    </div>
  </Layout>
)

export default SaveTheDatePage
