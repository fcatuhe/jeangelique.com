import React from 'react'

import Layout from '../components/layout'

const ParisPage = () => (
  <Layout>
    <h1>Hello Paris!</h1>
    <p>Welcome to our wedding</p>
    <iframe
      title="parisMap"
      src="https://www.google.com/maps/d/embed?mid=1q5fwiViHLpTl1IKzz7JTqC7Ag8uWLno7"
      frameborder="0"
      className="w-100"
      height="480"
    />
  </Layout>
)

export default ParisPage
