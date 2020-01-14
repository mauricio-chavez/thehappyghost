import React from "react"
import { Link } from "gatsby"

import logo from "../images/sized_logo.png"

const Header = () => (
  <header className="Header__header">
    <Link className="Header__link" to="/">
      <img className="Header__image" src={logo} alt="The Happy Ghost Logo" />
    </Link>
  </header>
)

export default Header
