import React, { useContext } from 'react'
import { Input, Dropdown, Textarea, MainButton, SaveButton, CleanButton } from '../'
import { inputs } from "../../data/inputs";
import { GlobalContext, CASES } from '../../context/GlobalProvider';
import { keys } from '../../utils/keys';
import styled from 'styled-components';


export const Form = ({ size = '100%', onClick }) => {
    const { state, dispatch } = useContext(GlobalContext)
    const video = state.selectedVideo;
    const hasError = state.videoError;



    const handleOnClick = (e) => {
        e.preventDefault();
        dispatch({ type: CASES.SAVE_VIDEO })
    }

    const handleOnChange = (e) => {
        dispatch({ type: CASES.EDIT_FIELD, payload: { name: e.target.name, value: e.target.value } })
    }

    const handleOnReset = () => {
        dispatch({ type: CASES.CLEAN_FIELDS })
    }

    return (
        <form style={{ width: { size }, display: 'flex', flexDirection: 'column', alignItems: 'center', }}  >
            {inputs.map(({ name, id, type, placeholder, options, rows = 3 }) => {
                switch (type) {
                    case 'text':
                        return <Input size={size} type={type} key={id} id={id} name={name} placeholder={placeholder} value={video[keys[name]]} onChange={handleOnChange} hasError={hasError} />
                    case 'dropdown':
                        return <Dropdown size={size} key={id} id={id} name={name} options={options} value={video[keys[name]]} onChange={handleOnChange} />
                    case 'textarea':
                        return <Textarea size={size} key={id} id={id} name={name} rows={rows} value={video[keys[name]]} onChange={handleOnChange} hasError={hasError} />
                }
            })
            }
            <StyledButtons >
                <SaveButton color value={'Guardar'} type='submit' onClick={onClick ? onClick : handleOnClick} text={'Guardar'} />
                <CleanButton text={'Limpiar'} type='reset' value={'Limpiar'} onClick={handleOnReset} />
            </StyledButtons>
        </form>
    )
}

const StyledButtons = styled.div`
  display: flex; align-items: center; justify-content: space-around; width: 100% ;

 @media (max-width: 700px) {
    flex-direction:column;
  }
 
` 