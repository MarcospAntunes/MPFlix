import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #303030;
        color: white;
        overflow-x: hidden;
    }

   
`

export default GlobalStyles
