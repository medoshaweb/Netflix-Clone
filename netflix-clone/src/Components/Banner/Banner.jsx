import React from 'react'
import './banner.css'

const Banner = () => {
  return (
    <header className="banner">
      <div className="banner-contents">
        <h5 className="banner-subtitle">N SERIES</h5>
        <h1 className="banner-title">TYLER PERRY'S<br />BEAUTY IN BLACK</h1>

        <div className="banner-buttons">
          <button className="btn btn-play">
            <i className="fas fa-play"></i> Play
          </button>
          <button className="btn btn-info">
            <i className="fas fa-info-circle"></i> More Info
          </button>
        </div>
      </div>

      <div className="banner-rating">
        <i className="fas fa-volume-up"></i>
        <span>TV-MA</span>
      </div>
    </header>
  )
}

export default Banner

