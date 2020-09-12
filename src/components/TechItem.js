import React from "react"
import Fade from "react-reveal/Fade"

function TechItem({ src, title, describe }) {
  return (
    <Fade bottom>
      <div className="col-12 col-md-6 my-3">
        <img src={src} className="img-fluid " width="120px" alt={title} />
        <h4 className="mt-2">{title}</h4>
        <p>{describe}</p>
      </div>
    </Fade>
  )
}

export default TechItem
