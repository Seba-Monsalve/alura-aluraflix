import { Title, Paragraph } from '../components/'
import styled from 'styled-components'
import { useContext } from 'react'
import { CASES, GlobalContext } from '../context/GlobalProvider'
import { Form } from '../components/Forms/Form'


export const NewVideoPage = () => {

  const {  dispatch } = useContext(GlobalContext)


  const onHandleSave = (e) => {
    e.preventDefault()
    dispatch({ type: CASES.CREATE_VIDEO })

  }

  return (

    <div style={{
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', color: 'white', gap: '1em', padding: '2em'
    }}>

      <StyledForm>
        <Title title={'NUEVOS VIDEOS'} />
        <Paragraph text={'Complete el formulario para crear una nueva tarjeta de video'.toUpperCase()} />

        <Form  size={'50vw'} onClick={onHandleSave} />
      </StyledForm>
    </div>

  )
}

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

