import { Title, Paragraph, Input, Dropdown, Textarea, Button } from '../components/'
import styled from 'styled-components'
import { inputs } from '../data/inputs'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalProvider'


export const NewVideoPage = () => {

  const { state, dispatch } = useContext(GlobalContext)

  const onHandleSave = () => {
    dispatch({ type: 'createVideo' })
  }
  const onHandleClean = () => {
    dispatch({ type: 'cleanSelectedVideo' })
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
          <Input size={'50%'} {...inputs[0]} />
          <Dropdown size={'50%'} {...inputs[1]} />
        </StyleInputRow>
        <StyleInputRow >
          <Input size={'50%'} {...inputs[2]} />
          <Input size={'50%'} {...inputs[3]} />
        </StyleInputRow>
        <Textarea rows={6} size={'80%'} {...inputs[4]} />
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}>
          <Button color text={'Guardar'} onClick={onHandleSave} />
          <Button text={'Limpiar'}  onClick={onHandleClean}/>
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
