import "./NavBar.css";
import {Link} from "react-router-dom";

function NavBar(){
    return(
        <nav className = "navbar">
            <ul>
                <li><Link to="/about"><div className ={({ isActive }) => isActive ? "active" : ""}>about</div></Link></li>
                <li><Link to="/experiences"><div className = {({ isActive }) => isActive ? "active" : ""}>experiences</div></Link></li>
                <li><Link to ="/projects"><div className = {({ isActive }) => isActive ? "active" : ""}>projects</div></Link></li>
                <li><Link to="/contact"><div className = {({ isActive }) => isActive ? "active" : ""}>contact</div></Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;