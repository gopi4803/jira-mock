import './App.css'
import LoginPage from './components/LoginPage'
import { Provider } from 'react-redux'
import store from './redux/store'
import SignupPage from './components/SignupPage'

function App() {

  return (
    <Provider store={store}>
      <>
        {/* <LoginPage /> */}
        <SignupPage />
      </>
    </Provider>
  )
}

export default App
