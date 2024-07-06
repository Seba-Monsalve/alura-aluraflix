
import { GlobalStyles,Header,Footer} from './components/'
import { HomePage, NewVideoPage, Page404 } from './pages/'
import GlobalContextProvider from './context/GlobalProvider'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>

      <GlobalStyles />
      <GlobalContextProvider>
        <Router >
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/new-video' element={<NewVideoPage />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
          <Footer />
        </Router>

        {/* <NewVideoPage /> */}
      </GlobalContextProvider>
    </>
  )
}

export default App
