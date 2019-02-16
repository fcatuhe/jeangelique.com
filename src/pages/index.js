import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <div className="mt-3">
      <div className="mx-auto" style={{ maxWidth: `600px` }}>
        <Link to="paris">
          <Image />
        </Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
