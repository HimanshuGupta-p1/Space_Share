import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import Avatar from "../Avatar/Avatar";
import { Button } from "bootstrap";
// import search from '../../assets/search-solid.svg'


function Navbar() {
  var User=null;
  const [click, setClick] = useState(false);
  const [user, Isuser] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      {/* <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Space Share
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "#fff"}} />
            ) : (
              <FaBars size={20} style={{ color: "#fff"}} />
            
            )}
          </div>
        </div>
      </nav> */}
      <nav className="navbar1">
        <h1 className="logo">
          Space Share
        </h1>
        <ul className="nav-ul">
          <li className="nav-li"><NavLink exact to="/" className="a">HOME</NavLink></li>
          <li className="nav-li"><NavLink exact to="/about" className="a">ABOUT</NavLink></li>
          <li className="nav-li"><NavLink exact to="/blog" className="a">PRICES</NavLink></li>
          <li className="nav-li"><NavLink exact to="/contact" className="a">FILE UPLOAD</NavLink></li>
          <li className="nav-li">
          { User === null ?
               <Link to="/Login" className="a">LOGIN</Link> :
               <>
                <Link to="/"><Avatar>A</Avatar></Link>
                <button>LOG OUT</button>
               </>
          }
          </li>

          
        </ul>
       
      </nav>
      
    </>
  );
}

export default Navbar;