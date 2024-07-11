import styled from 'styled-components'

import { MainButton } from '../'
import { Link, useLocation } from 'react-router-dom'

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
    @media (max-width: 600px) {
    display:none
  }
`

const StyledImage = styled.img`
width: 168.45px;
height: 40px;
gap: 0px;
opacity: 0px;
`

export const Header = () => {

    const { pathname } = useLocation()
    return (
        <StyledHeader >
            <Link to="">
                <StyledImage src="/logo.png" alt="logo_alura" />
            </Link>
            <ul style={{ display: 'flex' }}>
                <li>
                    <Link to={'/'}><MainButton selected={(pathname == '/')} text='Home'  /></Link>
                </li>
                <li>
                    <Link to={'/new-video'}>  <MainButton selected={(pathname == '/new-video')} text='Nuevo Video'x/></Link>
                </li>
            </ul>
        </StyledHeader>
    )
}
