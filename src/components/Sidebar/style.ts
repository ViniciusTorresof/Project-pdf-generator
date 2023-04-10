import styled from "styled-components";

export const Aside = styled.aside `
    height: calc(100vh - 8rem);
    background-color: #fff;
    grid-area: menu;

    .title-aside {
        text-align: center;
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.5rem;
        padding: 2rem 0;
        color: ${props => props.theme.gray200};
        border-bottom: .1rem solid ${props => props.theme.white100};
    }
`

export const ListAside = styled.nav `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;

    /* li {
        font-size: 2.4rem;
        color: ${props => props.theme.gray200};
        border-radius: 100%;
        line-height: 0;
        padding: .6rem ;
        cursor: pointer;
        transition: all .3s;

        //Adicionar o Active no li clicado !!!

        &:hover {
            background-color: ${props => props.theme.white100};
        }
    } */
`