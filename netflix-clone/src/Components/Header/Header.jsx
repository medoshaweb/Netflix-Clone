import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import NetflixLogo from "../../assets/images/netflix_logo_icon.png";

const Header = () => {
  return (
    <>
              <nav className ="navbar">
            <div className ="nav-left">
            <ul>
                <li><img src={NetflixLogo} alt="Netflix Logo" /></li>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Games</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Language</li>
                
            </ul>
            </div>
            <div className ="nav-right">
                <ul>
                    <li>
                        <input type="text" placeholder="Search..." />
                    </li>
                    <li>
                        <button>Search</button>
                    </li>
                    <li>Kids</li>
                    <li> <SearchIcon /></li>
                    <li className="user-profile">User Profile</li>
                </ul>
            </div>
        </nav>
    </>
  );
};

export default Header;
