import React from 'react'

import "./portfolio.scss";

const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
      <li className='active' >Featured</li>
      <li>Web Apps</li>
      <li>Mobile App</li>
      <li>Designing</li>
      <li>Branding</li>
      </ul>
      <div className='container'>
      <div className='item'>
      <img src="https://assets.entrepreneur.com/content/3x2/2000/20190612193425-GettyImages-1066987316-crop.jpeg" alt=''
      className='itemimg'
      />
      <h3>Quiz App</h3>

      </div>
      </div>
      </div>
  )
}

export default Portfolio