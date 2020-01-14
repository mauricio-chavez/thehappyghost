import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>¡No lo hemos encontrado!</h1>
    <p>La ruta que buscabas no existe... Estamos muy apenados</p>
  </Layout>
)

export default NotFoundPage
