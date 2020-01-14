import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <article style={{padding: '1.235rem auto'}}>
      <h1>¡Bienvenido a mi estudio!</h1>
      <p>
        Estamos construyendo algo increíble...
      </p>
    </article>
  </Layout>
)

export default IndexPage
