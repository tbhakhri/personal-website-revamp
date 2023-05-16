import "./NavBar.css";
import {Link} from "react-router-dom";

function NavBar(){
    return(
        <div className = "navbar">
            <div className ="my-name">
                <b><Link to="/"><div className = "option-individual">Tanya Bhakhri.</div></Link></b>
            </div>
            <div className ="options">
                <ul>
                    <Link to="/about"><div className = "option-individual">about</div></Link>
                    <Link to="/experiences"><div className = "option-individual">experiences</div></Link>
                    <Link to ="/projects"><div className = "option-individual">projects</div></Link>
                    <Link to="/contact"><div className = "option-individual">contact</div></Link>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;