import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Services from "../components/services"
import Stack from "../components/stack"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <Hero />
    <Services />
    <Stack />
    <Contact />
  </Layout>
)

export default IndexPage
