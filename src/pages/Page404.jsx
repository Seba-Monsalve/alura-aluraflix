import styled from "styled-components"
import { MainButton } from "../components/Buttons/MainButton"

export const Page404 = () => {
    return (
        <StyledMain >
            <StyledParagraph > <strong style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Opps!</strong> <br />Esta página no existe</StyledParagraph>
            <br />
            <MainButton selected text={'Volver al Home'} />
        </StyledMain>
    )
}


const StyledParagraph = styled.p`
color:white;
text-align:center;
line-height:2;
`


const StyledMain = styled.main`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:60vh


`