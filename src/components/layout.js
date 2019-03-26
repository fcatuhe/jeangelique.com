import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import classNames from 'classnames'

import SEO from './seo'

import '../styles/index.scss'
import '@fortawesome/fontawesome-free/css/all.css'

const Layout = ({ children, className, skipContainer }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO />
        <main className={classNames(className, { container: !skipContainer })}>
          {children}
        </main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
