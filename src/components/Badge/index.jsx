import styled from "styled-components"
import { Title } from "../Title/Title"

export const Badge = ({ title }) => {
    return (
        <StyledBadge>
            <Title title={title}></Title>
        </StyledBadge>
    )
}

const StyledBadge = styled.div`
padding: 1em ;
background-color: #6BD1FF;
border-radius:10px;
width:fit-content;
margin:1em 0;
`