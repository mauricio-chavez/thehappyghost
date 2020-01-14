import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "../styles/bulma.scss"
import "../styles/layout.scss"
import "../styles/main.scss"

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="Header__content-container">
        <div className="Header__tabs tabs is-centered">
          <ul>
            <li>
              <a href="#about">Inicio</a>
            </li>
            <li>
              <a href="#services">Servicios</a>
            </li>
            <li>
              <a>Stack</a>
            </li>
            <li>
              <a>Contacto</a>
            </li>
          </ul>
        </div>

        <main>{children}</main>

        <footer className="footer has-text-centered">
          © {new Date().getFullYear()}, Hecho con 💖 por
          {` `}
          <a href="https://twitter.com/ultr4nerd">@ultr4nerd</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
