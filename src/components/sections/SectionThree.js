import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Hero = styled.section`
  background-color: #7365aa;
  color: white;
  padding: 2rem;
  display: flex;
  gap: 4rem;
  flex-direction: row;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const Title = styled.h2`
  font-size: clamp(1.5rem, -0.875rem + 8.333vw, 4.5rem);
  font-weight: 700;
  margin-bottom: 2rem;
`

const Text = styled.p``

const ActivitImages = styled.div`
  flex-grow: 4;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`

const SectionThree = ({ props }) => {
  return (
    <>
      <Hero>
        <ActivitImages>
          <StaticImage
            src="../../images/taller-01.jpg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Vicu Villanueva"
          />
          <StaticImage
            src="../../images/taller-02.jpg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Vicu Villanueva"
          />
          <StaticImage
            src="../../images/taller-03.jpg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Vicu Villanueva"
          />
        </ActivitImages>
        <div>
          <Title id="actividades">Actividades</Title>
          <Text className="main-text">
            Realizamos seminarios y talleres que exploran distintas prácticas
            creativas, sus procesos y devenires. El próximo taller será vía Zoom
            los jueves 10/6, 17/6, 24/6 y 1/7, de 18hs a 20hs. y la propuesta es
            "La Creatividad No-Productiva".
          </Text>
        </div>
      </Hero>
    </>
  )
}

SectionThree.propTypes = {}

export default SectionThree
