import React from "react";
import author from "../IMG_1818.jpg";

const AboutMe = () => {
    return (
        <div id="about"className="container py-5">
          <div className="row">
          <div className="col-lg-6 col-xm-12">
              <div className="photo-wrap mb-5">
                <img className="profile-img" src={author} alt="Picture of author"/>
              </div>
              </div>
              <div className="col-lg-6 col-xm-12">
                <h1 style={{color: '#800000'}}> About Me </h1>
                <p>
                    Hello, My name is Hussein Fakih, and I'm currently a senior majoring in computer science at Wayne State University in Detroit. 
                    I’ve taken many classes such as(software Engineering, Web Development, DataBase Managment..) and had an internship as a Web Developer that solidified my passion for computer science, and helped me become a quick and adaptable learner.
                </p>
                </div>
            </div>
        </div>
        
    )
}

export default AboutMe
