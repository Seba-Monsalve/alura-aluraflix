import React, { useContext, useState } from 'react'
import { Input, Dropdown, Textarea, Button } from '../'
import { inputs } from "../../data/inputs";
import { GlobalContext } from '../../context/GlobalProvider';


const keys = {
    "Titulo": "title",
    "Categoria": "category",
    "Imagen": "image_url",
    "Video": "video_url",
    "Descripcion": "description",
}


export const Form = () => {
    const { state, dispatch } = useContext(GlobalContext)
    const video = state.selectedVideo;

    const handleOnClick = () => {
        dispatch({type:'saveVideo'})
    }


    return (
        <>
            {inputs.map(({ name, id, type, placeholder, options, rows = 4 }) => {

                return (
                    (type == 'text') ?
                        <Input type={type} key={id} id={id} name={name} placeholder={placeholder} value={video[keys[name]]} />
                        :
                        (type == 'dropdown') ?
                            <Dropdown key={id} id={id} name={name} options={options} value={video[keys[name]]} />
                            :
                            <Textarea key={id} id={id} name={name} rows={rows} value={video[keys[name]]} />
                )
            })
            }
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Button color text={'Guardar'} onClick={() =>handleOnClick()} />
                <Button text={'Limpiar'} />
            </div>
        </>
    )

}
