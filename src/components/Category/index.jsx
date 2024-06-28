import React from 'react'
import styled from 'styled-components'

import {Video} from './Video'


const StyledCategory = styled.div`
background-color: black;
padding: 0 2em;

`
const StyledBadge = styled.div`
font-family: Roboto;
padding: 0.5em 2em;
background-color:#6BD1FF;
font-size: large;
font-weight: 800;
text-align: center;
border-radius:15px;
width:fit-content;
`

const StyledVideoList = styled.div`
  display: flex;
  flex-flow:row wrap;
  align-items: center;
  justify-content:space-around;
  width:100%;
  padding: 0.5em;
`

export const Category = () => {
  return (
    <StyledCategory>
      <StyledBadge>
        FRONT END
      </StyledBadge>


     <StyledVideoList>
      <Video></Video>
      <Video></Video>
      <Video></Video>
      <Video></Video>
      </StyledVideoList> 

    </StyledCategory>
  )
}
