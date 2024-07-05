import styled from 'styled-components'
import { IoTrashBinOutline, IoPencilOutline } from "react-icons/io5";
import { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalProvider';


export const VideoCard = ({ video, color }) => {

    const { title, id, categorie, image_url, video_url, description } = video;

    const { state, dispatch } = useContext(GlobalContext)

    const click = {
        'delete': () => dispatch({ type: 'deleteVideo', payload: id }),
        'edit': () => dispatch({ type: 'toggleModal', payload:  video  })
    }

    // NECESITO SACAR LOS VIDEOS DEL GET
    return (
        <StyledVideoCard $color={color}>
            <h2 style={{
                padding: '.5em .5em .5em', color: 'white', textAlign: 'center', backgroundColor: color, borderRadius: '20px',
                fontSize: 'medium',
                fontWeight: '400',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '100%'
            }}>{title}</h2>
            <StyledImage src={image_url} alt="" />
            <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-around'
                ,
                boxShadow: `2px 2px 2px 2px ${color} inset `,
                borderRadius: '0 0 10px 10px'
            }}>
                <StyledButtons onClick={click.delete}>
                    <IoTrashBinOutline color='white' size={20} fontWeight={'bold'} />
                    Borrar
                </StyledButtons>
                <StyledButtons onClick={click.edit}>
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
max-width:260px;
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


const StyledImage = styled.img`
    width:250px;
    height:140px;
   object-fit:cover;
`