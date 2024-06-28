import styled from 'styled-components'
import { IoTrashBinOutline, IoPencilOutline } from "react-icons/io5";

const StyledVideoCard = styled.div`
  display:flex;
  flex-flow: column wrap;
  border-radius:20px;
  box-shadow:  2px 2px 2px 2px #6BD1FF inset ;
    border:5px solid #6BD1FF ;
  img{
  border-radius:20px;
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
export const Video = () => {
    return (
        <StyledVideoCard >
            <img src={"video.jpg"} alt="" style={{width:'250px'}} />
            <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-around'
            }}>
                <StyledButtons>
                    <IoTrashBinOutline color='white' size={40} />
                    Borrar
                </StyledButtons>
                <StyledButtons>
                    <IoPencilOutline color='white' size={40} />
                    Editar
                </StyledButtons>
            </div>
        </StyledVideoCard >
    )
}
