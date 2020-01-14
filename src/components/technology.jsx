import React from "react"

const Technology = ({ image, name }) => (
  <div className="column is-narrow">
    <img className="Stack__image" data-tip={name} src={image} alt={name} />
  </div>
)

export default Technology
