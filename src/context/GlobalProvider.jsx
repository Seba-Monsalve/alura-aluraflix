import { createContext, useReducer } from 'react';

export const GlobalContext = createContext(null)

const initialState = {
    isModalOpen: false,
    videos: [],
    selectedVideo: null
}


const GlobalContextReducer = (state, action) => {
    switch (action.type) {
        case 'toggleModal':
            {
                return { ...state, selectedVideo: action.payload, isModalOpen: !state.isModalOpen }
            }
        case 'getVideos':
            {
                return { ...state, videos: action.payload }
            }

        case 'deleteVideo':
            {
                fetch('http://localhost:3000/videos/' + action.payload, {
                    method: 'DELETE',
                })
                    .then(res => res.text()) // or res.json()
                    .then(res => console.log(res))
                return {
                    ...state, videos: state.videos.filter((video)=>
                        {
                            console.log(video.id);
                            console.log(action.payload);
                            return video.id != action.payload

                        })
                }
    }


        default: return state;
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
