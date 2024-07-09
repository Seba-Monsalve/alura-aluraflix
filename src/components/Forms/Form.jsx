import React, { useContext, useEffect } from 'react'
import { Input, Dropdown, Textarea } from '../'
import { inputs } from "../../data/inputs";
import { GlobalContext, CASES } from '../../context/GlobalProvider';
import styled from 'styled-components';

const keys = {
    "Titulo": "title",
    "Categoria": "category",
    "Imagen": "image_url",
    "Video": "video_url",
    "Descripcion": "description",
}


export const Form = ({ size, onClick }) => {
    const { state, dispatch } = useContext(GlobalContext)
    const video = state.selectedVideo;
    const hasError = state.videoError;



    const handleOnClick = (e) => {
        e.preventDefault();
        dispatch({ type: CASES.SAVE_VIDEO })
    }

    const handleOnChange = (e) => {
        console.log(e)
        dispatch({ type: CASES.EDIT_FIELD, payload: { name: e.target.name, value: e.target.value } })
    }

    const handleOnReset = () => {
        dispatch({ type: CASES.CLEAN_FIELDS })
    }

    return (
        <form  >
            {inputs.map(({ name, id, type, placeholder, options, rows = 4 }) => {
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
            <StyledInput $color value={'Guardar'} type='submit' onClick={onClick ? onClick : handleOnClick} />
            <StyledInput text={'Limpiar'} type='reset' value={'Limpiar'} onClick={handleOnReset} />
        </form>
    )
}


const StyledInput = styled.input`
    padding: 0.5em 2em;
    margin:0.5em;
    background: #000000E5;
    
    border-radius: 10px ;
    font-family: Source Sans Pro;
    font-size: 15px;
    font-weight: 900;
    box-shadow: ${props => props.$color ? '0px 0px 12px 4px #2271D1 inset' : ''};
    border:2px solid ${props => props.$color ? '#2271D1' : 'white'};
    color:${props => props.$color ? '#2271D1' : 'white'};
    cursor:pointer;
`
