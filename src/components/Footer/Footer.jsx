import styled from "styled-components"
import { FooterButton } from "../Buttons/"
import { Link, useLocation } from "react-router-dom"


const StyledImage = styled.img`
width: 168.45px;
height: 40px;
gap: 0px;
opacity: 0px;
@media (max-width: 700px) {
    display:none
  }
`
const StyledFooter = styled.footer`
    height: 100px;
    background-color: #262626;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    padding: 0em 2em;
    border-top: solid 4px #2271D1;
    box-shadow: 0px 5px 29px 0px #2271D1B2;
    
@media (max-width: 700px) {
    position:fixed;
    bottom:0;
    width:100%;
  }
`


const StyledButtonsGroup = styled.ul`
display:flex;
align-items:center;
justify-content:center;
gap:20px;
@media (min-width: 700px) {
    display:none
  }
`


export const Footer = () => {
  const { pathname } = useLocation()

  return (
    <StyledFooter>

      <a href="#">
        <StyledImage src="/logo.png" alt="logo_alura" />
      </a>
      <StyledButtonsGroup >
        <li>
          <Link to={'/'}>
            <FooterButton selected={(pathname == '/')} text='Home' icon={'home'} />
          </Link>
        </li>
        <li>
          <Link to={'/new-video'}>
            <FooterButton selected={(pathname == '/new-video')} text='Nuevo Video' icon={'plus'} />
          </Link>
        </li>
      </StyledButtonsGroup>
    </StyledFooter>
  )
}
