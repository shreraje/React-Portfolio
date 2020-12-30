import React from 'react';
import Image from '../Assets/Images/project-2 screenshot.png';
import "materialize-css/dist/css/materialize.min.css";

function Project2() {
    return (
        <div className="container" style= {{width: "100%"}}>
            <div className="col s12 m8 offset-m2 l6 offset-l8 card-panel hoverable">
                <h5 className="header" style={{color: "black" }}><b>Group Project 2: Frugal</b></h5>
                <div className="card horizontal">
                    <div className="card-image">
                    <img src= {Image} alt="Project1 Screenshot"></img>
                    </div>
                    <div className="card-stacked">
                        <span className=" center-align">
                            <p>This Frugal App allows you to budget your finances, log your income and expenses, and invest in your future. As users, we want to be able to enter our individual income and expenses and have the app store that information so we can efficiently manage our finances.
                            </p>
                            <p><b>Created/Contributed by:</b> Jarom Plewe, Tony Rivas, Rajendra Shrestha, and Amanda Greaves</p>
                            <p> <b>Technologies used:</b> JavaScript, Chart.js, Handlebars, CSS, Node, Materialize, Express, MySQL2, Sequelize, Dotenv, JAWSDB, MySQL, etc. </p>
                        </span>
                        <div className="card-action">
                            <p><b>Links to check out this project:</b></p>
                            <a href="https://github.com/cynesthete/frugal/" target="_blank"><b>URL of GitHub repository</b></a>
                            <a href="https://desolate-peak-02102.herokuapp.com/" target="_blank"><b>URL of Heroku deployed application</b></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );  
};

export default Project2;

