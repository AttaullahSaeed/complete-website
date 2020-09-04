import React from 'react'
import pic from './images/img-1.png';
import pic1 from './images/img-2.png';
import pic2 from './images/pic2.jfif';
import pic3 from './images/pic3.jfif';
import pic4 from './images/pic4.jfif';

export const Projects = () => {
    return (
        <div>
             <section id="projects">
    <div className="projects container">
      <div className="projects-header">
        <h1 className="section-title jan">Recent <span>Projects</span></h1>
      </div>
      <div className="all-projects">
        <div className="project-item">
          <div className="project-info">
            <h1>Project 1</h1>
            <h2>Coding is Love</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
          </div>
          <div className="project-img">
            <img src={pic3} alt="img"/>
          </div>
        </div>
        <div className="project-item">
          <div className="project-info">
            <h1>Project 2</h1>
            <h2>Coding is Love</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
          </div>
          <div className="project-img">
            <img src={pic} alt="img"/>
          </div>
        </div>
        <div className="project-item">
          <div className="project-info">
            <h1>Project 3</h1>
            <h2>Coding is Love</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
          </div>
          <div className="project-img">
            <img src={pic2} alt="img"/>
          </div>
        </div>
        <div className="project-item">
          <div className="project-info">
            <h1>Project 4</h1>
            <h2>Coding is Love</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
          </div>
          <div className="project-img">
            <img src={pic3} alt="img"/>
          </div>
        </div>
        <div className="project-item">
          <div className="project-info">
            <h1>Project 5</h1>
            <h2>Coding is Love</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
          </div>
          <div className="project-img">
            <img src={pic4} alt="img"/>
          </div>
        </div>
      </div>
    </div>
  </section>
        </div>
    )
}
export default Projects;
