import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NetflixLogo from "../../assets/images/netflix_logo_icon.png";

const Header = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (itemName) => {
    console.log(`Clicked: ${itemName}`);
    // You can add navigation logic here later
  };

  return (
    <>
      <nav className="navbar transparent">
        <button className="menu-toggle" id="menu-toggle">
          ☰
        </button>
        <div className="nav-left">
          <ul>
            <li onClick={handleScrollToTop}>
              <img src={NetflixLogo} width="70" alt="Netflix Logo" />
            </li>
            <li onClick={() => handleNavClick('Home')}>Home</li>
            <li onClick={() => handleNavClick('TV Shows')}>TV Shows</li>
            <li onClick={() => handleNavClick('Movies')}>Movies</li>
            <li onClick={() => handleNavClick('Games')}>Games</li>
            <li onClick={() => handleNavClick('New & Popular')}>New & Popular</li>
            <li onClick={() => handleNavClick('My List')}>My List</li>
            <li onClick={() => handleNavClick('Browse by Language')}>Browse by Language</li>
          </ul>
        </div>
        <div className="nav-right">
          <ul>
            <li onClick={() => handleNavClick('Search')}>
              <SearchIcon />
            </li>
            <li onClick={() => handleNavClick('Kids')}>Kids</li>
            <li onClick={() => handleNavClick('Notifications')}>
              <NotificationsNoneIcon />
            </li>
            <li onClick={() => handleNavClick('Account')}>
              <AccountBoxIcon />
            </li>
            <li onClick={() => handleNavClick('Menu')}>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
