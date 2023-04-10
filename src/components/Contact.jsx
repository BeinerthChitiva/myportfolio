import "./Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin  } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'

function Contact(){
    return(
        <section className="contact" id="contact">
            <div className="container">
                <div className="contact__content">
                    <div className="contact__title">
                        <p>Contact</p>
                        <h3>Don't be shy! Hit me up! 👇</h3>
                    </div>
                    <div className="contact__icons">
                        <div className="contact__icon-box">
                            <span>
                                <FontAwesomeIcon icon={faLinkedin} className="contact-logo"/>
                            </span>
                            <div className="contact__info">
                                <h3>LinkedIn</h3>
                                <a href="https://www.linkedin.com/in/beinerth-chitiva/">Beinerth Chitiva M.</a>
                            </div>
                        </div>
                        <div className="contact__icon-box">
                            <span>
                                <FontAwesomeIcon icon={faMailBulk} className="contact-logo"/>
                            </span>
                            <div className="contact__info">
                                <h3>Mail</h3>
                                <a href="mailto:beinerthps4@gmail.com">beinerthps4@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;