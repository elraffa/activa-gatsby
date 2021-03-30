import React from "react"
import { createGlobalStyle } from "styled-components"
import "@fontsource/raleway"
import "@fontsource/oswald"

const GlobalStyle = createGlobalStyle`
   html {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
   * {
       padding: 0;
       margin: 0;
   }
   *, *:before, *:after {
        box-sizing: inherit;
   }

   body {
    font-family: Raleway, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
   }

   h1, h2, h3, h4, h5, h6 {
       font-family: Oswald, sans-serif;
       font-weight: 700;
   }
`
export default GlobalStyle
