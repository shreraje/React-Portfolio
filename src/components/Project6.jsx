import React from 'react';
import Image from '../Assets/Images/budget_tracker_screenshot.png';
import "materialize-css/dist/css/materialize.min.css";

function Project6 () {
    return (
        <div className="container" style= {{width: "100%"}}>
            <div className="col s12 m8 offset-m2 l6 offset-l8 card-panel hoverable">
                <h5 className="header" style={{color: "black" }}><b>Class Project 4: Online/Offline Budget Tracker</b></h5>
                <div className="card horizontal">
                    <div className="card-image">
                    <img src= {Image} alt="Project1 Screenshot"></img>
                    </div>
                    <div className="card-stacked">
                        <span className=" center-align">
                            <p>The main objective of this project is to add functionality to our existing Budget Tracker application to allow for offline access and functionality. In this app, the user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.
                            </p>
                            <p> <b>Technologies used:</b> HTML5, CSS, JavaScript, Node.js, MongoDB, IndexDB Storage, Progressive Web App(PWA- Manifest, Service Worker) & Chart.js. </p>
                        </span>
                        <div className="card-action">
                            <p><b>Links to check out this project:</b></p>
                            <a href="https://github.com/shreraje/PWA-Budget-Tracker" target="_blank"><b>URL of GitHub repository</b></a>
                            <a href="https://gentle-beach-75025.herokuapp.com/" target="_blank"><b>URL of Heroku deployed application</b></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );  
};

export default Project6;