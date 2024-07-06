import styled from "styled-components"

import { Badge, Category, Modal, Paragraph, Title } from '../components'
import { useContext, useEffect } from "react"
import { GlobalContext } from "../context/GlobalProvider"


export const HomePage = () => {

  const { state, dispatch } = useContext(GlobalContext)

  useEffect(() => {
    if(state.firstLoad)
    fetch('http://localhost:3000/videos')
      .then(resp => resp.json())
      .then(data => dispatch({ type: 'loadVideos', payload: data }))

  }, [state.firstLoad])



  return (
    <>
      <StyledHome >
        <StyledFigure $image={'fondo_home.jpg'} />
        <StyledColumn>
          <Badge title='FRONT END' />
          <Title title={'Challenge React'} ></Title>
          <Paragraph text='Fugiat aliquip magna aute est culpa nisi nostrud officia laborum. Anim esse laboris ea Lorem pariatur dolor esse. Culpa commodo aliqua eu dolore cillum. Lorem dolore nulla in culpa voluptate duis' />
        </StyledColumn>
        <StyledColumn>
          <StyledImage src="home_image.png" alt="" />
        </StyledColumn>
      </StyledHome>
      <Category />
      {
        state.isModalOpen && <Modal />
      }
    </>
  )
}


const StyledFigure = styled.figure`
    background-image: ${props => `url(${props.$image})`};
    background-repeat: no-repeat;
    filter:blur(5px);
    position:absolute;
    width:100%;
    height:100%;
    background-size: cover;
    z-index:-1;
`

const StyledHome = styled.div`
      display: flex;
      flex-direction:row;
      flex-wrap:wrap;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      color: #F5F5F5;
      background-color:transparent;
      padding: 8em 0;
      `

const StyledColumn = styled.div`
      display:flex;
      flex-flow:column wrap;
      padding:2em;
      width:40%;
      `

const StyledTitle = styled.h2`
      font-family: Roboto;
      font-size: 46px;
      font-weight: 400;
      line-height: 53.91px;
      text-align: left;
`

const StyledImage = styled.img`
  border-radius:30px;
  width:100%;
`