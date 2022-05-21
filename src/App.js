import './App.css';
import {Routes, Route, BrowserRouter as Router, Link} from "react-router-dom"
import Register from './components/auth/Register'
import HomePage from './pages/Home.page';
import Nav from "./components/layouts/Navbar"
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
        <Nav/>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='register' element={<Register/>}/>      
      </Routes>
    </Router>
  );
}

export default App;
