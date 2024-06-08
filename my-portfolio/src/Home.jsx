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
                    <li><a href="#">About</a></li>
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
    <div></div>
    {/* Services Page */}
    <div></div>
    {/* Reviews Page */}
    <div></div>
    {/* Contact Page */}
    <div></div>
    </>);
}

export default Home

