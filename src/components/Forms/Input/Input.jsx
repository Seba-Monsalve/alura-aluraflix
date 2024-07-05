import styled from 'styled-components'
import { Fieldset } from '../Fieldset/Fieldset'
import { useContext, useState } from 'react'
import { GlobalContext } from '../../../context/GlobalProvider'

export const Input = ({ type, id, name, placeholder, size, value }) => {

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
            <StyledInput type={type} id={id} name={name} placeholder={placeholder} value={inputValue}
                onChange={handleOnChange}
            />
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