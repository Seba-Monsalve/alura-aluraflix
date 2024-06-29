import styled from 'styled-components'
import { Fieldset } from '../Fieldset/Fieldset'

export const Input = ({ type, id, name, placeholder, size, rows }) => {
    return (
        <Fieldset size={size}>
            <label htmlFor="id">{name}</label>
            <StyledInput type={type} id={id} name={name} placeholder={placeholder}  
            rows = {`${rows}`} />
        </Fieldset>
    )
}

const StyledInput = styled.input`
border-radius:10px;
border: solid #2271D1 3px;
background-color: black;
padding:0.5em ;
color: white;
width:100%;
`