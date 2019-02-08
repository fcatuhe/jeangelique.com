import React from 'react'

import Layout from '../components/layout'

const CatuheFamilyPage = () => (
  <Layout>
    <h1>Bonjour Famille Catuhe</h1>
    <p>Bienvenue à notre mariage</p>
    <a
      href='https://docs.google.com/forms/d/e/1FAIpQLSdp_boq7LWktFJiG4E1yjVbDK5u_9pA0QcsvmcEGYbIf7bu5Q/viewform?usp=sf_link'
      target='_blank'
    >
      RSVP
    </a>
    <iframe
      src='https://www.google.com/maps/d/embed?mid=16ZyVoWzt73UBOEI0DYS-17AYw1LjJlU7'
      width='1024'
      height='480'
    />
  </Layout>
)

export default CatuheFamilyPage
