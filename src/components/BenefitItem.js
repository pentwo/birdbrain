import React from "react"
import Fade from "react-reveal/Fade"

function BenefitsItem({ src, title, describe }) {
  return (
    <Fade left>
      <div
        className="col-12 col-md-6"
        style={{
          display: "flex",
          alignItems: "center",

          padding: "1rem",
        }}
      >
        <img
          src={src}
          className="m-3"
          width="100px"
          height="100px"
          alt={title}
        />
        <div className="text">
          <h3>{title}</h3>
          <p>{describe}</p>
        </div>
      </div>
    </Fade>
  )
}

export default BenefitsItem
