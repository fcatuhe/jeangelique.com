import React from 'react'

import Layout from '../components/layout'

const ParisPage = () => (
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
        <h2>Vendredi 31 mai 2019</h2>

        <h3 className="mt-5">
          15h00
          <br />
          Mairie du XI<sup>ème</sup>
        </h3>
        <p className="mb-1">
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

        <p className="mt-5 mb-0">
          Our greatest present is your attendance.
          <br />
          No gifts please. But we'll take your good mood!
        </p>
      </div>
    </div>

    <div className="pt-5 pb-4 bg-primary text-white">
      <div className="container text-center">
        <h2 className="mb-4">our pAris recommendations</h2>

        <div className="mb-4">
          <h3 className="mb-4">Où manger ?</h3>
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

            <div className="col-md-6 col-lg-4 mb-4">
              <div
                className="card"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/a_0/v1554646496/jeangelique.com/angelina_mont_blanc.jpg')",
                }}
              >
                <div className="card-category">Coffee</div>
                <div className="card-price">€€€</div>
                <div className="card-description">
                  <h2>Angelina</h2>
                  <div>
                    Ja teuer. Aber esst dort einen Mont blanc. Unvergesslich.
                  </div>
                  <p>rue de Rivoli 226, 75001 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Angelina,+rue+de+Rivoli+226,+75001+Paris"
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
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://freight.cargo.site/t/original/i/15db90611a9460a7e5175256e3dd981fd23447ae17eba23bc6e087a08f04a928/sette.jpg')",
                  backgroundPosition: 'bottom',
                }}
              >
                <div className="card-category">Restaurant</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Sette Pizza</h2>
                  <div>Amazing pizza and very cheap.</div>
                  <p>38 Rue du Faubourg Saint-Denis, 75002 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Sette+Pizza,+38+Rue+du+Faubourg+Saint-Denis,+75002+Paris"
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
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/v1554646498/jeangelique.com/blend.jpg')",
                  backgroundPosition: 'bottom',
                }}
              >
                <div className="card-category">Restaurant</div>
                <div className="card-price">€€</div>
                <div className="card-description">
                  <h2>Blend Burger</h2>
                  <div>Vegetarian choices. Sweet potato fries.</div>
                  <p>44 Rue d'Argout, 75002 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Blend+Burger,+44+Rue+d'Argout,+75002+Paris"
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
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://freight.cargo.site/t/original/i/fcd6990e9554bc63bb248437f68b8fe0caf0e64c28151c3dec8d2addbccc0412/petitmarche2.jpg')",
                }}
              >
                <div className="card-category">Restaurant</div>
                <div className="card-price">€€</div>
                <div className="card-description">
                  <h2>LE PETIT MARCHÉ</h2>
                  <div>Our Sunday restaurant. Paris flair, French fusion.</div>
                  <p>9 rue de Béarn, 75003 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//LE+PETIT+MARCHÉ,+9+rue+de+Béarn,+75003+Paris"
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
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/v1554646496/jeangelique.com/rosa_bonheur_sur_seine.jpg')",
                  backgroundPosition: 'bottom',
                }}
              >
                <div className="card-category">Bar</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Rosa Bonheurs sur Seine</h2>
                  <div>
                    Bar on a boat on the Seine. With view on Grand Palais.
                  </div>
                  <p>Port des Invalides, Quai d'Orsay, 75007 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Rosa+Bonheurs+sur+Seine,+Port+des+Invalides,+Quai+d'Orsay,+75007+Paris"
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
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/v1554646496/jeangelique.com/sebastian_gaudard_moussipountin.jpg')",
                  backgroundPosition: 'bottom',
                }}
              >
                <div className="card-category">Patisserie</div>
                <div className="card-price">€€</div>
                <div className="card-description">
                  <h2>Sébastien Gaudard</h2>
                  <div>Try the mussipontain. Delicieux!</div>
                  <p>22 Rue des Martyrs, 75009 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Sébastien+Gaudard,+22+Rue+des+Martyrs,+75009+Paris"
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
                  <h2>Le Mauri 7</h2>
                  <div>Leffe from the tap. Good Music</div>
                  <p>46 Rue du Faubourg Saint-Denis, 75010 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Le+Mauri+7,+46+Rue+du+Faubourg+Saint-Denis,+75010+Paris"
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
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://freight.cargo.site/t/original/i/d0dd5dac78bc1b419fdb0987a64bf53ba6e58c277b34db19144d1bc1c1a6f170/liberte2.jpg')",
                }}
              >
                <div className="card-category">Boulangerie</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Liberté</h2>
                  <div>
                    Dont leave Paris without having tried their pain au praliné
                  </div>
                  <p>39 Rue des Vinaigriers, 75010 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Liberté,+39+Rue+des+Vinaigriers,+75010+Paris"
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
                  <h2>Du pain et des idées</h2>
                  <div>Great baking (closed Sat/Sun)</div>
                  <p>34 Rue Yves Toudic, 75010 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Du+pain+et+des+idées,+34+Rue+Yves+Toudic,+75010+Paris"
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
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/a_0/v1554646496/jeangelique.com/cafe_caoua.jpg')",
                  backgroundPosition: 'bottom',
                }}
              >
                <div className="card-category">Breakfast</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Cafe Caoua</h2>
                  <div>Avocado Burger! Next to Canal St. Martin.</div>
                  <p>98 Quai de Jemmapes, 75010 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Cafe+Caoua,+98+Quai+de+Jemmapes,+75010+Paris"
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
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://freight.cargo.site/t/original/i/8cde216672726ee9ddb87726c4ec281045f8eb287c8c4311f34d705f72dc24d5/tenbelles.jpg')",
                }}
              >
                <div className="card-category">Coffee</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Ten belles</h2>
                  <div>Very good coffee!</div>
                  <p>10 Rue de la Grange aux Belles, 75010 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Ten+belles,+10+Rue+de+la+Grange+aux+Belles,+75010+Paris"
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
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://freight.cargo.site/t/original/i/7b38e7f9f6896e88c701beb2a9c1b57c9100ab56577ec87427fb9c8dc5a55c7f/muniyandivilas.jpg')",
                  backgroundPosition: 'bottom',
                }}
              >
                <div className="card-category">Restaurant</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Muniyandi Vilas</h2>
                  <div>
                    Indian and authentic. Best vegetarian. Jens loves it.
                  </div>
                  <p>207 Rue du Faubourg Saint-Denis, 75010 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Muniyandi+Vilas,+207+Rue+du+Faubourg+Saint-Denis,+75010+Paris"
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
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://freight.cargo.site/t/original/i/4e52e19d2fdfdf40b51d19df01587a94d0162cd39a663a39c001133c38c177cd/nanashi.jpg')",
                  backgroundPosition: 'bottom',
                }}
              >
                <div className="card-category">Restaurant</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Nanashi</h2>
                  <div>Asian bento box style. Vegetarian choices.</div>
                  <p>31 Rue de Paradis, 75010 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Nanashi,+31+Rue+de+Paradis,+75010+Paris"
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
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/v1554646496/jeangelique.com/comptoir_general.jpg')",
                  backgroundPosition: 'bottom',
                }}
              >
                <div className="card-category">Bar</div>
                <div className="card-price">€€</div>
                <div className="card-description">
                  <h2>Le Comptoir Général</h2>
                  <div>Colonial style. Institution and nice to see.</div>
                  <p>80 Quai de Jemmapes, 75010 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Le+Comptoir+Général,+80+Quai+de+Jemmapes,+75010+Paris"
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
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://freight.cargo.site/t/original/i/8cb0120f7946515e1362a7235944937711971c73a95a8606b265f249035fdddd/saam1.jpg')",
                }}
              >
                <div className="card-category">Restaurant</div>
                <div className="card-price">€€</div>
                <div className="card-description">
                  <h2>SAaM</h2>
                  <div>
                    Our favorite Korean. Delicious peanut soy aubergines!
                  </div>
                  <p>59Bis Rue de Lancry, 75010 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//SAaM,+59Bis+Rue+de+Lancry,+75010+Paris"
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
                  <h2>Les Enfants Perdus</h2>
                  <div>Good French cuisine, a bit pricey.</div>
                  <p>9 Rue des Récollets, 75010 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Les+Enfants+Perdus,+9+Rue+des+Récollets,+75010+Paris"
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
                  <h2>Utopie</h2>
                  <div>Delicieux: Petit pain au charbon végétal</div>
                  <p>20 Rue Jean-Pierre Timbaud, 75011 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Utopie,+20+Rue+Jean-Pierre+Timbaud,+75011+Paris"
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
                  <h2>Bakery Ten belles</h2>
                  <div>Nice snacks. Good coffee.</div>
                  <p>17-19 Rue Breguet, 75011 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Bakery+Ten+belles,+17-19+Rue+Breguet,+75011+Paris"
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
                  <h2>Arômes Coffeeshop</h2>
                  <div>Great coffee</div>
                  <p>86 Avenue Parmentier, 75011 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Arômes+Coffeeshop,+86+Avenue+Parmentier,+75011+Paris"
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
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://freight.cargo.site/t/original/i/d13551330650f0b39c0077ff0c34fb3119748e03d22edcd0e7c9c4525d24ae0d/canonniere.jpg')",
                }}
              >
                <div className="card-category">Wine bar</div>
                <div className="card-price">€€</div>
                <div className="card-description">
                  <h2>La Cannoniere</h2>
                  <div>A beautiful wine bar with nice lunches</div>
                  <p>57 Rue de la Fontaine au Roi, 75011 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//La+Cannoniere,+57+Rue+de+la+Fontaine+au+Roi,+75011+Paris"
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
                  <h2>Au virage Lepic</h2>
                  <div>Cozy bistrot. French classic.</div>
                  <p>61 Rue Lepic, 75018 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Au+virage+Lepic,+61+Rue+Lepic,+75018+Paris"
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
                  <h2>Rosa Bonheur</h2>
                  <div>
                    In a park called Buttes Chaumont. Nothing but great.
                  </div>
                  <p>2 Avenue de la Cascade, 75019 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Rosa+Bonheur,+2+Avenue+de+la+Cascade,+75019+Paris"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <h3 className="mb-4">Que voir ?</h3>
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

            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#78C81B' }}>
                <div className="card-category">Visit</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Marché des enfants rouges</h2>
                  <div>Wonderful place to stroll. And eat.</div>
                  <p>39, rue de Bretagne, 75003 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Marché+des+enfants+rouges,+39,+rue+de+Bretagne,+75003+Paris"
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
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/v1554646497/jeangelique.com/place_de_la_contrescarpe.jpg')",
                }}
              >
                <div className="card-category">Visit</div>
                <div className="card-price">free</div>
                <div className="card-description">
                  <h2>Place de la Contrescarpe</h2>
                  <div>Hemingway's HQ.</div>
                  <p>Rue Mouffetard, 75005 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Place+de+la+Contrescarpe,+Rue+Mouffetard,+75005+Paris"
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
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/v1554646496/jeangelique.com/jardin_luxembourg.jpg')",
                }}
              >
                <div className="card-category">Visit</div>
                <div className="card-price">free</div>
                <div className="card-description">
                  <h2>Jardin du Luxembourg</h2>
                  <div>Pure Paris.</div>
                  <p>Jardin du Luxembourg, 75006 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Jardin+du+Luxembourg,+75006+Paris"
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
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://freight.cargo.site/t/original/i/dcb5c0a514f140bdbc92b686dee208e366736f5c29284a178452b3a2bab3fe39/rodin1.jpg')",
                }}
              >
                <div className="card-category">Museum</div>
                <div className="card-price">€</div>
                <div className="card-description">
                  <h2>Musée Rodin</h2>
                  <div>Wonderful statues in the park. Must.</div>
                  <p>77 Rue de Varenne, 75007 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Musée+Rodin,+77+Rue+de+Varenne,+75007+Paris"
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
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/a_0/v1554646497/jeangelique.com/petit_palais.jpg')",
                }}
              >
                <div className="card-category">Museum</div>
                <div className="card-price">free</div>
                <div className="card-description">
                  <h2>Petit Palais</h2>
                  <div>
                    Free entry art. And a calm cafe in the middle of great work
                  </div>
                  <p>Avenue Winston Churchill, 75008 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Petit+Palais,+Avenue+Winston+Churchill,+75008+Paris"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#78C81B' }}>
                <div className="card-category">Visit</div>
                <div className="card-price">free</div>
                <div className="card-description">
                  <h2>Terrasse des Galeries Lafayette Haussmann</h2>
                  <div>
                    Go to the very top to have a great terrace view. Dont miss
                    the interior of the dome.
                  </div>
                  <p>40 Boulevard Haussmann, 75009 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Terrasse+des+Galeries+Lafayette+Haussmann,+40+Boulevard+Haussmann,+75009+Paris"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ backgroundColor: '#78C81B' }}>
                <div className="card-category">Visit</div>
                <div className="card-price">free</div>
                <div className="card-description">
                  <h2>Rue des Martyrs</h2>
                  <div>
                    Stroll this typical Parisian street with food shops.
                  </div>
                  <p>Rue des Martyrs, 75009 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Rue+des+Martyrs,+Rue+des+Martyrs,+75009+Paris"
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
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/a_0/v1554646496/jeangelique.com/canal_st_martin.jpg')",
                }}
              >
                <div className="card-category">Visit</div>
                <div className="card-price">free</div>
                <div className="card-description">
                  <h2>Canal St. Martin</h2>
                  <div>Buy a beer, baguette, fromage. Enjoy the sun.</div>
                  <p>Quai de Jemmapes, 75010 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Canal+St.+Martin,+Quai+de+Jemmapes,+75010+Paris"
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
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/a_0/v1554646496/jeangelique.com/marche_daligre.jpg')",
                }}
              >
                <div className="card-category">Visit</div>
                <div className="card-price">free</div>
                <div className="card-description">
                  <h2>Marché d'Aligre</h2>
                  <div>
                    Green market. An institution where we went every Saturday.
                  </div>
                  <p>Rue d'Aligre et, Place d'Aligre, 75012 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Marché+d'Aligre,+Rue+d'Aligre+et,+Place+d'Aligre,+75012+Paris"
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
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/v1554646496/jeangelique.com/fondation_louis_vuitton.jpg')",
                  backgroundPosition: 'bottom',
                }}
              >
                <div className="card-category">Museum</div>
                <div className="card-price">€€</div>
                <div className="card-description">
                  <h2>Fondation Louis Vuitton</h2>
                  <div>Beautiful building, great views.</div>
                  <p>8 Avenue du Mahatma Gandhi, 75016 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Fondation+Louis+Vuitton,+8+Avenue+du+Mahatma+Gandhi,+75016+Paris"
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
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://freight.cargo.site/t/original/i/366130ed38db8b18ff6cba8fb1559967cf406bb5903270a322f79477df19399d/montmartre1.jpg')",
                }}
              >
                <div className="card-category">Visit</div>
                <div className="card-price">free</div>
                <div className="card-description">
                  <h2>Basilique du Sacré-Cœur</h2>
                  <div>Maybe this is where we decided to marry?</div>
                  <p>35 Rue du Chevalier de la Barre, 75018 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Basilique+du+Sacré-Cœur,+35+Rue+du+Chevalier+de+la+Barre,+75018+Paris"
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
                    "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/jeangelique/image/upload/v1554646497/jeangelique.com/buttes_chaumant.jpg')",
                }}
              >
                <div className="card-category">Visit</div>
                <div className="card-price">free</div>
                <div className="card-description">
                  <h2>Parc des Buttes-Chaumont</h2>
                  <div>
                    Stroll, Pic nic, jogging or to Rosa Bonheur. Go there!
                  </div>
                  <p>1 Rue Botzaris, 75019 Paris</p>
                </div>
                <a
                  className="card-link"
                  href="https://www.google.com/maps/dir//Parc+des+Buttes-Chaumont,+1+Rue+Botzaris,+75019+Paris"
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
          title="parisMap"
          src="https://www.google.com/maps/d/embed?mid=1q5fwiViHLpTl1IKzz7JTqC7Ag8uWLno7"
          frameBorder="0"
          className="w-100 h-90vh"
        />
      </div>
    </div>

    <div className="py-5 bg-primary text-white">
      <div className="container text-center">
        <h3>Des questions ?</h3>
        <p className="h5 mb-0">Ecrivez-nous : oui @ jeangelique.com</p>
      </div>
    </div>
  </Layout>
)

export default ParisPage
