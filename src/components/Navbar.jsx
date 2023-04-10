import "./Navbar.css"


function Navbar(){
    return(
        <nav className="navbar">
            <div className="container">
                <div className="nav-container">
                    <div className="nav-logo">
                        <h3>Beinerth Chitiva M.</h3>
                    </div>
                    <div className="nav-links">
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
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;