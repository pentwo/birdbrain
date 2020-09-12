import React from "react"
import Fade from "react-reveal/Fade"

export default function End() {
  return (
    <div
      id="contact"
      className="container-fluid py-3 d-flex flex-column align-items-center"
      style={{ backgroundColor: "#7E57C2", color: "white" }}
    >
      <div className="" style={{ maxWidth: "960px" }}>
        <Fade left>
          <h1 className="text-center my-5">Stay in touch</h1>
          <p className="the-challenge">
            If this sounds like the right place for you, <strong>Fork</strong>{" "}
            <a href="https://codepen.io/BirdBrain/pen/rovYBo">this Pen</a> and
            style it up!
          </p>
          <p className="the-challenge-more">
            No rules - complete creative agency. Maybe you'll give it slick
            corporate vibes, edgy hipster grunge, or out of this world science
            fiction grandeur.
          </p>
          <p>
            Once you're happy with your Pen, send it in an e-mail, along with
            your CV, portfolio, CodePen, GitHub to{" "}
            <a href="mailto:david@birdbrain.com.au">david@birdbrain.com.au</a>
          </p>
        </Fade>
      </div>
    </div>
  )
}
