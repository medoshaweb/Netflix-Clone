import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NetflixLogo from "../../assets/images/netflix_logo_icon.png";
import { useNavigation } from '../../context/NavigationContext';

const Header = () => {
  const { selectedCategory, setSelectedCategory } = useNavigation();

  const handleScrollToTop = () => {
    setSelectedCategory('Home');
  };

  const handleNavClick = (itemName) => {
    setSelectedCategory(itemName);
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
            <li onClick={() => handleNavClick('Home')} className={selectedCategory === 'Home' ? 'active' : ''}>Home</li>
            <li onClick={() => handleNavClick('TV Shows')} className={selectedCategory === 'TV Shows' ? 'active' : ''}>TV Shows</li>
            <li onClick={() => handleNavClick('Movies')} className={selectedCategory === 'Movies' ? 'active' : ''}>Movies</li>
            <li onClick={() => handleNavClick('Games')} className={selectedCategory === 'Games' ? 'active' : ''}>Games</li>
            <li onClick={() => handleNavClick('New & Popular')} className={selectedCategory === 'New & Popular' ? 'active' : ''}>New & Popular</li>
            <li onClick={() => handleNavClick('My List')} className={selectedCategory === 'My List' ? 'active' : ''}>My List</li>
            <li onClick={() => handleNavClick('Browse by Language')} className={selectedCategory === 'Browse by Language' ? 'active' : ''}>Browse by Language</li>
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
