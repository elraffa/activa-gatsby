import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Hero = styled.section`
  background-color: rgba(230, 97, 127, 1);
  color: white;
  padding: 2rem;
  display: flex;
  gap: 2rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Title = styled.h1`
  font-size: clamp(2rem, -0.875rem + 8.333vw, 5.5rem);
  font-weight: 700;
  line-height: 1;
  margin-bottom: 2rem;
`

const Text = styled.p`
  font-size: clamp(1rem, -0.7rem + 3.333vw, 1.5rem);
  margin-bottom: 3rem;
  line-height: 1.4;
  max-width: 50ch;

  @media only screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

const SectionOne = ({ props }) => {
  return (
    <>
      <Hero>
        <div>
          <Title>Activación Creativa</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            excepturi iste reiciendis tenetur voluptatibus, ex veniam itaque
            aspernatur illo distinctio? Eveniet, blanditiis! Modi, eaque minus.
            Ducimus nisi, porro commodi minima recusandae, error sunt ad fugit
            numquam deserunt accusantium atque unde.
          </Text>
        </div>
        <StaticImage
          src="../../images/flyer-ac-abril-square.png"
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
