import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Hero = styled.section`
  background-color: #067bc2;
  color: white;
  padding: 2rem;
`

const Title = styled.h2`
  font-size: clamp(1.5rem, -0.875rem + 8.333vw, 4.5rem);
  font-weight: 700;
  margin-bottom: 2rem;
`

const Text = styled.p`
  font-size: clamp(1rem, -0.7rem + 3.333vw, 1.5rem);
  margin-bottom: 3rem;
  line-height: 1.4;
  max-width: 50ch;
`

const SectionFive = ({ props }) => {
  return (
    <>
      <Hero>
        <Title id="about">Comunidad</Title>
        <Text>Nuestra red social colaborativa está en construcción</Text>
      </Hero>
    </>
  )
}

SectionFive.propTypes = {}

export default SectionFive
