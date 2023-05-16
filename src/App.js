import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import NavBar from './NavBar.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './About.js';

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
                <Route path = "/about" element = {<About/>} />
            </Routes>
        </div>
    </div>
</Router>
  );
}

export default App;
