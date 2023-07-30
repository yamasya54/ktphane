//create global styles

import { createGlobalStyle } from "styled-components";

import resim from "../assets/library-gcaf06147c_1920.jpg"

export const GlobalStyles = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-transform: uppercase;
    font-family: 'Shantell Sans', cursive;
}

body{
    font-size: 1.5rem;
    background-image: url(${resim})
   
    
    /* background-color: ${({theme})=>theme.colors.mainColor}; */
}

`;