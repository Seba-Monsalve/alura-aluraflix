
import { GlobalStyles } from './components/'
import { HomePage, NewVideoPage } from './pages/'
import  GlobalContextProvider  from './context/GlobalProvider'

function App() {

  return (
    <>

      <GlobalStyles />
      <GlobalContextProvider>
        <HomePage />
        {/* <NewVideoPage /> */}
      </GlobalContextProvider>
    </>
  )
}

export default App
