import "./NavBar.css";
import {Link} from "react-router-dom";

function NavBar(){
    return(
        <div className = "navbar">
            <div className ="my-name">
                <b><Link to="/"><div className = "option-individual">Tanya Bhakhri</div></Link></b>
            </div>
            <div className ="options">
                <ul>
                    <b><Link to="/about"><div className = "option-individual">about</div></Link></b>
                    <b><Link to="/experiences"><div className = "option-individual">experiences</div></Link></b>
                    <b><Link to ="/projects"><div className = "option-individual">projects</div></Link></b>
                    <b><Link to="/contact"><div className = "option-individual">contact</div></Link></b>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;