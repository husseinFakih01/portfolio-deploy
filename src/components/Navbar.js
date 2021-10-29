import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";


const Navbar =() =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
    <div className="container">
 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon ={faBars}  style={{color: "#fff" }}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      
    <li className="nav-item">
        <Link smooth={true} to="home" offset={-110} className="nav-link" href="#">Home</Link>
      </li>
      <li className="nav-item">
       <Link smooth={true} to="exper" offset={-110} className="nav-link" href="#">Experience</Link>
       
      </li>
      <li className="nav-item">
        <Link  smooth={true} to="about" offset={-110} className="nav-link" href="#">About Me</Link>
      </li>
      
     
    </ul>
  </div>
  </div>
</nav>

    )

}

export default Navbar;