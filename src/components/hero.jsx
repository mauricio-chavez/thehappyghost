import React from "react"

import "../styles/hero.scss"

const Hero = () => (
  <section className="hero" id="about">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">{"{"} Software hecho a mano y con amor {"}"}</h1>
        <p className="Hero__description subtitle">
          En <strong>The Happy Ghost</strong> creemos que la calidad es clave
          para crear productos con valor para nuestros clientes, es por eso que
          usamos un stack de tecnologías vanguardistas y entregamos siempre la
          mejor experiencia.
        </p>
      </div>
    </div>
  </section>
)

export default Hero
