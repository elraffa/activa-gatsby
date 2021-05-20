import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

const MainButton = styled.button`
  background: #fffd1f;
  color: black;
  padding: 1rem 3rem;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  margin-right: 2rem;
  cursor: pointer;

  &:hover {
    background: #fafd7f;
  }

  @media only screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const Button = ({ buttonText, buttonLink }) => {
  return (
    <Link to={buttonLink}>
      <MainButton>{buttonText}</MainButton>
    </Link>
  )
}

Button.propTypes = {}

export default Button
