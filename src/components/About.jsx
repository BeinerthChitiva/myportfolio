import aboutimg from "../img/aboutimg.webp"
import fedev from "../img/fedev.svg"
import emoji from "../img/emoji.png"
import "./About.css"

function About(){
    return(
        <section className="about" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="img-side">
                        <img src={emoji} alt="work-emoji" className="work-emoji"/>
                        <img src={aboutimg} alt="about" className="img-side__main-img"/>
                        <span>
                            <img src={fedev} alt="front-end"/>
                        </span>
                    </div>
                    <div className="text-side">
                        <h4>About Me</h4>
                        <h3>
                            "A dedicated Front-End Developer
                            <br/>
                            <br/>
                            based in Bogotá, Colombia.📍"
                        </h3>
                        <p>
                            As a Semi-Senior Front-End Developer with over 3 years of experience, I possess an impressive arsenal of skills in React, JavaScript, HTML, CSS, MongoDB, Node.js and many other technologies needed to design, develop and deploy Web Applications.
                            I excel in designing and maintaining responsive websites that offer a smooth user experience.
                            My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques.
                            I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;