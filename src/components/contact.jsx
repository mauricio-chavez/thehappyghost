import React from "react"

import whatsApp from "../images/contact/wa.png"
import email from "../images/contact/mail.png"

import "../styles/contact.scss"

const Contact = () => (
  <section className="section" id="contact">
    <div className="container has-text-centered">
      <h1 className="title section-title">
        {"{"} Contacto {"}"}
      </h1>
      <div className="Contact__columns columns is-mobile">
        <div className="column is-narrow">
          <a href="https://wa.me/5215517305373/">
            <img
              className="Contact__image"
              src={whatsApp}
              alt="Enviar WhatsApp"
            />
          </a>
        </div>
        <div className="column is-narrow">
          <a href="mailto:mauriciochavez@ciencias.unam.mx?Subject=Contacto%20The%20Happy%20Ghost">
            <img className="Contact__image" src={email} alt="Enviar correo" />
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
