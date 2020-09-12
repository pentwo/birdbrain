import React from "react"
import BenefitItem from "../components/BenefitItem"
import { useStaticQuery, graphql } from "gatsby"

export default function Benefits() {
  const { allBenefitsYaml } = useStaticQuery(graphql`
    {
      allBenefitsYaml {
        edges {
          node {
            title
            src
            describe
          }
        }
      }
    }
  `)

  return (
    <div
      className="why-birdbrain container-fluid py-3"
      id="benefits"
      style={{ maxWidth: "960px" }}
    >
      <h3 className="text-center">
        BirdBrain is an ideal place to cultivate your craft as a web developer.
      </h3>
      <div className="row">
        {allBenefitsYaml.edges.map(({ node }) => {
          return (
            <BenefitItem
              title={node.title}
              src={node.src}
              describe={node.describe}
            />
          )
        })}
      </div>
    </div>
  )
}
