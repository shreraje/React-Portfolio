import React from 'react';
import Image from '../Assets/Images/project-4 screenshot.png';
import "materialize-css/dist/css/materialize.min.css";

function Project3 () {
    return (
        <div className="container" style= {{width: "100%"}}>
            <div className="col s12 m8 offset-m2 l6 offset-l8 card-panel hoverable">
                <h5 className="header" style={{color: "black" }}><b>Class Project 2: Note Taker</b></h5>
                <div className="card horizontal">
                    <div className="card-image">
                    <img src= {Image} alt="Project1 Screenshot"></img>
                    </div>
                    <div className="card-stacked">
                        <span className=" center-align">
                            <p>This project is to create an application where user can write, save, retrieve and delete the data according to user choice. The notes will be stored in JSON file which acts as a database. This application was created using Express backend and save-retrieve note data from JSON file.
                            </p>
                            <p> <b>Technologies used:</b> Node.js, Express, JavaScript, HTML and CSS. </p>
                        </span>
                        <div className="card-action">
                            <p><b>Links to check out this project:</b></p>
                            <a href="https://github.com/shreraje/note-taker/" target="_blank"><b>URL of GitHub repository</b></a>
                            <a href="https://damp-stream-70179.herokuapp.com/" target="_blank"><b>URL of Heroku deployed application</b></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );  
};

export default Project3;