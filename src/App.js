import './App.css';
import {Routes, Route, BrowserRouter as Router, Navigate} from "react-router-dom"
import Register from './components/auth/Register'
import HomePage from './pages/Home.page';
import Nav from "./components/layouts/Navbar"
import Login from "./components/auth/Login"
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function(config){
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
})
function App() {
  return (
    <Router>
        <Nav/>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='register' element={localStorage.getItem("auth_token") ? (<Navigate replace to="/" />) : <Register/>}/>   
          <Route path='login' element={localStorage.getItem("auth_token") ? (<Navigate replace to="/" />) : <Login/>}/>   
          
          
      </Routes>
    </Router>
  );
}

export default App;
