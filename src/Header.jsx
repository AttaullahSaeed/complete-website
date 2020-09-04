import React from 'react'
import { NavLink } from 'react-router-dom'



const Home = () =>{

  
    return (
      <>
      
           <section id="header">
    <div className="header container">
      <div className="nav-bar">
        <div className="brand">
          <a href="#hero"><h1><span>A</span>TTA <span></span>SAEED</h1></a>
        </div>
        
        <div className="nav-list">
          <div className="hamburger"><div className="bar"></div></div>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="projects">Projects</NavLink></li>
            <li><NavLink to="/about" >About</NavLink></li>
            <li><NavLink to="contact">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
    
  </section>
      </>
    )
}

export default Home;