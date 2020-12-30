import React from 'react';
import Image from '../Assets/Images/project-1 screenshot.png';
import "materialize-css/dist/css/materialize.min.css";

function Project1() {
    return (
        <div className="container" style= {{width: "100%"}}>
            <div className="col s12 m8 offset-m2 l6 offset-l8 card-panel hoverable">
                <h5 className="header" style={{color: "black" }}><b>Group Project 1: National Parks Adventure Generator</b></h5>
                <div className="card horizontal">
                    <div className="card-image">
                    <img src= {Image} alt="Project1 Screenshot"></img>
                    </div>
                    <div className="card-stacked">
                        <span className=" center-align">
                            <p>The National Parks adventure generator app was designed to help the user discover new parks/trails. It provides the user with helpful information about the parks, weather, and air quality. Informing the user with needed information to plan the perfect adventure.
                            </p>
                            <p><b>Created/Contributed by:</b> Aaron Hulka, Felipe Gaucin, Rajendra Shrestha, and Jon Jessee</p>
                            <p> <b>Technologies used:</b> HTML, CSS, Materialize.css, Moment.js, Google Fonts, JavaScript, jQuery, AJAX, APIs, etc. </p>
                        </span>
                        <div className="card-action">
                            <p><b>Links to check out this project:</b></p>
                            <a href="https://github.com/shreraje/National-Parks-Adventure-Generator" target="_blank"><b>URL of GitHub repository</b></a>
                            <a href="https://shreraje.github.io/National-Parks-Adventure-Generator/" target="_blank"><b>URL of deployed application</b></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );  
};

export default Project1;