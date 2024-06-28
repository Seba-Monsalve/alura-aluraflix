import styled from "styled-components"

const StyledBadge = styled.div`

padding: 1em ;
background-color: #6BD1FF;
border-radius:10px;
width:fit-content;
margin:1em 0;

`
const StyledTitle = styled.h1`

font-family: Roboto;
font-size: large;
font-weight: 800;
text-align: center;

`


export const Badge = ({ title, size }) => {
    return (
        <StyledBadge>
            <StyledTitle>{title}</StyledTitle>
        </StyledBadge>
    )
}
