import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <div className="mt-3">
      <div className="mx-auto" style={{ maxWidth: `600px` }}>
        <Image />
      </div>
    </div>
  </Layout>
)

export default IndexPage
