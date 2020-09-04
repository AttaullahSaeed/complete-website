import React from 'react'
import atta from './images/m4.jpg';
import ars from './images/ars.jpg';

import t2 from './images/tahir.jpg';
import umar from './images/umar.jpg';


const Services = () => {
    return (
        <div>
            <section id="services">
    <div className="services container">
      <div className="service-top">
        <h1 className="section-title jan">Serv<span>i</span>ces</h1>
        <hr></hr>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum deleniti maiores pariatur assumenda quas magni et, doloribus quod voluptate quasi molestiae magnam officiis dolorum, dolor provident atque molestias voluptatum explicabo!</p>
      </div>
      <div className="service-bottom">
      <div className="service-item ">
          <div className="icon"><img src={atta} alt="atta"/></div>
          <h2>Atta Ullah Saeed</h2>
          <h3>React Js Developer</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed architecto placeat beatae tenetur officia quod</p>
        </div>
        <div className="service-item">
        <div className="icon"><img src={t2} alt="atta"/></div>
        <h2>Tahir Mahmood</h2>
          <h3>React Js Developer</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed architecto placeat beatae tenetur officia quod</p>
        </div>
        <div className="service-item">
        <div className="icon"><img src={ars} alt="atta"/></div>
        <h2>M Arshan</h2>
          <h3>React Js Developer</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed architecto placeat beatae tenetur officia quod</p>
        </div>
        <div className="service-item">
        <div className="icon"><img src={umar} alt="atta"/></div>
        <h2>M Umar</h2>
          <h3>Word Press</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed architecto placeat beatae tenetur officia quod</p>
        </div>
      </div>
    </div>
  </section>
        </div>
    )
}

export default Services;
