import "./Navstyles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify  } from '@fortawesome/free-solid-svg-icons'


function Navbar(){
    return(
        <nav>
            <h3 className="logo">Beinerth Chitiva M.</h3>
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="mobile-menu">
                <FontAwesomeIcon icon={faAlignJustify}/>
            </div>
        </nav>
    )
}

export default Navbar;
