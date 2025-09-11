import React from 'react'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import './footer.css'
const Footer = () => {
  return (
   
   <footer className="nf-footer">
  <div className="nf-container">

    {/* Social Icons */}
    <div className="nf-social">
      <a href="https://www.facebook.com/"><FacebookOutlinedIcon /></a>
      <a href="https://www.instagram.com/"><InstagramIcon /></a>
      <a href="https://www.x.com/"><XIcon /></a>
      <a href="https://www.youtube.com/"><YouTubeIcon /></a>
    </div>

    {/* Links */}
    <ul className="nf-links">
      <li><a href="#">Audio Description</a></li>
      <li><a href="#">Help Center</a></li>
      <li><a href="#">Gift Cards</a></li>
      <li><a href="#">Contact Us</a></li>

      <li><a href="#">Investor Relations</a></li>
      <li><a href="#">Jobs</a></li>
      <li><a href="#">Netflix Shop</a></li>
      <li><a href="#">Terms of Use</a></li>

      <li><a href="#">Privacy</a></li>
      <li><a href="#">Legal Notices</a></li>
      <li><a href="#">Cookie Preferences</a></li>
      <li><a href="#">Corporate Information</a></li>

      <li><a href="#">Contact Us</a></li>
      <li><a href="#">Do Not Sell or Share My Personal Information</a></li>
      <li><a href="#">Ad Choices</a></li>
    </ul>

    {/* Copy */}
    <p className="nf-copy">© 1997-2025 Netflix, Inc.</p>
  </div>
</footer>


  )
}

export default Footer