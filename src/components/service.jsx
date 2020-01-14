import React from "react"

import "../styles/service.scss"

const Service = ({ serviceImage, title, description }) => (
  <div className="Service__service column card">
    <div className="columns card-content">
      <div className="column is-narrow">
        <img
          className="Service__image rotate-center"
          src={serviceImage}
          alt={title}
        />
      </div>
      <div className="Service__info column is-centered">
        <div className="container">
          <h2 className="Service__title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  </div>
)

export default Service
