import logo from './logo.svg';
import './App.css';
import Home from './Home/Home.js';
import NavBar from './components/NavBar/NavBar.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import Experience from './Experience/Experience.js';
import Projects from './Projects/Projects.js';
import Contact from './Contact/Contact.js';

function App() {
  return (
    <Router>
    <div className="App">
        <div className="nav">
            <NavBar/>
        </div>
        <div className = "body">
            <Routes>
                <Route exact path = "/" element = {<Home/>} />
                <Route path = '/experiences' element={<Experience />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    </div>
</Router>
  );
}

export default App;
