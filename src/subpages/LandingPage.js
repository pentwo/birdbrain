import React from "react"
import Navbar from "../components/Navbar"
import { useStaticQuery, graphql } from "gatsby"

import AnchorLink from "react-anchor-link-smooth-scroll"

function LandingPage() {
  const { pageDataYaml } = useStaticQuery(graphql`
    {
      pageDataYaml {
        welcomeText
        landingText
      }
    }
  `)

  const { welcomeText, landingText } = pageDataYaml

  const pageStyle = {
    backgroundImage:
      "url(https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?crop=entropy&cs=srgb&dl=pexels-kun-fotografi-1230302.jpg&fit=crop&fm=jpg&h=650&w=940)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backgroundBlendMode: "multiply",
  }

  return (
    <section id="home" style={pageStyle} className="container-fluid">
      <div className="container">
        <Navbar />
        <div className="centerItems">
          <h6>{landingText}</h6>
          <h1>{welcomeText}</h1>
          <AnchorLink
            href="#intro"
            style={{
              width: "200px",
              padding: "10px",
              border: "none",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              background: "#FFA800",
              borderRadius: "5px",
              textAlign: "center",
              textTransform: "uppercase",
              textDecoration: "none",
              fontWeight: "600",
              color: "white",
              marginTop: "20px",
            }}
          >
            Learn more
          </AnchorLink>
        </div>
      </div>
    </section>
  )
}

export default LandingPage
