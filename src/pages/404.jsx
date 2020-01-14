import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: No Encontrado" />
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">¡Lo sentimos!</h1>
          <h2 className="subtitle">
            La ruta que buscabas no existe... Estamos muy apenados
          </h2>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
