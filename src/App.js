import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Navbar/Navbar.jsx';
import Home from './Home/Home.jsx';
import Projects from './Projects/Projects.jsx';
import Resumee from './Resumee/Resumee.jsx';
import About from './About/About.jsx';
import Contacts from './Contacts/Contacts';

function App() {
  return (
    <>
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/projects" element ={<Projects/>}/>
          <Route path="/resumee" element ={<Resumee/>}/>
          <Route path="/about" element ={<About/>}/>
          <Route path="/contacts" element ={<Contacts/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
