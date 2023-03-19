import { Link, Outlet, NavLink } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";
import {useRef} from "react";

import "../css/layout.css"; 
import About from "../pages/about"
import Home from "../pages/home"
import Project from "../pages/project"
import Contact from "../pages/contact"


export default function Layout() {

    const navRef = useRef();

    const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav");
    }


    return (
      <div>


        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
        <nav ref={navRef}>
          <ul>
            <li>
              <NavLink to="/" end>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/project">Project</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}> 
              <FaTimes/>
            </button>
          </ul>
        </nav>

        <button className="nav-btn" onClick={showNavbar}>
          <FaBars/>
        </button>
  
    
  
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <Outlet />
      </div>
    );
  }