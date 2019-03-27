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
        <a
          href="https://goo.gl/maps/FvnyAcLAPav"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-map-marked-alt fa-lg" />
        </a>

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

    <div className="py-5 bg-primary text-white">
      <div className="container text-center">
        <h2>our pAris recommendations</h2>
      </div>
    </div>

    <div className="py-5">
      <div className="container">
        <iframe
          title="parisMap"
          src="https://www.google.com/maps/d/embed?mid=1q5fwiViHLpTl1IKzz7JTqC7Ag8uWLno7"
          frameBorder="0"
          className="mb-3 w-100 h-90vh"
        />
      </div>
    </div>

    <div className="py-5 bg-primary text-white">
      <div className="container text-center">
        <h3>Des questions ?</h3>
        <h3>Ecrivez-nous : oui @ jeangelique.com</h3>
      </div>
    </div>
  </Layout>
)

export default ParisPage
