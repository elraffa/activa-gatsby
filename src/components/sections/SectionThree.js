import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Hero = styled.section`
  background-color: #7365aa;
  color: white;
  padding: 2rem;
`

const Title = styled.h2`
  font-size: clamp(1.5rem, -0.875rem + 8.333vw, 4.5rem);
  font-weight: 700;
  margin-bottom: 2rem;
`

const Text = styled.p`
  font-size: clamp(0.8rem, -0.7rem + 3.333vw, 1.5rem);
  margin-bottom: 3rem;
  line-height: 1.4;
  max-width: 50ch;
`

const SectionThree = ({ props }) => {
  return (
    <>
      <Hero>
        <Title id="actividades">Actividades</Title>
        <Text>
          Activación Creativa realiza seminarios y talleres que consisten en la
          exploración de las prácticas creativas, sus procesos y devenires. En
          cada seminario se trata un tema particular relacionado al universo de
          la creatividad, y en los talleres se trabaja con materiales,
          actividades y dinámicas grupales para desbloquear, potenciar y
          comprender los propios procesos creativos y lograr una expresión
          sensible más poderosa y libre. .{" "}
        </Text>
      </Hero>
    </>
  )
}

SectionThree.propTypes = {}

export default SectionThree
