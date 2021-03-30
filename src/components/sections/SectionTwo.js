import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import SignupBg from "../../images/signup-bg.jpg"

const Hero = styled.section`
  background-color: #97b9a3;
  color: white;
  padding: 2rem;
  position: relative;
  z-index: 4;
  display: flex;
  flex-direction: row;
  gap: 3rem;
`
const Title = styled.h2`
  font-size: clamp(1.5rem, -0.875rem + 8.333vw, 4.5rem);
  font-weight: 700;
  margin-bottom: 2rem;
`
const Text = styled.p`
  font-size: clamp(0.8rem, -0.7rem + 3.333vw, 1.5rem);
  margin-bottom: 3rem;
  max-width: 50ch;
  line-height: 1.4;
  z-index: 4;
`
const BackgroundImage = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -2;

  /* @media only screen and (max-width: 768px) {
    display: none;
  } */
`

const Email = styled.input`
  width: 60%;
  height: 58px;
  font-size: clamp(0.8rem, -0.7rem + 3.333vw, 1.5rem);
  color: $color1;
  text-indent: 20px;
  font-family: inherit;
`
const Submit = styled.input`
  width: 40%;
  border: 0px;
  height: 58px;
  background-color: rgba(230, 97, 127);
  color: #fff;
  font-size: clamp(0.8rem, -0.7rem + 3.333vw, 1.5rem);
  cursor: pointer;
  font-family: inherit;

  &:hover {
    background-color: $color5;
  }
`

const SectionTwo = ({ props }) => {
  return (
    <>
      <Hero>
        <div style={{ marginBottom: "24rem" }}>
          <Title id="subscribe">Suscribite</Title>
          <Text>
            Dejá tu mail acá para recibir mucho material y explorar tu
            creatividad en tu casilla de mail. Es gratis y vas a recibir tips,
            herramientas, videos, textos y mucho más.{" "}
          </Text>

          <form
            action="https://activacioncreativa.us19.list-manage.com/subscribe/post?u=31518d0d4d8715503fb443c93&amp;id=fc811d383d"
            method="POST"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div class="form-group">
              <Email
                type="email"
                //   value=""
                name="EMAIL"
                // class="required email"
                id="email"
                placeholder="vicuresponde@gmail.com"
              />

              <Submit type="submit" name="submit" id="submit" value="Enviar" />
              <div id="mce-responses" class="clear">
                <div
                  class="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                ></div>
                <div
                  class="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                ></div>
              </div>
            </div>
          </form>
        </div>
        <BackgroundImage>
          <img src={SignupBg} alt="Activación Creativa en Abril" width={600} />
        </BackgroundImage>
      </Hero>
    </>
  )
}

SectionTwo.propTypes = {}

export default SectionTwo
