import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub  } from '@fortawesome/free-brands-svg-icons'


function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="footerc">
                    <h3>
                        Copyright © 2023. All rights are reserved.
                    </h3>
                    <div className="footerc__socials">
                        <a href="https://www.linkedin.com/in/beinerth-chitiva/" aria-label="linkedin" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="footer-logo"/>
                        </a>
                        <a href="https://github.com/BeinerthChitiva" aria-label="github" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="footer-logo"/>
                        </a>
                    </div>
                </div>
            </div>            
        </footer>
    )
}

export default Footer;