import React from 'react'

import Layout from '../components/layout'
import ModalRSVP from '../components/modalRSVP'

const FriendsPage = () => (
  <Layout skipContainer className="font-family-cinzel">
    <div
      className="h-30vh-max-50vw"
      style={{
        backgroundImage: `url(/images/jeangelique_Banner.gif)`,
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
            <h3>Grillades</h3>

            <h4 className="mt-5">Till Late</h4>
            <h3>Music &&nbsp;Drinks &&nbsp;Dancing!</h3>

            <div className="mt-5 mb-0">
              <ModalRSVP buttonLabel="RSVP">
                <iframe
                  title="stuttgartRSVP"
                  src="https://docs.google.com/forms/d/e/1FAIpQLScJmLtkednV8tOwMqNk332bLfyEhRXx9Nqa4pYiEtYCT1YX6A/viewform?embedded=true"
                  frameBorder="0"
                  className="w-100 h-modal-body"
                >
                  Loading...
                </iframe>
              </ModalRSVP>
            </div>
          </div>
          <div className="col-md-4 mt-md-5">
            <h4>Sunday 20&nbsp;October 2019</h4>

            <h5 className="mt-5 mb-2">Galerie Kernweine</h5>
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

            <h5 className="mt-4">11h00</h5>
            <h4>Breakfast Club</h4>
          </div>
        </div>
      </div>
    </div>

    <div className="pt-5 pb-4 bg-primary text-white">
      <div className="container text-center">
        <h2 className="mb-4">our stuttgArt recommendations</h2>

        <div className="mb-4">
          <h3 className="mb-4">Eat?</h3>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4">
              <div
                className="card"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/v1554646497/jeangelique.com/kunitoraya.jpg')",
                  backgroundPosition: 'bottom',
                }}
              >
                <div className="card-category">Restaurant</div>
                <div className="card-price">€€</div>
                <div className="card-description">
                  <h2>Kunitoraya</h2>
                  <div>
                    Our favorite Japanese restaurant. Go for lunch offers.
                  </div>
                  <p>5 Rue Villedo, 75001 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Kunitoraya,+5+Rue+Villedo,+75001+Paris"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <h3 className="mb-4">Visit?</h3>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4">
              <div
                className="card"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://freight.cargo.site/t/original/i/287c138aa7ab0a4d41a594e3fb05cc06b769e067a1fa13ae5e3763220f86e284/merci1.jpg')",
                }}
              >
                <div className="card-category">Shopping</div>
                <div className="card-price">€€</div>
                <div className="card-description">
                  <h2>Merci Merci</h2>
                  <div>Concept store. Have a look. Worth it!</div>
                  <p>111 boulevard Beaumarchais, 75003 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Merci+Merci,+111+boulevard+Beaumarchais,+75003+Paris"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="py-5">
      <div className="container">
        <iframe
          title="stuttgartMap"
          src="https://www.google.com/maps/d/embed?mid=1JQsZh1oHZh1dgWK2YSj_jc6hZi1VmNM7"
          frameBorder="0"
          className="w-100 h-90vh"
        />
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

export default FriendsPage
