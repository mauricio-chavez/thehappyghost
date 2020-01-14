import React from "react"
import { Link } from "gatsby"

import logo from "../images/sized_logo.png"

const Header = () => (
  <header
    style={{
      background: "black",
      textAlign: "center",
      marginBottom: "1.235rem",
      padding: "",
    }}
  >
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <img src={logo} alt="Logo" height={100} style={{ margin: `1rem auto` }} />
    </Link>
  </header>
)

export default Header
