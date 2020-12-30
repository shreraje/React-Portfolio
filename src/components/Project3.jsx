import React from 'react';
import Image from '../Assets/Images/project-3 screenshot.png';
import "materialize-css/dist/css/materialize.min.css";

function Project3 () {
    return (
        <div className="container" style= {{width: "100%"}}>
            <div className="col s12 m8 offset-m2 l6 offset-l8 card-panel hoverable">
                <h5 className="header" style={{color: "black" }}><b>Class Project 1: Timed Code Quiz</b></h5>
                <div className="card horizontal">
                    <div className="card-image">
                    <img src= {Image} alt="Project1 Screenshot"></img>
                    </div>
                    <div className="card-stacked">
                        <span className=" center-align">
                            <p>This Code Quiz application is a timed quiz consisting of a series of multiple-choice questions. As users start the quiz after entering their name, a series of questions will be displayed, and the time counter will count down from 60 seconds to 0 second. For each right answer for the question, 10 points will be awarded and for each wrong answer, 5 points will be deducted from the total points. Also, if a user completes a quiz before timer gets to zero, timer stops. Total Score will be stored in a local storage and will be displayed on the screen at the end of the quiz.
                            </p>
                            <p> <b>Technologies used:</b> HTML, CSS and JavaScript. </p>
                        </span>
                        <div className="card-action">
                            <p><b>Links to check out this project:</b></p>
                            <a href="https://github.com/shreraje/Code_Quiz" target="_blank"><b>URL of GitHub repository</b></a>
                            <a href="https://shreraje.github.io/Code_Quiz/" target="_blank"><b>URL of deployed application</b></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );  
};

export default Project3;