import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionOne from "../components/sections/SectionOne"
import SectionTwo from "../components/sections/SectionTwo"
import SectionThree from "../components/sections/SectionThree"
import SectionFour from "../components/sections/SectionFour"
import SectionFive from "../components/sections/SectionFive"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
  </Layout>
)

export default IndexPage
