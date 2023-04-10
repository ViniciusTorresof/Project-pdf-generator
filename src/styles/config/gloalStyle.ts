import * as styled from 'styled-components';

export const GlobalStyle = styled.createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        border: none;
        text-decoration: none;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        font-size: 1.6rem; // 1rem = 10px
        background-color: #f0F6F6;
    }

    #root {
        display: grid;
        grid-template-columns: 8rem 1fr 1fr;
        grid-template-areas: "header header header" "menu section section";
    }
`

// font-family: 'Inter', sans-serif;
// font-family: 'Barlow', sans-serif;;
// font-family: 'Baloo 2', sans-serif;;