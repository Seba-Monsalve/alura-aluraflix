import { createContext, useReducer } from 'react';
import { keys } from '../utils/keys';

export const GlobalContext = createContext(null)

const initialState = {
    isModalOpen: false,
    videos: [],
    selectedVideo: null,
}


const GlobalContextReducer = (state, action) => {
    switch (action.type) {
        case 'editVideo': {
            const { name, value } = action.payload
            return { ...state, selectedVideo: { ...state.selectedVideo, [keys[name]]: value } };

        }
        case 'toggleModal':
            {
                return { ...state, selectedVideo: action.payload, isModalOpen: !state.isModalOpen }
            }
        case 'loadVideos':
            {
                return { ...state, videos: action.payload }
            }
        case 'saveVideo':
            {
                console.log(state.selectedVideo.id);
                console.log(state.selectedVideo);

                fetch('http://localhost:3000/videos/' + state.selectedVideo.id, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        body: state.selectedVideo
                    }
                })
                    .then(res => res.text()) // or res.json()
                    .then(res => console.log(res))


                const newVideos = state.videos.map(video => {
                    if (video.id == state.selectedVideo.id)
                        return state.selectedVideo;
                    return video;
                });

                return {
                    ...state, videos: newVideos, isModalOpen: false
                }
            }


        case 'deleteVideo':
            {
                fetch('http://localhost:3000/videos/' + action.payload, {
                    method: 'DELETE',
                })
                    .then(res => res.text()) // or res.json()
                    .then(res => console.log(res))
                return {
                    ...state, videos: state.videos.filter((video) => {
                        return video.id != action.payload

                    })
                }
            }
        default: {
            console.log('ENTRANDO AL DEFAULT');
            return state;
        }
    }
};



const GlobalContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(GlobalContextReducer, initialState)

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;
