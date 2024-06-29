import styled from "styled-components"

export const Fieldset = ({ children, size }) => {
    return (
        <StyledFieldset $size={size} >{children}</StyledFieldset>
    )
}


const StyledFieldset = styled.fieldset`
display:flex;
flex-direction: column;
gap:10px;
color:white;
width: ${props => props.$size}
`