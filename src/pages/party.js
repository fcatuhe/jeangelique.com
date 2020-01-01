import React from 'react'

import Layout from '../components/layout'

const PartyPage = () => (
  <Layout skipContainer className="font-family-cinzel">
    <div
      className="h-30vh-max-50vw"
      style={{
        backgroundImage: `url(/images/laboum.gif)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    />

    <div className="py-5">
      <div className="container text-center">
        <div className="row">
          <div className="offset-md-4 col-md-4 mb-5 mb-md-0">
            <h2>Saturday 19&nbsp;October 2019</h2>

            <h4 className="mt-5 mb-2">Galerie Kernweine</h4>
            <p className="mb-2">
              Cottastraße 4 - 6
              <br />
              70178 Stuttgart
            </p>
            <a
              href="https://goo.gl/maps/a63TmRdkLgEYb49t5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-map-marked-alt fa-lg" />
            </a>

            <h4 className="mt-5">18h00</h4>
            <h3>Apéritif</h3>

            <h4 className="mt-5">19h30</h4>
            <h3>Food</h3>

            <h4 className="mt-5">Till Late</h4>
            <h3>Music &&nbsp;Drinks &&nbsp;Dancing!</h3>
          </div>
        </div>
      </div>
    </div>

    <div className="py-5 bg-primary text-white">
      <div className="container text-center">
        <h3>For questions</h3>
        <p className="h5 mb-0">Write us at: oui @ jeangelique.com</p>
      </div>
    </div>
  </Layout>
)

export default PartyPage
