import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Hero = styled.section`
  background-color: #f37748;
  color: white;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 2rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const AboutImage = styled.div`
  padding: 1em;
`

const AboutImages = styled.div`
  display: flex;
`

const Title = styled.h2`
  font-size: clamp(1.5rem, -0.875rem + 8.333vw, 4.5rem);
  font-weight: 700;
  margin-bottom: 2rem;
  color: #067bc2;
`

const Text = styled.p`
  font-size: clamp(0.8rem, -0.7rem + 3.333vw, 1.5rem);
  margin-bottom: 3rem;
  line-height: 1.4;
  max-width: 50ch;
`

const SectionFour = ({ props }) => {
  return (
    <>
      <Hero>
        <AboutImage>
          <StaticImage
            src="../../images/about-vicu.jpeg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Vicu Villanueva"
            style={{ width: "90%", borderRadius: "50%" }}
          />
        </AboutImage>
        <div>
          <Title id="about">Acerca de Vicu</Title>
          <Text>
            Me llamo Victoria Villanueva pero me dicen Vicu, quizás me conozcas
            de distintos lugares de internet como YouTube - donde me hice viral
            con un video sobre las princesas de Disney-, o mi Instagram donde
            comparto ideas sobre activismo, arte y creatividad. Este proyecto,
            Activación Creativa, nació el 2016 cuando estaba trabajando en una
            oficina y pregunté en mi Facebook si a alguien más le serviría
            juntarnos a pensar colectivamente nuestros procesos creativos, a
            explorar y compartir.
          </Text>
          <Text>
            La convocatoria resonó y a partir de ahí realicé talleres, charlas,
            videos y escritos sobre creatividad, deviniendo en lo que hoy llamo
            Activación Creativa. La idea de este proyecto es proveer un espacio
            seguro para explorar la creatividad en todas sus formas, fuera de
            los parámetros “productivos” que se le imponen a las prácticas
            expresivas. Es decir, una verdadera revolución creativa. Amo este
            proyecto y me hace muy feliz compartir esto con el mundo.{" "}
          </Text>
        </div>
        <AboutImages>
          <StaticImage
            src="../../images/about-vicu-01.jpeg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Vicu Villanueva"
            style={{ width: "30%" }}
          />
          <StaticImage
            src="../../images/about-vicu-01.jpeg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Vicu Villanueva"
            style={{ width: "30%", filter: "grayscale(100%)" }}
          />
          <StaticImage
            src="../../images/about-vicu-01.jpeg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Vicu Villanueva"
            style={{ width: "30%", filter: "invert(100%)" }}
          />
        </AboutImages>
      </Hero>
    </>
  )
}

SectionFour.propTypes = {}

export default SectionFour
