import React from 'react'
import './footer.css'
const Footer = () => {
  return (
   
   <footer className="nf-footer">
  <div className="nf-container">

    {/* Social Icons */}
    <div className="nf-social">
      <a href="#"><i className="fab fa-facebook-f"></i></a>
      <a href="#"><i className="fab fa-instagram"></i></a>
      <a href="#"><i className="fab fa-twitter"></i></a>
      <a href="#"><i className="fab fa-youtube"></i></a>
    </div>

    {/* Links */}
    <ul className="nf-links">
      <li><a href="#">Audio Description</a></li>
      <li><a href="#">Investor Relations</a></li>
      <li><a href="#">Privacy</a></li>
      <li><a href="#">Contact Us</a></li>

      <li><a href="#">Help Center</a></li>
      <li><a href="#">Jobs</a></li>
      <li><a href="#">Legal Notices</a></li>
      <li><a href="#">Do Not Sell or Share My Personal Information</a></li>

      <li><a href="#">Gift Cards</a></li>
      <li><a href="#">Netflix Shop</a></li>
      <li><a href="#">Cookie Preferences</a></li>
      <li><a href="#">Ad Choices</a></li>

      <li><a href="#">Media Center</a></li>
      <li><a href="#">Terms of Use</a></li>
      <li><a href="#">Corporate Information</a></li>
    </ul>

    {/* Copy */}
    <p className="nf-copy">© 1997-2025 Netflix, Inc.</p>
  </div>
</footer>


  )
}

export default Footer