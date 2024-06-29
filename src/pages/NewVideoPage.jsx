import { TemplatePage } from './TemplatePage'
import { Title, Paragraph, Input, Dropdown } from '../components/'
import styled from 'styled-components'
import { Textarea } from '../components/Forms/Textarea/Textarea'
import { inputs } from '../data/inputs'




export const NewVideoPage = () => {
  return (
    <TemplatePage>

      <div style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', color: 'white', gap: '1em', padding: '2em'
      }}>

        <Title title={'NUEVOS VIDEOS'} />
        <Paragraph text={'Complete el formulario para crear una nueva tarjeta de video'.toUpperCase()} />

        <StyledForm>
          <h2>Crear Tarjeta</h2>

          <StyleInputRow >
            <Input size={'50%'} {...inputs[0]} />
            <Dropdown size={'50%'} {...inputs[1]} />
          </StyleInputRow>
          <StyleInputRow >
            <Input size={'50%'} {...inputs[2]} />
            <Input size={'50%'} {...inputs[3]} />
          </StyleInputRow>
          <Textarea size={'80%'} {...inputs[4]} />

        </StyledForm>
      </div>

    </TemplatePage>
  )
}

const StyledForm = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
width:80%;
gap:1em;
`

const StyleInputRow = styled.div`
display:flex;
align-items: center;
justify-content: center;
width:80%;
gap:2em;
`
