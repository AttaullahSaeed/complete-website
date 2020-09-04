import React from 'react'

import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <section id="footer">
    <div className="footer container">
      <div className="brand"><h1><span>Atta</span> <span>Ullah</span> Saeed</h1></div>
      <h2>Your Complete Web Solution</h2>
      <div className="social-icon">
        <div className="social-item">
          <a href="https://www.facebook.com/profile.php?id=100006917504196"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png"/></a>
        </div>
        <div className="social-item">
          <a href="https://twitter.com/AttaUllahSaeed9"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png"/></a>
        </div>
        <div className="social-item">
          <a href="https://www.instagram.com/attaullah_saeed_77/"><img src="https://img.icons8.com/bubbles/100/000000/twitter.png"/></a>
        </div>
        <div className="social-item">
          <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/behance.png"/></a>
        </div>
      </div>
      <p>Copyright © 2020 Atta. All rights reserved</p>
    </div>
  </section>
        </div>
    )
}

export default Footer
