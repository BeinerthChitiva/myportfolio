import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import "./Hero.css"
import BCM from "../img/bcm2.jpg"
import htmllogo from "../img/htmllogo.svg"
import csslogo from "../img/csslogo.svg"
import jslogo from "../img/jslogo.svg"
import reactlogo from "../img/reactlogo.svg"
import nodelogo from "../img/nodelogo.png"
import mongodb from "../img/mongodb.png"

function Hero(){
    return(
        <section id="home" className="hero">
            <div className="container">
                <div className="content">
                    <div className="hero-main">
                        <div className="hero-text">
                            <h1>Front-End React Developer</h1>
                            <p>
                                Hi, I'm Beinerth Chitiva. A Front-End React Developer based in Bogotá, Colombia. 📍
                            </p>
                            <span>
                                <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/beinerth-chitiva/">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/BeinerthChitiva">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </span>
                        </div>
                        <div className="hero-img">
                            <img src={BCM} alt="BCM"/>
                        </div>
                    </div>
                    <div className='skills'>
                        <p>Tech Stack</p>
                        <div className='logos'>
                            <ul>
                                <li>
                                    <img src={reactlogo} title="React JS" alt="program_img"/>
                                </li>
                                <li>
                                    <img src={jslogo} title="Javascript" alt="program_img"/>
                                </li>
                                <li>
                                    <img src={htmllogo} title="HTML5" alt="program_img"/>
                                </li>
                                <li>
                                    <img src={csslogo} title="CSS3" alt="program_img"/>
                                </li>
                                <li>
                                    <img src={mongodb} title="MongoDb" alt="program_img"/>
                                </li>
                                <li>
                                    <img src={nodelogo} title="Nodejs" alt="program_img"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;