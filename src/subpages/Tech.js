import React from "react"
import TechItem from "../components/TechItem"
import { useStaticQuery, graphql } from "gatsby"

import BackgroundImage from "gatsby-background-image"

export default function Tech() {
  const { allTechYaml, file } = useStaticQuery(graphql`
    {
      allTechYaml {
        edges {
          node {
            title
            src
            describe
          }
        }
      }
      file(relativePath: { eq: "code.jpg" }) {
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
      id="tech"
      fluid={file.childImageSharp.fluid}
      className="container-fluid py-3 text-center d-flex flex-column align-items-center "
      style={{}}
    >
      <h2 className="text-center my-5">Tech we use</h2>
      <p>
        Our technology is primarily built in <strong>React</strong> (extending
        to <strong>React Native</strong>).
        <br />
        Where the projects involves a <strong>Content Management System</strong>
        (CMS)
        <br />
        we use <strong>WordPress</strong>, <strong>WooCommerce</strong> and{" "}
        <strong>Shopify</strong>.
      </p>
      <div className="row mt-3" style={{ maxWidth: "960px" }}>
        {allTechYaml.edges.map(({ node }) => {
          return (
            <TechItem
              title={node.title}
              src={node.src}
              describe={node.describe}
            />
          )
        })}
      </div>
    </BackgroundImage>
  )
}
