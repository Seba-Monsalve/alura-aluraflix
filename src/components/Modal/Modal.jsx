import styled from "styled-components"
import { IoCloseCircle } from "react-icons/io5";
import { Title, } from "../";

import { useContext } from "react";
import { GlobalContext, CASES } from "../../context/GlobalProvider";
import { Form } from "../Forms/Form";




export const Modal = ({ }) => {
    const { dispatch } = useContext(GlobalContext)
    return (
        <>
            <StyledModal />
            <StyledForm>
                <IoCloseCircle
                    onClick={() => dispatch({ type: CASES.TOOGLE_MODAL, payload: { id: '', title: '', description: '', image_url: '', video_url: '', category: '' } })} size={'2em'} color={'white'}
                    style={{
                        position: 'relative',
                        right: '-45%',
                        cursor: 'pointer',
                    }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6em', width: '70%' }}>
                    <Title title='Editar Card:' />
                    <Form />
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

const StyledForm = styled.div`
position:fixed;
top:45%;
left:50%;
transform:translate(-50%,-50%);
display:flex;
flex-direction: column;
align-items:center;
justify-content: center;
background-color:black;
padding: 0.5em;
border-radius:  10px ;
border:2px solid #6BD1FF;
width:max(50%,250px);
`

