import "./App.css";
import LoginPage from "./components/auth/LoginPage";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";
import SignupPage from "./components/auth/SignupPage";
import { Routes, Route } from "react-router-dom";
// import HomePage from './components/home/HomePage'
import IncorrectPage from "./components/auth/IncorrectPage";
import ForgotPassword from "./components/auth/ForgotPassword";
import { lazy, Suspense, useEffect } from "react";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { setToken } from "./redux/authSlice";

const HomePage = lazy(() => import("./components/home/HomePage"));

function InitAuth(){
  const dispatch=useDispatch();
  useEffect(()=>{
    const token=localStorage.getItem("token");
    if(token){
      dispatch(setToken(token))
    }
  },[dispatch]);
  return null
}

function App() {
  return (
    <Provider store={store}>
      <InitAuth />
      <Suspense fallback={<div className="text-center mt-10">Dashboard Loading...</div>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="log-in" element={<LoginPage />} />
          <Route path="sign-up" element={<SignupPage />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route
            path="home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<IncorrectPage />} />
        </Routes>
      </Suspense>
    </Provider>
  );
}


export default App;
