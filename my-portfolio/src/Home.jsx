import React from "react";
import Profile1 from './assets/profile1.jpeg'
import Profile2 from './assets/profile2.jpeg'

function Home(){
    return(<>
    {/* Home Page */}
    <div className="hero">
        <div className="nav-bar">
            <nav>
                <h2><a href="#" className="logo">N<span>J</span></a></h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Reviews</a></li>
                </ul>
                <button type="button"><a href="#">Contact Me</a></button>
            </nav>
        </div>
        <div className="heroo">
            <p>HELLO</p>
            <h1>I'm Nadice <span>Jasmine</span></h1>
            <h2>A Fullstack Developer</h2>
            <button type="button"><a href="#">About</a></button>
            <button type="button"><a href="#">Contact Me</a></button>
        </div>
        <div className="image">
            {/* <img src={Profile1} alt="Profile" width={400}/> */}
            <img src={Profile2} alt="Profile" width={350}/>
        </div>
    </div>
    {/* About Page */}
    <div className="hero2" id="about">
        <div className="heroo2">
            <div className="heroo22">
                 <div className="about">
        <h2>Skills</h2>
        <p>Lorem ipsum dolor si<br />t amet consectetur adipisicing elit.<br /> Earum est quasi velit praesentium<br /> magnam in sint nesciunt facilis<br /> debitis quibusdam, architecto, totam<br /> natus sed dolorum illo odit<br /> doloribus ut inventore?</p>
        </div>

        <div className="about">
        <h2>Education</h2>
        <p>Lorem ipsum dolor si<br />t amet consectetur adipisicing elit.<br /> Earum est quasi velit praesentium<br /> magnam in sint nesciunt facilis<br /> debitis quibusdam, architecto, totam<br /> natus sed dolorum illo odit<br /> doloribus ut inventore?</p>
        </div>

        <div className="about">
        <h2>Values</h2>
        <p>Lorem ipsum dolor si<br />t amet consectetur adipisicing elit.<br /> Earum est quasi velit praesentium<br /> magnam in sint nesciunt facilis<br /> debitis quibusdam, architecto, totam<br /> natus sed dolorum illo odit<br /> doloribus ut inventore?</p>
        </div>
        </div>
            </div>

        <div className="resume-button">
            <button type="button">Download Resume</button>
        </div>
    </div>
    {/* Services Page */}
    <div className="services">
        <div className="service-container">
            <div className="sevice-heading">
                <h2>Services</h2>
            </div>
            <div className="service-content1">
                <div className="skills">
                    <h3>Responsive Web Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
                <div className="skills">
                    <h3>UI/UX Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
                <div className="skills">
                    <h3>Single Page Applications (SPA)</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
            </div>
            <div className="service-content2">
                <div className="skills">
                    <h3>Responsive Web Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
                <div className="skills">
                    <h3>Responsive Web Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
                <div className="skills">
                    <h3>Responsive Web Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
            </div>
        </div>
    </div>
    {/* Reviews Page */}
    <div></div>
    {/* Contact Page */}
    <div></div>
    </>);
}

export default Home

