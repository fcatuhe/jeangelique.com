import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'

const ParisPage = () => (
  <Layout>
    <div className="text-center">
      <h1>
        31 mai 2019
        <br />à Paris
      </h1>
      <p>15h Mairie du 11ème</p>
      <p>Champagne</p>
      <p>19h Dîner dans le 20ème</p>
    </div>

    <div className="row">
      <div className="col-lg mb-3">
        <div className="mx-auto" style={{ maxWidth: `600px` }}>
          <Image />
        </div>
      </div>

      <div className="col-lg mb-3">
        <iframe
          title="parisMap"
          src="https://www.google.com/maps/d/embed?mid=1q5fwiViHLpTl1IKzz7JTqC7Ag8uWLno7"
          frameborder="0"
          className="mb-3 w-100"
          height="405"
        />
      </div>
    </div>
  </Layout>
)

export default ParisPage
