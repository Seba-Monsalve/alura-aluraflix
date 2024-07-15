import styled from 'styled-components'
import { Fieldset } from '../Fieldset/Fieldset'
import { MensajeError } from '../MensajeError'
import { keys } from '../../../utils/keys'

export const Textarea = ({ id, name, rows, size, value='' ,onChange,hasError}) => {
    return (
        <Fieldset size={size}>
            <label htmlFor="id">{name}</label>
            <StyledTextarea id={id} name={name} rows={rows} value={value}
                onChange={onChange}
            />
            {!!hasError[keys[name]] && <MensajeError>{hasError[keys[name]] }</MensajeError>}
        </Fieldset>
    )
}

const StyledTextarea = styled.textarea`
border-radius:10px;
border: solid #2271D1 3px;
background-color: black;
padding:0.5em ;
color: white;
width:calc(100% + 20px);
`
