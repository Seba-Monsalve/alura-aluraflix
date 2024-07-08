import { Title, Paragraph, Input, Dropdown, Textarea, Button } from '../components/'
import styled from 'styled-components'
import { inputs } from '../data/inputs'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalProvider'
import { Navigate, useNavigate } from 'react-router-dom'


export const NewVideoPage = () => {

  const { state, dispatch } = useContext(GlobalContext)

  const navigate = useNavigate()

  const onHandleSave = () => {
    dispatch({ type: 'createVideo' })
    navigate('/')
  }
  const onHandleClean = () => {
    dispatch({ type: 'cleanSelectedVideo' })
  }
  const handleOnChange = (e) => {
      dispatch({ type: 'editVideo', payload: { name: e.target.name, value: e.target.value } })
  }

  return (

    <div style={{
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', color: 'white', gap: '1em', padding: '2em'
    }}>

      <StyledForm>
        <Title title={'NUEVOS VIDEOS'} />
        <Paragraph text={'Complete el formulario para crear una nueva tarjeta de video'.toUpperCase()} />

        <StyledHr />
        <Title title={'Crear Tarjeta'} />
        <StyledHr />

        <StyleInputRow >
          <Input size={'50%'} {...inputs[0]} onChange={handleOnChange} />
          <Dropdown size={'50%'} {...inputs[1]} onChange={handleOnChange} />
        </StyleInputRow>
        <StyleInputRow >
          <Input size={'50%'} {...inputs[2]} onChange={handleOnChange} />
          <Input size={'50%'} {...inputs[3]} onChange={handleOnChange} />
        </StyleInputRow>
        <Textarea rows={6} size={'80%'} {...inputs[4]} onChange={handleOnChange} />
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}>
          <Button color text={'Guardar'} onClick={onHandleSave} />
          <Button text={'Limpiar'} onClick={onHandleClean} />
        </div>
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
