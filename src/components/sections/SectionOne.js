import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import Button from "../ui/Button"

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

const Buttons = styled.div`
  display: flex;
  @media only screen and (max-width: 768px) {
    justify-content: space-between;
  }
`

const SectionOne = ({ props }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "PDF-Curso-AC" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <>
      <Hero>
        <div>
          <div>
            <Title>Esto es Activación Creativa</Title>
            <Text>
              Somos una comunidad en busca de una creatividad rebelde. Ideas,
              talleres, seminarios y reflexiones para construir una relación
              propia con nuestro poder creativo. ¡Qué bueno que estés acá!
            </Text>
          </div>
          <Buttons>
            <Button
              buttonText="Inscribite"
              buttonLink="https://forms.gle/tyXu3boRHFySwy6a9"
            />
            {data.allFile.edges.map((file, index) => {
              return (
                <Button
                  buttonText="Más info"
                  buttonLink={file.node.publicURL}
                />
              )
            })}
          </Buttons>
        </div>
        <StaticImage
          src="../../images/flyer-junio.png"
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
