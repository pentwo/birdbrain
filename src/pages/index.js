import React from "react"
import "../global.css"
import LandingPage from "../subpages/LandingPage"
import Intro from "../subpages/Intro"

import Benefits from "../subpages/Benefits"
import Tech from "../subpages/Tech"

import End from "../subpages/End"
import Footer from "../components/Footer"

function Index() {
  return (
    <div>
      <LandingPage />
      <Intro />
      <Benefits />
      <Tech />
      <End />
      <Footer />
    </div>
  )
}

export default Index
