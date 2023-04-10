import styled from "styled-components";

export const HeaderContainer = styled.header `
    width: 100%;
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    background-color: ${props => props.theme.blue500};
    grid-area: header;
    
    img {
        width: 6rem;
    }
`

export const ButtonDarkLight = styled.button `
    background-color: transparent;
    font-size: 2rem;
    line-height: 0;
    color: ${props => props.theme.white};
`