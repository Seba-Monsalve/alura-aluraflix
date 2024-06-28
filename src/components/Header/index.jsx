import React from 'react'
import styled from 'styled-components'

import { Buttons } from './Buttons'
import './style.css'

const StyledHeader = styled.header`
    height: 100px;
    background-color: #262626;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0em 2em;
    border-bottom: solid 4px #2271D1;
    box-shadow: 0px 5px 29px 0px #2271D1B2;

    
`

const StyledImage = styled.img`
width: 168.45px;
height: 40px;
gap: 0px;
opacity: 0px;

`

//TODO ARREGLAR LA FUENTE DE LAS LETRAS 
export const Header = () => {
    return (
        <StyledHeader >
            <StyledImage src="/public/logo.png" alt="logo_alura" />
            <Buttons />
        </StyledHeader>
    )
}
