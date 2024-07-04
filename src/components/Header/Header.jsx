import React from 'react'
import styled from 'styled-components'

import { Button } from '../'

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

export const Header = () => {
    return (
        <StyledHeader >
            <a href="#">

            <StyledImage src="/public/logo.png" alt="logo_alura" />
            </a>
            <div>

            <Button color text='Home'/>
            <Button  text='Nuevo Video'/>
            </div>
        </StyledHeader>
    )
}
