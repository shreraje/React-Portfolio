import React from 'react';
import Image from '../../Assets/Images/portfolio.JPG';
import "materialize-css/dist/css/materialize.min.css";

function Welcome() {
    return (
        <div className="container" style= {{width: "100%"}}>
            <div className="col s12 m8 offset-m2 l6 offset-l8">
                <h4 className="header" style= {{color: "aliceblue"}}><b>About me</b></h4>
                <div className="card-panel grey lighten-5 z-depth-1">
                    <div className="card-image">
                    <img src= {Image} alt="Raj Graduation" className="circle responsive-img"></img>
                    </div>
                    <div className="card-stacked">
                        <span className=" center-align">
                            <p><b>“Curiosity leads to knowledge. Knowledge leads to understanding. Understanding leads to love. Love leads to harmony. So, Be curious."</b></p>
                            <p><b>-By Sabina Nore</b></p>
                            <br></br>
                            <p>Hello, My name is <b>Rajendra Shrestha</b>, a Full Stack Web Developer. At first, it was curiosity, to learn about the coding that guided me to seek a career in web-designing as a Full Stack Web Developer, even after completion of my undergraduate degree in Microbiology and graduate degree in Environmental Science and Management.</p>
                            <br></br>
                            <h6 style= {{textAlign: "left"}}> <b>Skills, I have learned so far:</b> </h6>
                            <p>HTML, CSS, Bootstrap, JavaScript, APIs, Node.js, Express.js, Express Handlebars, MySQL, MVC, ORM, MongoDB, React.js, Objective Oriented Programming (OOP).</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;