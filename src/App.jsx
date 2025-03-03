import './App.css'
import LoginPage from './components/LoginPage'
import { Provider } from 'react-redux'
import store from './redux/store'
import SignupPage from './components/SignupPage'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import IncorrectPage from './components/IncorrectPage'
import ForgotPassword from './components/ForgotPassword'

function App() {

  return (
    <Provider store={store}>
      <>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='log-in' element={<LoginPage />} />
        <Route path='sign-up' element={<SignupPage />}></Route>
        <Route path='forgot-password' element={<ForgotPassword />}></Route>
        <Route path='home' element={<HomePage />}></Route>
        <Route path='*' element={<IncorrectPage />}></Route>
      </Routes>
      </>
    </Provider>
  )
}

export default App
