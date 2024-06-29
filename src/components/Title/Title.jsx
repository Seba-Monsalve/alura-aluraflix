import styled from "styled-components"

export const Title = ({ title }) => {
    return (
        <StyledTitle>{title}</StyledTitle>
    )
}


const StyledTitle = styled.h1`
font-family: Roboto;
font-size: xx-large;
font-weight: 800;
color: #EDEDED;
`
