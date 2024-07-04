import styled from "styled-components"


const StyledImage = styled.img`
width: 168.45px;
height: 40px;
gap: 0px;
opacity: 0px;
`
const StyledFooter = styled.header`
    height: 100px;
    background-color: #262626;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    padding: 0em 2em;
    border-top: solid 4px #2271D1;
    box-shadow: 0px 5px 29px 0px #2271D1B2;
`

export const Footer = () => {
  return (
    <StyledFooter>

      <a href="#">

        <StyledImage src="/public/logo.png" alt="logo_alura" />
      </a>

    </StyledFooter>
  )
}
