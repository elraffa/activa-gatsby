/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyle from "../theme/GlobalStyle"
import "@fontsource/raleway"

import Header from "./header"
// import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer
          style={{
            padding: `1rem`,
            background: `black`,
            color: `white`,
            textAlign: `right`,
          }}
        >
          © {new Date().getFullYear()}, Diseño y Desarrollo:
          {` `}
          <a
            style={{ color: "white", fontWeight: "700" }}
            href="https://www.mktdigitalideas.com"
          >
            MKTDigital Ideas
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
