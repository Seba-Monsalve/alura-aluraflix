import { Title, Paragraph } from '../components/'
import styled from 'styled-components'
import { useContext } from 'react'
import { CASES, GlobalContext } from '../context/GlobalProvider'
import { useNavigate } from 'react-router-dom'
import { Form } from '../components/Forms/Form'


export const NewVideoPage = () => {

  const { state, dispatch } = useContext(GlobalContext)


  const hasError = state.videoError;

  const navigate = useNavigate()

  const onHandleSave = (e) => {
    e.preventDefault()
    dispatch({ type: CASES.CREATE_VIDEO })

  }
  const onHandleClean = () => {
    dispatch({ type: CASES.CLEAN_FIELDS })
  }
  const handleOnChange = (e) => {
    dispatch({ type: CASES.EDIT_FIELD, payload: { name: e.target.name, value: e.target.value } })
  }

  return (

    <div style={{
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', color: 'white', gap: '1em', padding: '2em'
    }}>

      <StyledForm>
        <Title title={'NUEVOS VIDEOS'} />
        <Paragraph text={'Complete el formulario para crear una nueva tarjeta de video'.toUpperCase()} />

        <Form onClick={onHandleSave} />
      </StyledForm>
    </div>

  )
}

const StyledHr = styled.hr`
width:80%;
opacity:0.2;
`

const StyledForm = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
width:80%;
gap:1em;
text-align:left;
h2{
align-self:start;
}
`

const StyleInputRow = styled.div`
display:flex;
align-items: center;
justify-content: center;
width:80%;
gap:2em;
`
