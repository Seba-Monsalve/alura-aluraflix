import styled from 'styled-components'
import { Fieldset } from '../Fieldset/Fieldset'
import { MensajeError } from '../MensajeError';
import { keys } from '../../../utils/keys';

export const Input = ({ type, id, name, placeholder, size, value ='', onChange, hasError={} }) => {
    return (
        <Fieldset size={size}>
            <label htmlFor="id">{name}</label>
            <StyledInput type={type} id={id} name={name} placeholder={placeholder} value={value} required
                onChange={onChange}
            />
            {!!hasError[keys[name]] && <MensajeError>{hasError[keys[name]]}</MensajeError>}
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