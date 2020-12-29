import React from 'react';
import "materialize-css/dist/css/materialize.min.css";


function Footer() {
    return (
        <footer class="page-footer yellow lighten-5">
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <h5 class="black-text"></h5>
                        <p class="grey-text text-lighten-4"></p>
                        <h6 class="black-text"><b>Follow me to discover more:</b></h6>
                        <ul>
                            <li><a class="blue-text text-darken-2" href="https://github.com/shreraje">GitHub Link</a></li>
                            <br></br>
                            <li><a class="blue-text text-darken-2" href="https://linkedin.com/in/rajendra-shrestha-54597679">LinkedIn Link</a></li>
                        </ul>
                    </div>

                    <div className="col l6h5 offset-l2 s12" style={{ margin: "auto", width: "40%" }}>
                        <h6 className="black-text"><b>Contact:</b></h6>
                        <h6 className="black-text">Phone: 817-480-3730</h6>
                        <h6 className="black-text ">Email: rajendrashr@gmail.com</h6>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
