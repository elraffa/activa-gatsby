import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Hero = styled.section`
  background-color: rgba(230, 97, 127, 1);
  color: white;
  padding: 2rem;
`

const Title = styled.h1`
  font-size: clamp(2rem, -0.875rem + 8.333vw, 5.5rem);
  font-weight: 700;
  border-bottom: 1px solid white;
  margin-bottom: 2rem;
`

const SectionOne = ({ props }) => {
  return (
    <>
      <Hero>
        <Title>Activación Creativa</Title>
        <StaticImage
          src="../../images/flyer-ac-abril-2021.png"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Activación Creativa en Abril"
          style={{ margin: `1.45rem auto` }}
        />
      </Hero>
    </>
  )
}

SectionOne.propTypes = {}

export default SectionOne
