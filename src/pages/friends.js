import React from 'react'

import Layout from '../components/layout'
import ModalRSVP from '../components/modalRSVP'

const FriendsPage = () => (
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

        <div className="mt-5 mb-0">
          <ModalRSVP>
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
    </div>

    <div className="pt-5 pb-4 bg-primary text-white">
      <div className="container text-center">
        <h2 className="mb-4">our stuttgArt recommendations</h2>

        <div className="mb-4">
          <h3 className="mb-4">Eat?</h3>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#B32A82' }}>
                <div className="card-category">Bar</div>
                <div className="card-price">€€</div>
                <div className="card-description">
                  <h2>schwarz-weiss Bar</h2>
                  <div>
                    The bar where Angelique and Jens had their first drink
                    together
                  </div>
                  <p>Wilhelmstraße 8A, 70182 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//schwarz-weiss+Bar,+Wilhelmstraße+8A,+70182+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#B32A82' }}>
                <div className="card-category">Bar</div>
                <div className="card-price">€€</div>
                <div className="card-description">
                  <h2>Lennart</h2>
                  <div>
                    Excellent drinks in un-chi-chi environment. They have Basel
                    Smash!
                  </div>
                  <p>Tübinger Str. 109, 70178 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Lennart,+Tübinger+Str.+109,+70178+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#B32A82' }}>
                <div className="card-category">Bar</div>
                <div className="card-price">€€</div>
                <div className="card-description">
                  <h2>Die Bar</h2>
                  <div>Jazz bar with great drinks - a bit off the city</div>
                  <p>Augustenstraße 81, 70178 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Die+Bar,+Augustenstraße+81,+70178+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#B32A82' }}>
                <div className="card-category">Bar</div>
                <div className="card-price">€€</div>
                <div className="card-description">
                  <h2>Bix</h2>
                  <div>
                    If they ask you for entry fee - tell them you only want to
                    go to the bar upstairs
                  </div>
                  <p>Leonhardsplatz 28, 70182 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Bix,+Leonhardsplatz+28,+70182+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#B32A82' }}>
                <div className="card-category">Bar</div>
                <div className="card-price">€€</div>
                <div className="card-description">
                  <h2>Tatti</h2>
                  <div>Summer evening hangout and coffee in the sun</div>
                  <p>Pierre-Pflimlin-Platz 3, 70173 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Tatti,+Pierre-Pflimlin-Platz+3,+70173+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#B32A82' }}>
                <div className="card-category">Bar</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Palast der Republik</h2>
                  <div>Outdoor beer in the crowd</div>
                  <p>Friedrichstraße 27, 70174 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Palast+der+Republik,+Friedrichstraße+27,+70174+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#B32A82' }}>
                <div className="card-category">Bar</div>
                <div className="card-price">€€</div>
                <div className="card-description">
                  <h2>Paul & George</h2>
                  <div>
                    A bit too hipster but good crowd to mingle in and very
                    central
                  </div>
                  <p>Weberstraße 3,, 70182 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Paul+&+George,+Weberstraße+3,,+70182+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#B32A82' }}>
                <div className="card-category">Bar</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Galerie Kern Weine</h2>
                  <div>Bar, Breakfast, Galerie. Love it</div>
                  <p>Cottastraße 4-6, 70178 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Galerie+Kern+Weine,+Cottastraße+4-6,+70178+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#B32A82' }}>
                <div className="card-category">Bar</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Café Galao</h2>
                  <div>
                    Alternative and great. Live music every Wednesday and
                    Saturday.
                  </div>
                  <p>Tübinger Str. 90, 70178 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Café+Galao,+Tübinger+Str.+90,+70178+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#B32A82' }}>
                <div className="card-category">Bar</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Mata Hari</h2>
                  <div>Student hang out place.</div>
                  <p>Geißstraße 3, 70173 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Mata+Hari,+Geißstraße+3,+70173+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#4720CD' }}>
                <div className="card-category">Boulangerie</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Bäckerei Frank</h2>
                  <div>Great Brezel and Shoko-Croissant</div>
                  <p>Strohberg 21, 70180 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Bäckerei+Frank,+Strohberg+21,+70180+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#4720CD' }}>
                <div className="card-category">Boulangerie</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Bäckerei Weible</h2>
                  <div>Very traditional swabian bakery. Excellent Brezel.</div>
                  <p>Heusteigstraße 51, 70180 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Bäckerei+Weible,+Heusteigstraße+51,+70180+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#78C81B' }}>
                <div className="card-category">Coffee</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Misch Misch</h2>
                  <div>Tiny cafe with good coffee</div>
                  <p>Tübinger Str. 95, 70178 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Misch+Misch,+Tübinger+Str.+95,+70178+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div
                className="card"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/v1568709358/jeangelique.com/Cafe_bar.jpg')",
                }}
              >
                <div className="card-category">Coffee</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Cafe bar</h2>
                  <div>Espresso bar - also serves beers and Aperol</div>
                  <p>Torstraße 27, 70173 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Cafe+bar,+Torstraße+27,+70173+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div
                className="card"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/v1568709366/jeangelique.com/Condesa.jpg')",
                  backgroundPosition: 'bottom',
                }}
              >
                <div className="card-category">Coffee</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Condesa</h2>
                  <div>Excellent coffee and sun</div>
                  <p>Marienplatz 11, 70178 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Condesa,+Marienplatz+11,+70178+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#78C81B' }}>
                <div className="card-category">Coffee</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Monsieur Renard</h2>
                  <div>Good coffee</div>
                  <p>Neue Weinsteige 6A, 70180 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Monsieur+Renard,+Neue+Weinsteige+6A,+70180+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#E7CA11' }}>
                <div className="card-category">Breakfast</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>kantinchen</h2>
                  <div>Good breakfast</div>
                  <p>Alexanderstraße 180, 70180 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//kantinchen,+Alexanderstraße+180,+70180+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#E7CA11' }}>
                <div className="card-category">Breakfast</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Cafe Kaiserbau</h2>
                  <div>Good breakfast. Many tables outside.</div>
                  <p>Marienplatz 11, 70178 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Cafe+Kaiserbau,+Marienplatz+11,+70178+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#B32A82' }}>
                <div className="card-category">Ice cream</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Gelateria Kaiserbau</h2>
                  <div>Really great ice cream</div>
                  <p>Marienplatz 14, 70178 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Gelateria+Kaiserbau,+Marienplatz+14,+70178+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#F97C20' }}>
                <div className="card-category">Restaurant</div>
                <div className="card-price">€€</div>
                <div className="card-description">
                  <h2>L.A. Signorina</h2>
                  <div>Hipster pizza - but nice place</div>
                  <p>Marienplatz 12, 70178 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//L.A.+Signorina,+Marienplatz+12,+70178+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div
                className="card"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/v1568709355/jeangelique.com/Goldener_Adler.jpg')",
                }}
              >
                <div className="card-category">Restaurant</div>
                <div className="card-price">€€</div>
                <div className="card-description">
                  <h2>Goldener Adler</h2>
                  <div>Swabian Fusion. Angélique's favorite restaurant</div>
                  <p>Böheimstraße 38, 70178 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Goldener+Adler,+Böheimstraße+38,+70178+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#F97C20' }}>
                <div className="card-category">Restaurant</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Alimentari di Loretta</h2>
                  <div>Lunch only. Italian Mama. Jens' recommendation.</div>
                  <p>Römerstraße 8, 70178 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Alimentari+di+Loretta,+Römerstraße+8,+70178+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#F97C20' }}>
                <div className="card-category">Restaurant</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Noir</h2>
                  <div>Asian lunch</div>
                  <p>Tübinger Str. 92, 70178 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Noir,+Tübinger+Str.+92,+70178+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#F97C20' }}>
                <div className="card-category">Restaurant</div>
                <div className="card-price">€€</div>
                <div className="card-description">
                  <h2>Weinstube Fröhlich</h2>
                  <div>
                    Great Swabian restaurant. Don't let environment distract
                    you.
                  </div>
                  <p>Leonhardstraße 5, 70182 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Weinstube+Fröhlich,+Leonhardstraße+5,+70182+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#F97C20' }}>
                <div className="card-category">Restaurant</div>
                <div className="card-price">€€</div>
                <div className="card-description">
                  <h2>Weinstube Kiste</h2>
                  <div>
                    Oldest Stuttgart restaurant. Must go. Reservation only.
                  </div>
                  <p>Kanalstraße 2, 70182 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Weinstube+Kiste,+Kanalstraße+2,+70182+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div
                className="card"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/v1568709362/jeangelique.com/Breitengrad_17.jpg')",
                  backgroundPosition: 'bottom',
                }}
              >
                <div className="card-category">Restaurant</div>
                <div className="card-price">€€</div>
                <div className="card-description">
                  <h2>Breitengrad 17</h2>
                  <div>Asian fusion. So delicious!</div>
                  <p>Eberhardstraße 35, 70173 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Breitengrad+17,+Eberhardstraße+35,+70173+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#F97C20' }}>
                <div className="card-category">Restaurant</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Alaturka</h2>
                  <div>
                    Best Döner in town - with real meat (or just grilled
                    vegetables)
                  </div>
                  <p>Olgastraße 109, 70178 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Alaturka,+Olgastraße+109,+70178+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#F97C20' }}>
                <div className="card-category">Restaurant</div>
                <div className="card-price">€€</div>
                <div className="card-description">
                  <h2>Injeera Restaurant</h2>
                  <div>African. Have the mixed Injeera plates.</div>
                  <p>Wagnerstraße 30, 70182 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Injeera+Restaurant,+Wagnerstraße+30,+70182+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div
                className="card"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/v1568709358/jeangelique.com/Grombier.jpg')",
                }}
              >
                <div className="card-category">Restaurant</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Grombier</h2>
                  <div>Baked potatoes. Excellent!</div>
                  <p>Josef-Hirn-Platz 8, 70173 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Grombier,+Josef-Hirn-Platz+8,+70173+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#E7CA11' }}>
                <div className="card-category">Wine bar</div>
                <div className="card-price" />
                <div className="card-description">
                  <h2>Weinhandlung Kreis</h2>
                  <div>Our favorite wine shop! They also have a winebar.</div>
                  <p>Dorotheenstraße 2, 70173 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Weinhandlung+Kreis,+Dorotheenstraße+2,+70173+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4">Visit?</h3>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#E7CA11' }}>
                <div className="card-category">Museum</div>
                <div className="card-price" />
                <div className="card-description">
                  <h2>Kunstmuseum Stuttgart</h2>
                  <div>Modern art, with a view on Stuttgart's 2 castles</div>
                  <p>Kleiner Schloßplatz 1, 70173 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Kunstmuseum+Stuttgart,+Kleiner+Schloßplatz+1,+70173+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#E7CA11' }}>
                <div className="card-category">Museum</div>
                <div className="card-price" />
                <div className="card-description">
                  <h2>Porsche Museum</h2>
                  <div>The beauty of cars. In three digits: 911</div>
                  <p>Porscheplatz 1, 70435 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Porsche+Museum,+Porscheplatz+1,+70435+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#E7CA11' }}>
                <div className="card-category">Museum</div>
                <div className="card-price" />
                <div className="card-description">
                  <h2>Mercedes Museum</h2>
                  <div>
                    It starts with the horse and ends with the latest formula 1
                    car. Takes 3-4h.
                  </div>
                  <p>Mercedesstraße 100, 70372 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Mercedes+Museum,+Mercedesstraße+100,+70372+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div
                className="card"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/a_0/v1568709364/jeangelique.com/Weissenhofsiedlung.jpg')",
                }}
              >
                <div className="card-category">Museum</div>
                <div className="card-price" />
                <div className="card-description">
                  <h2>Weissenhofsiedlung</h2>
                  <div>Visit house Le Corbusier!</div>
                  <p>Rathenaustraße 1, 70191 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Weissenhofsiedlung,+Rathenaustraße+1,+70191+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#F97C20' }}>
                <div className="card-category">Shopping</div>
                <div className="card-price">€€</div>
                <div className="card-description">
                  <h2>Merz und Benzing</h2>
                  <div>
                    Shop in the old market hall. Great view. Have a look!
                  </div>
                  <p>Friedrichstraße 27, 70173 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Merz+und+Benzing,+Friedrichstraße+27,+70173+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#F97C20' }}>
                <div className="card-category">Shopping</div>
                <div className="card-price">€€</div>
                <div className="card-description">
                  <h2>manufactum</h2>
                  <div>Beautiful objects for house and kitchen.</div>
                  <p>Lautenschlagerstraße 16, 70173 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//manufactum,+Lautenschlagerstraße+16,+70173+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#F97C20' }}>
                <div className="card-category">Shopping</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Tritschler</h2>
                  <div>
                    Kitchen store. Buy your own Spätzle Presse on the top floor.
                  </div>
                  <p>Marktplatz 7, 70173 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Tritschler,+Marktplatz+7,+70173+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div
                className="card"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/v1568709355/jeangelique.com/Green_markets.jpg')",
                  backgroundPosition: 'bottom',
                }}
              >
                <div className="card-category">Visit</div>
                <div className="card-price" />
                <div className="card-description">
                  <h2>Green markets</h2>
                  <div>We love it and spend every Saturday morning here</div>
                  <p>Königstraße, 70173 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Green+markets,+Königstraße,+70173+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#78C81B' }}>
                <div className="card-category">Visit</div>
                <div className="card-price" />
                <div className="card-description">
                  <h2>Teehaus</h2>
                  <div>Great viewpoint to hang out. Bring a beer.</div>
                  <p>Hohenheimer Str. 119, 70184 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Teehaus,+Hohenheimer+Str.+119,+70184+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div
                className="card"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/a_0/v1568709359/jeangelique.com/Plaza_Santiago_de_Chile.jpg')",
                }}
              >
                <div className="card-category">Visit</div>
                <div className="card-price" />
                <div className="card-description">
                  <h2>Plaza Santiago de Chile</h2>
                  <div>
                    Great view over the city. Take Line 10 from Marienplatz
                    (Kurzstrecke). Exit at Haigst.
                  </div>
                  <p>Santiago de Chile Platz, 70597 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Plaza+Santiago+de+Chile,+Santiago+de+Chile+Platz,+70597+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#78C81B' }}>
                <div className="card-category">Visit</div>
                <div className="card-price" />
                <div className="card-description">
                  <h2>Markthalle</h2>
                  <div>
                    If you only visit one thing, go here if you love food.
                  </div>
                  <p>Dorotheenstraße 4, 70173 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Markthalle,+Dorotheenstraße+4,+70173+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#78C81B' }}>
                <div className="card-category">Visit</div>
                <div className="card-price" />
                <div className="card-description">
                  <h2>Fleemarket / Flohmarkt</h2>
                  <div>Every Saturday in the very city center.</div>
                  <p>Karlsplatz, 70173 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Fleemarket+/+Flohmarkt,+Karlsplatz,+70173+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div
                className="card"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/v1568709357/jeangelique.com/Bismarck_Turm.jpg')",
                }}
              >
                <div className="card-category">Visit</div>
                <div className="card-price" />
                <div className="card-description">
                  <h2>Bismarck Turm</h2>
                  <div>German tower with a great view from the top</div>
                  <p>Am Bismarckturm 35, 70192 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Bismarck+Turm,+Am+Bismarckturm+35,+70192+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#78C81B' }}>
                <div className="card-category">Visit</div>
                <div className="card-price" />
                <div className="card-description">
                  <h2>Karlshöhe</h2>
                  <div>
                    A park and vineyard in the middle of the city. With
                    beergarden!
                  </div>
                  <p>Humboldtstraße 44, 70178 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Karlshöhe,+Humboldtstraße+44,+70178+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#78C81B' }}>
                <div className="card-category">Visit</div>
                <div className="card-price" />
                <div className="card-description">
                  <h2>Bärensee</h2>
                  <div>
                    Three lakes in the forest. And a hunting castle where you
                    can have cake.
                  </div>
                  <p>Mahdentalstraße 14, 70569 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Bärensee,+Mahdentalstraße+14,+70569+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div
                className="card"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/v1568709355/jeangelique.com/Schloss_Solitude.jpg')",
                }}
              >
                <div className="card-category">Visit</div>
                <div className="card-price" />
                <div className="card-description">
                  <h2>Schloss Solitude</h2>
                  <div>The weekend castle of King Ludwig. Take bus 92.</div>
                  <p>Solitude 1, 70197 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Schloss+Solitude,+Solitude+1,+70197+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#78C81B' }}>
                <div className="card-category">Visit</div>
                <div className="card-price" />
                <div className="card-description">
                  <h2>Schlossplatz</h2>
                  <div>
                    Stuttgart's main square. With fountains. Super nice in the
                    sun.
                  </div>
                  <p>Schlossplatz, 70173 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Schlossplatz,+Schlossplatz,+70173+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div
                className="card"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/v1568709357/jeangelique.com/Stuttgart_Ballet.jpg')",
                  backgroundPosition: 'bottom',
                }}
              >
                <div className="card-category">Visit</div>
                <div className="card-price" />
                <div className="card-description">
                  <h2>Stuttgart Ballet</h2>
                  <div>
                    One of the best companies in the world. Buy tickets long in
                    advance.
                  </div>
                  <p>Oberer Schloßgarten 6, 70173 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Stuttgart+Ballet,+Oberer+Schloßgarten+6,+70173+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#78C81B' }}>
                <div className="card-category">Visit</div>
                <div className="card-price" />
                <div className="card-description">
                  <h2>TV tower</h2>
                  <div>
                    The world's first tower of concrete. Spectacular view.
                  </div>
                  <p>Jahnstraße 120, 70597 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//TV+tower,+Jahnstraße+120,+70597+Stuttgart"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div
                className="card"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/a_0/v1568709357/jeangelique.com/Library.jpg')",
                }}
              >
                <div className="card-category">Visit</div>
                <div className="card-price">Free</div>
                <div className="card-description">
                  <h2>Library</h2>
                  <div>
                    Great architecture (interior) and great rooftop terrace
                  </div>
                  <p>Mailänder Platz 1, 70173 Stuttgart</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Library,+Mailänder+Platz+1,+70173+Stuttgart"
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
