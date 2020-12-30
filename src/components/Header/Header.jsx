import React from 'react';
import Image from '../../Assets/Images/portfolio.JPG';
import './Header.css';
import "materialize-css/dist/css/materialize.min.css";

function Welcome() {
    return (
        <div className="container">
            <div className="col s12 m8 offset-m2 l6 offset-l8">
                <h4 className="header"><b>About me</b></h4>
                <div className="card horizontal">
                    <div className="card-image">
                    <img src= {Image} alt="Raj Graduation"></img>
                    </div>
                    <div className="card-stacked">
                        <span className=" center-align">
                            <p>Hello, My name is <b>Rajendra Shrestha</b>, a Full Stack Web Developer. At first, it was curiosity, to learn about the coding that guided me to seek a career in web-designing as a Full Stack Web Developer, even after completing my undergraduate degree in Microbiology and graduate degree in Environmental Science and Management. I was more fascinated by the idea of how our day-to-day social websites and other websites were designed, programmed and finally turned out to be a user-friendly webpages.
                            </p>
                            <p> <b>Skills:</b> HTML, CSS, Bootstrap, JavaScript, APIs, Node.js, Express.js, Express Handlebars, MySQL, MVC, ORM, MongoDB, React.js, Objective Oriented Programming (OOP). </p>
                        </span>
                        <div className="card-action">
                            <p><b>Follow me to discover more about me:</b></p>
                            <a class="blue-text text-darken-2" href="https://github.com/shreraje" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub badge"></img>GitHub</a>
                                <a class="blue-text text-darken-2" href="https://linkedin.com/in/rajendra-shrestha-54597679" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/color/6h58/000000/linkedin.png" alt="LinkedIn badge"></img>LinkedIn</a>
                                <a class="blue-text text-darken-2" href="https://drive.google.com/file/d/1A4_ps2mP1oQqkgq_X84CFO9ZqUmRmUf9/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/ios-filled/50/000000/resume.png" alt="LinkedIn badge"></img>Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;