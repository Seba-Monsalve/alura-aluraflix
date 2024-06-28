import styled from "styled-components"
import { IoCloseCircle } from "react-icons/io5";
import { Button } from "../Button";


const inputs = [
    {
        id: 'titulo',
        name: 'Titulo',
        type: 'text',
        placeholder: '¿Que titulo quieres ingresar?'
    },
    {
        id: 'categoria',
        name: 'Categoria',
        type: 'text',
        placeholder: ''

    },
    {
        id: 'imagen',
        name: 'Imagen',
        type: 'text',
        placeholder: 'Ingresa tu image'
    },
    {
        id: 'video',
        name: 'Video',
        type: 'text',
        placeholder: ''
    },
    {
        id: 'descripcion',
        name: 'Descripcion',
        type: 'textarea',
        placeholder: ''
    }
]


export const Modal = () => {
    return (
        <>
            <StyledModal />

            <StyledForm>
                <IoCloseCircle size={'2em'} color={'white'} style={{ position: 'relative', right: '-45%' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6em', width: '70%' }}>
                    <StyledTitle> Editar Card: </StyledTitle>

                    {inputs.map(({ name, id, type, placeholder }) =>
                        <StyledFieldset key={id}>
                            <label for={name}>{name}</label>
                            <StyledInput type={type} id={id} name={name} placeholder={placeholder} />
                        </StyledFieldset>
                    )}

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


const StyledTitle = styled.h1`
color: #6BD1FF;
font-size:2em;
`


const StyledFieldset = styled.fieldset`
display:flex;
flex-direction: column;
gap:10px;
color: white;
`
const StyledInput = styled.input`
border-radius:10px;
border: solid #2271D1 3px;
background-color: transparent;
padding:0.5em ;

`


