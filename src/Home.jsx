import React from 'react'
import { NavLink } from 'react-router-dom';
import Services from './Services';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
             <section id="hero">
    <div className="hero container">
      <div>
        <h1>Hello, <span></span></h1>
        <h1>My Name is <span></span></h1>
        <h1>Atta Ullah Saeed <span></span></h1>
        <NavLink to="projects" type="button" className="cta">Portfolio</NavLink>
      </div>
    </div>
  </section>
  <Services/>
  <Projects/>
  <About/>
  <Contact/>
        </div>
    )
}

export default Home;
