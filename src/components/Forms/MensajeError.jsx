import styled from "styled-components"

export const MensajeError = ({ children }) => {
    return (
        <StyledSpan >{children}</StyledSpan>
    )
}

const StyledSpan = styled.span`
    color:red;
    font-size:small;
    margin-top:-5px;
    margin-bottom:5px;
`
