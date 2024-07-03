import { createContext, useContext, useReducer } from 'react';

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
