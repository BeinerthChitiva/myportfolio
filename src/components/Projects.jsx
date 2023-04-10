import "./Projects.css"
import carrental from "../img/carrental.webp"
import ecom from "../img/ecom.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub  } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

function Projects(){
    return(
        <section className="project" id="projects">
            <div className="container">
                <div className="project-content">
                    <p>PORTFOLIO</p>
                    <h3>Each project is a unique piece of development 🧩</h3>
                    <div className="projects-grid">
                        <div class="pro pro__1 undefined">
                            <div className="pro__img">
                                <a target="_blank" href="https://car-rental-ten.vercel.app/" rel="noreferrer">
                                    <img src={carrental} alt="website"/>
                                </a>
                            </div>
                            <div className="pro__text">
                                <h3>
                                    Car Rental
                                    🚗
                                </h3>
                                <p>
                                    A car rental website is an online platform that allows users to rent cars for personal or business use.
                                    The website provides an interface for searching, comparing, and reserving cars.
                                </p>
                                <div className="stack">
                                    <p>React</p>
                                    <p>SCSS</p>
                                </div>
                                <div class="links">
                                    <a target="_blank" href="https://github.com/stefvndev/car-rental" rel="noreferrer">
                                        Code <FontAwesomeIcon icon={faGithub}/>
                                    </a>
                                    <a target="_blank" href="https://car-rental-ten.vercel.app/" rel="noreferrer">
                                        Live Demo <FontAwesomeIcon icon={faExternalLinkAlt }/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pro pro__1 reversed-proj">
                            <div className="pro__img">
                                <a target="_blank" href="https://minimalist-e-commerce.vercel.app/" rel="noreferrer">
                                    <img src={ecom} alt="website"/>
                                </a>
                            </div>
                            <div className="pro__text">
                                <h3>
                                    E-Commerce
                                    🛒
                                </h3>
                                <p>
                                    With a focus on simplicity and clean design, this store prioritizes user experience,
                                    making it easy for customers to find and purchase the products they need.
                                </p>
                                <div className="stack">
                                    <p>React</p>
                                    <p>CSS</p>
                                </div>
                                <div className="links">
                                    <a target="_blank" href="https://github.com/stefvndev/car-rental" rel="noreferrer">
                                        Code <FontAwesomeIcon icon={faGithub}/>
                                    </a>
                                    <a target="_blank" href="https://minimalist-e-commerce.vercel.app/" rel="noreferrer">
                                        Live Demo <FontAwesomeIcon icon={faExternalLinkAlt }/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;