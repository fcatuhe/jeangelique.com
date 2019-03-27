import React from 'react'

import Layout from '../components/layout'

const ParisPage = () => (
  <Layout skipContainer>
    <div className="py-10vh bg-secondary text-white">
      <div className="container text-center">
        <h1>Nous nous marions !</h1>
      </div>
    </div>

    <div className="py-5">
      <div className="container text-center">
        <h2>Vendredi 31 mai 2019</h2>

        <h3 className="mt-5">
          15h00
          <br />
          Mairie du XI<sup>ème</sup>
        </h3>
        <p>
          12 Place Léon Blum
          <br />
          Station Voltaire (Métro 9)
        </p>

        <h3 className="mt-5">champagne !</h3>

        <h3 className="mt-5">
          19h30
          <br />
          Dîner dans le XX<sup>ème</sup>
        </h3>
        <p>
          Station Belleville (Métro 2, 11)
          <br />
          ou Station Couronnes (Métro 2)
        </p>

        <h3 className="mt-5">Un dernier verre</h3>
      </div>
    </div>
  </Layout>
)

export default ParisPage
