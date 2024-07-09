import { createContext, useReducer } from 'react';
import { keys } from '../utils/keys';
import { v4 as uuidv4 } from 'uuid';

export const GlobalContext = createContext(null)

const initialState = {
    isModalOpen: false,
    videos: [],
    selectedVideo: { id: '', title: '', description: '', image_url: '', video_url: '', category: 'Frontend' },
    firstLoad: true,
    videoError: {}
}

export const CASES = {
    CLEAN_FIELDS: 'cleanSelectedVideo',
    TOOGLE_MODAL: 'toggleModal',
    EDIT_FIELD: 'editVideo',
    CREATE_VIDEO: 'createVideo',
    LOAD_VIDEOS: 'loadVideos',
    SAVE_VIDEO: 'saveVideo',
    DELETE_VIDEO: 'deleteVideo'
}


const validateVideo = (selectedVideo) => {
    let validacion = {};
    let flag = false;
    Object.keys(selectedVideo).forEach(key => {
        if (selectedVideo[key].length == 0 && key != 'id') {
            validacion[key] = 'No puede estar el campo vacio'
            flag = true;
        }
    })

    return flag ? validacion : null;
}



const GlobalContextReducer = (state, action) => {
    switch (action.type) {
        case CASES.CLEAN_FIELDS: {
            const cleanSelectedVideo = state.selectedVideo;
            Object.keys(state.selectedVideo).forEach(
                key => {
                    if (key != 'id' && key != 'category')
                        cleanSelectedVideo[key] = ''
                })
            return { ...state, selectedVideo: { ...cleanSelectedVideo } }
        }
        case CASES.EDIT_FIELD: {
            const { name, value } = action.payload
            if (state.videoError[keys[name]] && value != '')
                return { ...state, videoError: { ...state.videoError, [keys[name]]: '' } };
            return { ...state, selectedVideo: { ...state.selectedVideo, [keys[name]]: value } };
        }
        case CASES.TOOGLE_MODAL:
            {
                return { ...state, selectedVideo: action.payload, isModalOpen: !state.isModalOpen }
            }
        case CASES.LOAD_VIDEOS:
            {
                return { ...state, videos: action.payload, firstLoad: false }
            }
        case CASES.SAVE_VIDEO:
            {
                const videoError = validateVideo(state.selectedVideo);

                if (videoError)
                    return { ...state, videoError };

                fetch('http://localhost:3000/videos/' + state.selectedVideo.id, {
                    method: 'PUT',
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
                    ...state, videos: newVideos, isModalOpen: false, videoError: {}, selectedVideo: { id: '', title: '', description: '', image_url: '', video_url: '', category: '' }
                }
            }
        case CASES.CREATE_VIDEO:
            {
                const videoError = validateVideo(state.selectedVideo);
                if (videoError)
                    return { ...state, videoError };
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
                    ...state, videos: [...state.videos, newVideo], isModalOpen: false, selectedVideo: { id: '', title: '', description: '', image_url: '', video_url: '', category: 'Frontend' }
                }
            }

        case CASES.DELETE_VIDEO:
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
