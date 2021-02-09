import React from 'react';
import "materialize-css/dist/css/materialize.min.css";


function Footer() {
    return (
        <footer class="page-footer grey lighten-5">
            <div class="container" >
                <div class="row" style={{ display: "flex"}}>
                    <div class="col l6 s12">
                        <div className="card-action">
                            <h6 class="black-text"  style={{ marginBottom: ".2in"}}><b>Follow me to discover more:</b></h6>
                                <a class="blue-text text-darken-2" href="https://github.com/shreraje" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub badge"></img><b>GitHub</b></a>

                                <a class="blue-text text-darken-2" href="https://linkedin.com/in/rajendra-shrestha-54597679" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/color/6h58/000000/linkedin.png" alt="LinkedIn badge"></img><b>LinkedIn</b></a>
                                
                                <a class="blue-text text-darken-2" href="https://drive.google.com/file/d/1CyPeMUtdCNCMbkTiW5UcD6wEg6Eq7Yfx/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/ios-filled/50/000000/resume.png" alt="LinkedIn badge"></img><b>Resume</b></a>
                        </div>
                    </div>

                    <div className="col l6h5 offset-l2 s12" style={{ margin: "auto", width: "20%", color: "aliceblue" }}>
                        <h6 className="black-text" style={{ marginBottom: ".2in"}}><b>Contact me at:</b></h6>
                        <h6 className="blue-text "><b>Email: shrestharajendra899@gmail.com</b></h6>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
