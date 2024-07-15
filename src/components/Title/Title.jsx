import styled from "styled-components"

export const Title = ({ title }) => {
    return (
        <StyledTitle>{title}</StyledTitle>
    )
}

const StyledTitle = styled.h1`
font-family: Roboto;

@media (max-width: 700px) {
font-size: x-large;
  }
font-size: xx-large;
font-weight: 800;
color: #EDEDED;
`
