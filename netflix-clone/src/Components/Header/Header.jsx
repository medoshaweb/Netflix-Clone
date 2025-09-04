import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";;
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NetflixLogo from "../../assets/images/netflix_logo_icon.png";

const Header = () => {
  return (
    <>
              <nav className ="navbar transparent">
            <div className ="nav-left">
            <ul>
                <li><img src={NetflixLogo} width="95" alt="Netflix Logo" /></li>
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
                    
                    <li> <SearchIcon /></li>
                    <li>Kids</li>
                    <li> <NotificationsNoneIcon /></li>
                    <li> <AccountBoxIcon /></li>
                    <li> <ArrowDropDownIcon /></li>
                    
                </ul>
            </div>
        </nav>
    </>
  );
};

export default Header;
