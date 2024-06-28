import styled from 'styled-components'
import { VideoCard } from '../VideoCard/VideoCard'


export const VideoCardList = ({ category }) => {
    const { videos, title,color } = category;

    return (
        <>
            <StyledBadge $color ={color}>
                {title.toUpperCase()}
            </StyledBadge>
            <StyledVideoList>
                {videos.map(video => <VideoCard video={video} color = {color}key={video.id}/>)}
            </StyledVideoList>
            <br />
        </>

    )
}


const StyledVideoList = styled.div`
  display: flex;
  flex-flow:row wrap;
  align-items: center;
  justify-content:space-between;
  width:100%;
  padding: 0.5em 0;
  gap:1em
`

const StyledBadge = styled.div`
font-family: Roboto;
padding: 0.5em 2em;
background-color:${props => props.$color};
font-size: large;
font-weight: 800;
text-align: center;
border-radius:15px;
margin-bottom:1em;
color:white;
width:300px


`
