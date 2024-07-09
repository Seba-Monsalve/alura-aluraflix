import styled from 'styled-components'
import { Fieldset } from '../Fieldset/Fieldset'

export const Dropdown = ({ id, name, options, size, value ,onChange}) => {

    return (
        <Fieldset size={size}>
            <label htmlFor="id">{name}</label>
            <StyledDropdown id={id} name={name} value={value} onChange={ onChange}  >
                <option disabled selected value={'Selecciona un item'}>Selecciona un item</option>
                {options.map(option => <option key={option} value={option} >{option}</option>)}
            </StyledDropdown>
        </Fieldset>
    )
}


const StyledDropdown = styled.select`
border-radius:10px;
border: solid #2271D1 3px;
background-color: black;
padding:0.5em ;
color: white;
width:calc(100% + 20px);
`
