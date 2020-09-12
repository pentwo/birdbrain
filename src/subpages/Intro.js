import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import BackgroundImage from "gatsby-background-image"

export default function Intro() {
  const query = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "office.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      id="intro"
      className="container-fluid d-flex justify-content-center align-items-center"
      fluid={query.file.childImageSharp.fluid}
      style={{
        width: "100%",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        paddingBottom: "5rem",
        paddingTop: "5rem",
      }}
    >
      <div
        className="text"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          borderRadius: "5px",
          width: "60vw",
          padding: " 1rem",
          fontSize: "1.2rem",
          textAlign: "center",
        }}
      >
        <p>
          <h3>We’re BirdBrain</h3>A Digital Agency that offers the complete
          suite of digital services - Branding, Design, Development, Search
          Engine Optimisation and Digital Marketing.
        </p>
        <p style={{ marginBottom: "0" }}>
          We create quality websites and apps. Our websites are bespoke
          front-ends, the digital faces of businesses. Our apps range from
          peer-to-peer sharing platforms, to business tools, to booking engines.
        </p>
      </div>
    </BackgroundImage>
  )
}
