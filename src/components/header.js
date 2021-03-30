import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

// React icons
import { FaInstagram } from "react-icons/fa"
import { FaRegEnvelope } from "react-icons/fa"
import { FaTasks } from "react-icons/fa"
import { FaCocktail } from "react-icons/fa"

const HeaderNav = styled.header`
  background-color: rgba(230, 97, 127, 0.15);
  padding: 0.6rem 2rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  place-items: center;
  a {
    color: rgba(230, 97, 127);
    text-decoration: none;
    text-shadow: -2px 2px 1px black;
  }
`

const DesktopLinks = styled.nav`
  font-size: 1.2rem;
  text-transform: uppercase;

  ul {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  li {
    list-style-type: none;
  }

  a {
    color: rgba(230, 97, 127);
    text-shadow: none;
    padding: 0.5rem;
    background-color: rgba(230, 97, 127, 0);

    &:hover {
      background-color: rgba(230, 97, 127, 1);
      color: white;
      padding: 0.5rem;
      border-radius: 0.4rem;
      transition: background-color 600ms, color 600ms;
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const MenuLinks = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  z-index: 9;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  opacity: 0.94;
  overflow: hidden;
  background: rgba(6, 123, 194, 0.99);
  transition: transform 300ms;
  transform: ${({ nav }) => (nav ? "translateX(0)" : "translate(100%)")};
  display: ${({ nav }) => (nav ? "flex" : undefined)};

  ul {
    display: block;
  }

  li {
    margin-top: 2.3rem;
    list-style-type: none;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 2rem;
    font-weight: 700;
    text-shadow: none;
  }
`

const MenuIcon = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 15;

  @media only screen and (min-width: 768px) {
    display: none;
  }

  div {
    width: 1.5rem;
    height: 0.21rem;
    background: rgba(230, 97, 127);
    transform-origin: 1px;
    transition: transform 300ms, opacity 300ms;

    :first-child {
      transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const Header = ({ siteTitle }) => {
  const [nav, showNav] = useState(false)
  return (
    <HeaderNav>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          {" "}
          <StaticImage
            src="../images/logo.png"
            width={100}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Activación Creativa en Abril"
          />
        </Link>
      </h1>
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <MenuLinks nav={nav}>
        <ul>
          <Link to="/">
            {" "}
            <StaticImage
              src="../images/logo-white.png"
              width={200}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Activación Creativa en Abril"
            />
          </Link>
          <li nav={nav} onClick={() => showNav(!nav)}>
            <Link to="#subscribe">
              <FaRegEnvelope style={{ position: "relative", top: 3 }} />{" "}
              Suscribite
            </Link>
          </li>
          <li nav={nav} onClick={() => showNav(!nav)}>
            <Link to="#actividades">
              <FaTasks style={{ position: "relative", top: 3 }} /> Actividades
            </Link>
          </li>
          <li nav={nav} onClick={() => showNav(!nav)}>
            <Link to="#about">
              <FaCocktail style={{ position: "relative", top: 3 }} /> Acerca de
            </Link>
          </li>
        </ul>
      </MenuLinks>
      <DesktopLinks>
        <ul>
          <li>
            <Link to="#subscribe">
              <FaRegEnvelope
                style={{ fontSize: "1.3rem", position: "relative", top: 3 }}
              />{" "}
              Suscribite
            </Link>
          </li>
          <li>
            <Link to="#actividades">
              <FaTasks
                style={{ fontSize: "1.3rem", position: "relative", top: 3 }}
              />{" "}
              Actividades
            </Link>
          </li>
          <li>
            <Link to="#about">
              <FaCocktail
                style={{ fontSize: "1.3rem", position: "relative", top: 2 }}
              />{" "}
              Acerca de
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/activacioncreativa">
              <FaInstagram
                style={{ fontSize: "1.3rem", position: "relative", top: 3 }}
              />
            </Link>
          </li>
        </ul>
      </DesktopLinks>
    </HeaderNav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
