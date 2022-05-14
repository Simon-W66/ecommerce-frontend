import './App.css';
import {Routes, Route, BrowserRouter as Router, Link} from "react-router-dom"
import Register from './components/auth/Register'
import HomePage from './pages/Home.page';
import Nav from "./components/layouts/Navbar"
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
