import styled from "styled-components"
import { IoCloseCircle } from "react-icons/io5";
import { Button, Input, Dropdown, Title, Textarea } from "../";


import { inputs } from "../../data/inputs";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalProvider";



const keys = {
    "Titulo": "title",
    "Categoria": "category",
    "Imagen": "image_url",
    "Video": "video_url",
    "Descripcion": "description",
}



export const Modal = ({ }) => {
    const { state, dispatch } = useContext(GlobalContext)

    const { video } = state.selectedVideo;
    return (
        <>
            <StyledModal />
            <StyledForm>
                <IoCloseCircle
                    onClick={() => dispatch({ type: 'toggleModal', payload: null })} size={'2em'} color={'white'}
                    style={{
                        position: 'relative',
                        right: '-45%',
                        cursor: 'pointer',
                    }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6em', width: '70%' }}>
                    <Title title='Editar Card:' />
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
                        <Button color text={'Guardar'} />
                        <Button text={'Limpiar'} />
                    </div>
                </div>
            </StyledForm>

        </>

    )
}


const StyledModal = styled.div`
position:fixed;
display:flex;
align-items:center;
justify-content: center;
top:0;
width:100%;
height:100vh;
background-color: black;
opacity:0.4;
`

const StyledForm = styled.form`
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
display:flex;
flex-direction: column;
align-items:center;
justify-content: center;
background-color:black;
padding: 1em;
border-radius:  10px ;
border:2px solid #6BD1FF;
width:40%;
`

