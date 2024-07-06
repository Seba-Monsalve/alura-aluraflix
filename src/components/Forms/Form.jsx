import React, { useContext, useEffect, useState } from 'react'
import { Input, Dropdown, Textarea } from '../'
import { inputs } from "../../data/inputs";
import { GlobalContext } from '../../context/GlobalProvider';
import styled from 'styled-components';


const keys = {
    "Titulo": "title",
    "Categoria": "category",
    "Imagen": "image_url",
    "Video": "video_url",
    "Descripcion": "description",
}


export const Form = () => {
    

    const { state, dispatch } = useContext(GlobalContext)

    const [video, setVideo] = useState(state.selectedVideo)

    
    useEffect(() => {
    }, [video])
    const handleOnClick = (e) => {
        e.preventDefault()
        dispatch({ type: 'saveVideo' })
    }
    const handleOnClean = () => {
        setVideo((video) => {
            return { ...video, [video[keys[video.name]]]: '' }
        })
        dispatch({ type: 'cleanSelectedVideo' })
    }




    return (
        <form >
            {inputs.map(({ name, id, type, placeholder, options, rows = 4 }) => {

                switch (type) {
                    case 'text':
                        return <Input type={type} key={id} id={id} name={name} placeholder={placeholder} value={video[keys[name] || '']} />
                    case 'dropdown':
                        return <Dropdown key={id} id={id} name={name} options={options} value={video[keys[name]]} />
                    case 'textarea':
                        return <Textarea key={id} id={id} name={name} rows={rows} value={video[keys[name]]} />
                    case 'submit':
                        return (<StyledInput $color value={'Guardar'} type='submit' onClick={handleOnClick} />)
                    case 'reset':
                        return (<StyledInput text={'Limpiar'} type='reset' value={'Limpiar'} onClick={handleOnClean} />)
                    default:
                        return <></>
                }
            })
            }
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
