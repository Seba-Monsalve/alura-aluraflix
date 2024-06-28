import styled from "styled-components"


const StyledButton = styled.button`
    padding: 0.5em 2em;
    margin:0.5em;
    background: #000000E5;
    
    border-radius: 10px ;
    font-family: Source Sans Pro;
    font-size: 20px;
    font-weight: 900;

    box-shadow: ${props => props.$color ? '0px 0px 12px 4px #2271D1 inset' : ''};
    border:2px solid ${props => props.$color ? '#2271D1' : 'white'};
    color:${props => props.$color ? '#2271D1' : 'white'};
`

export const Buttons = () => {
    return (
        <div>
            <StyledButton $color>Home </StyledButton>
            <StyledButton >Nuevo video</StyledButton>
        </div>
    )
}
