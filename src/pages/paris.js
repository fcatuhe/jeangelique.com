import React from 'react'

import Layout from '../components/layout'
import ModalRSVP from '../components/modalRSVP'
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
          frameBorder="0"
          className="mb-3 w-100"
          height="405"
        />
      </div>
    </div>

    <ModalRSVP buttonLabel="RSVP Jeangelique Paris">
      <iframe
        title="parisRSVP"
        src="https://docs.google.com/forms/d/e/1FAIpQLSdp_boq7LWktFJiG4E1yjVbDK5u_9pA0QcsvmcEGYbIf7bu5Q/viewform?embedded=true"
        frameBorder="0"
        className="w-100 h-modal-body"
      >
        Loading...
      </iframe>
    </ModalRSVP>
  </Layout>
)

export default ParisPage
