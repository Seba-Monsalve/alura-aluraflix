import styled from "styled-components"

const StyledButton = styled.button`
height:40px;
display:flex;
align-items:center;
justify-content:center;
gap:5px;
    padding: 0.5em 2em;
    margin:0.5em 0.5em 0 0 ;
    border-radius: 10px ;
    font-family: Source Sans Pro;
    font-size: 15px;
    font-weight: 900;
    cursor:pointer;
    background-color: transparent;
    color: ${props => props.$selected ? '#2271D1' : 'white'};
    border:3px solid ${props => props.$selected ? '#2271D1' : 'white'};
    box-shadow: ${props => props.$selected ? '0px 0px 12px 4px #2271D1 inset' : ''};

    transition:0.5s ease all;

    &:hover{

    border:3px solid transparent;
    box-shadow: none;
background-color:#2271D13d;

    }
   
`

const StyledSaveButton = styled(StyledButton)`
border: 3px solid #2271D1;
`;


const StyledFooterButton = styled(StyledButton)`
border-radius:30px;
background-color:#2271D13d;
color:#2271D1;
box-shadow: none;
padding:1.5em 1em;
transition: 1s all ease;
`;

const StyledSvg = styled.img`

  @media (min-width: 700px) {
    display:none
  }
`

const MainButton = ({ text, selected = false, onClick }) => {
    return (selected) ?
        <StyledButton $selected onClick={onClick}>
            {text}
        </StyledButton> :
        <StyledButton onClick={onClick}>{text} </StyledButton>
}

const FooterButton = ({ text, selected = false, onClick, icon }) => {
    return (selected) ?
        <StyledFooterButton $selected onClick={onClick}>
            {
                <StyledSvg src={`/${icon}_.svg`} height={'30px'} />
            }
            {text}
        </StyledFooterButton> :
        <StyledSvg src={`/${icon}.svg`} height={'45px'} />
}
const SaveButton = ({ text, onClick }) => {
    return <StyledSaveButton selected onClick={onClick}>{text} </StyledSaveButton>
}
const CleanButton = ({ text, onClick }) => {
    return <StyledButton selected onClick={onClick}>
        {text} </StyledButton>
}

export { MainButton, CleanButton, SaveButton, FooterButton }

