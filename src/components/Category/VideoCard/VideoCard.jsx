import styled from 'styled-components'
import { IoTrashBinOutline, IoPencilOutline } from "react-icons/io5";


export const VideoCard = ({ video, color }) => {
    return (
        <StyledVideoCard $color={color}>
            <img src={"video.jpg"} alt="" style={{}} />
            <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-around'
                ,
                boxShadow: `2px 2px 2px 2px ${color} inset `,
                borderRadius: '0 0 10px 10px'
            }}>
                <StyledButtons >
                    <IoTrashBinOutline color='white' size={20} fontWeight={'bold'} />
                    Borrar
                </StyledButtons>
                <StyledButtons >
                    <IoPencilOutline color='white' size={20} fontWeight={'bold'} />
                    Editar
                </StyledButtons>
            </div>
        </StyledVideoCard >
    )
}


const StyledVideoCard = styled.div`
  display:flex;
  flex-flow: column wrap;
  border-radius:20px;
  box-shadow:  2px 2px 2px 2px ${props => props.$color} inset ;
    border:2px solid ${props => props.$color} ;
  img{
     width: 250px;
     box-shadow:  2px 2px 2px 2px ${props => props.$color} inset ;
     clip-path: inset(2% 2% 2% 2%);
}
`

const StyledButtons = styled.div`
  display:flex;
  flex-flow: row wrap;
  align-items:center;
  justify-content:center;
  gap:10px;
  cursor:pointer;
  size:2em;
  color:white;
  padding:1em;
`