import styled from 'styled-components'
import { Fieldset } from '../Fieldset/Fieldset'
import { useContext, useState } from 'react'
import { GlobalContext } from '../../../context/GlobalProvider'

export const Dropdown = ({ id, name, options, size, value }) => {

    const [inputValue, setinputValue] = useState(value)
    const { dispatch } = useContext(GlobalContext)
    const handleOnChange = (e) => {
        const value = e.target.value;
        setinputValue(value)
        dispatch({ type: 'editVideo', payload: { name, value } })
    }

    return (
        <Fieldset size={size}>
            <label htmlFor="id">{name}</label>
            <StyledDropdown id={id} name={name} value={inputValue} onChange={ handleOnChange}>
                <option disabled selected hidden>Selecciona un item</option>
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
