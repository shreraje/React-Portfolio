import React from 'react';
import Image from '../../Assets/Images/portfolio.JPG';
import './Header.css';
import "materialize-css/dist/css/materialize.min.css";

function Welcome() {
    return (
        <div className="container" style= {{width: "100%"}}>
            <div className="col s12 m8 offset-m2 l6 offset-l8">
                <h4 className="header"><b>About me</b></h4>
                <div className="card horizontal">
                    <div className="card-image">
                    <img src= {Image} style ={{width:'70%'}} alt="Portfolio"></img>
                    </div>
                    <div className="card-stacked">
                        <span className=" center-align">
                            <p>Hello, My name is <b>Rajendra Shrestha</b>, a Full Stack Web Developer. At first, it was curiosity, to learn about the coding that guided me to seek a career in web-designing as a Full Stack Web Developer, even after completing my undergraduate degree in Microbiology and graduate degree in Environmental Science and Management. I was more fascinated by the idea of how our day-to-day social websites and other websites were designed, programmed and finally turned out to be a user-friendly webpages.
                            </p>
                            <br></br>
                            <p> <b>Skills:</b> HTML, CSS, Bootstrap, JavaScript, APIs, Node.js, Express.js, Express Handlebars, MySQL, MVC, ORM, MongoDB, React.js, Objective Oriented Programming (OOP). </p>
                        </span>
                        <div className="card-action">
                            <p><b>Follow me to discover more about me:</b></p>
                            <a href="https://github.com/shreraje">GitHub Link</a>
                            <a href="https://linkedin.com/in/rajendra-shrestha-54597679">LinkedIn Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;