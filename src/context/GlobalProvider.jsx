import { createContext, useReducer } from 'react';
import { keys } from '../utils/keys';
import { v4 as uuidv4 } from 'uuid';

export const GlobalContext = createContext(null)

const initialState = {
    isModalOpen: false,
    videos: [],
    selectedVideo: null,
    firstLoad: true
}


const GlobalContextReducer = (state, action) => {
    console.log(action);
    switch (action.type) {

        case 'cleanSelectedVideo': {
            console.log('asd');
            return { ...state, selectedVideo: {} }
        }
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
                return { ...state, videos: action.payload, firstLoad: false }
            }
        case 'saveVideo':
            {
                fetch('http://localhost:3000/videos/' + state.selectedVideo.id, {
                    method: 'POST',
                    headers: {
                        "Access-Control-Allow-Origin": "http://localhost:5173",
                        "Access-Control-Allow-Headers": "*",
                        body: JSON.stringify(state.selectedVideo)
                    }
                })
                    .then(res => res.json()) // or res.json()
                    .then(res => console.log(res)).catch
                const newVideos = state.videos.map(video => {
                    if (video.id == state.selectedVideo.id)
                        return state.selectedVideo;
                    return video;
                });
                return {
                    ...state, videos: newVideos, isModalOpen: false
                }
            }
        case 'createVideo':
            {

                const newVideo = { ...state.selectedVideo, id: uuidv4() }
                fetch('http://localhost:3000/videos/', {
                    method: 'POST',
                    headers: {
                        "Access-Control-Allow-Origin": "http://localhost:5173",
                        "Access-Control-Allow-Headers": "*",
                        body: JSON.stringify(newVideo)
                    }
                })
                    .then(res => res.json()) // or res.json()
                    .then(res => console.log(res)).catch
                return {
                    ...state, videos: [...state.videos, newVideo], isModalOpen: false
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
