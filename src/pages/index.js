import * as React from "react"
import Layout from "../components/layout"

import Hero from "../components/Hero"
import Trips from '../components/Trips'
import Testimonials from "../components/Testimonials"
import Stats from '../components/Stats';
import Email from "../components/Email"
// markup
const IndexPage = () => {
  return <Layout>
    <Hero />
    <Trips heading="Our favorite Destinations" />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
}

export default IndexPage


