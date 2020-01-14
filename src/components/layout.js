import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

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
      <div
        style={{
          margin: `0`,
          borderRadius: "20px 20px 0 0",
          backgroundColor: 'white',
          // maxWidth: 960,
          // padding: `100rem auto`,
          padding: `30px 50px`,
          height: '100vh'
        }}
      >
        <main>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, Hecho con 💖 por 
          {` `}
          <a href="https://twitter.com/ultr4nerd">@ultr4nerd</a>
        </footer> */}
      </div>
    </>
  )
}



export default Layout
