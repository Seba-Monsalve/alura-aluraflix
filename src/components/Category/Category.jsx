import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'

import { VideoCardList } from './VideoCardList/VideoCardList'
import { GlobalContext } from '../../context/GlobalProvider'

const categories = [
  {
    title: 'Frontend',
    color:'#6BD1FF',
    videos: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
    ]
  },
  {
    title: 'Backend',
    color:'#00C86F',
    videos: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
    ]
  },
  {
    title: 'Innovación y Gestión',
    color:'#FFBA05',
    videos: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
    ]
  }
]



export const Category = () => {

  const {state,dispatch} = useContext(GlobalContext)

  
  return (
    <StyledCategory>
      {
        categories.map(category => <VideoCardList category={category} key={category.title} />)
      }
    </StyledCategory>
  )
}




const StyledCategory = styled.div`
background-color: black;
padding: 0 2em;
`