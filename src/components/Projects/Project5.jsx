import React from 'react';
import Image from '../../Assets/Images/burger.png';
import "materialize-css/dist/css/materialize.min.css";

function Project5 () {
    return (
        <div className="container" style= {{width: "100%"}}>
            <div className="col s12 m8 offset-m2 l6 offset-l8 card-panel hoverable">
                <h5 className="header" style={{color: "black" }}><b>Class Project 3: Burger Logger</b></h5>
                <div className="card horizontal">
                    <div className="card-image">
                    <img src= {Image} alt="Project1 Screenshot"></img>
                    </div>
                    <div className="card-stacked">
                        <span className=" center-align">
                            <p>Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, app will display the burger's name on the left side of the page -- "Not Devoured Yet!". Each burger in the waiting area also has a "Devour!" button. When the user clicks it, the burger will move to the right side of the page-- "Devoured!". User can delete devoured burger on the right side of the page by clicking "Delete!" button on right side of the devoured burger's name App will store every burger in a database, whether devoured or not.
                            </p>
                            <p> <b>Technologies used:</b> Node.js, MySQL, Express, Express-Handlebars, Dotenv, JAWSDB-MySQL, JavaScript, Heroku, Jquery, HTML & CSS. </p>
                        </span>
                        <div className="card-action">
                            <p><b>Links to check out this project:</b></p>
                            <a class="blue-text text-darken-2" href="https://github.com/shreraje/A-Burger-Logger/" target="_blank" rel="noopener noreferrer"><b>URL of GitHub repository</b></a>
                            <a class="blue-text text-darken-2" href="https://still-coast-40502.herokuapp.com/" target="_blank" rel="noopener noreferrer"><b>URL of Heroku deployed application</b></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );  
};

export default Project5;