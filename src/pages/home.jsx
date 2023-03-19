
import "../css/home.css"; 
import React, {useRef, useEffect, useLayoutEffect,useState} from "react";
import {gsap} from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import logo from '../img/logo.png'




export default function Home() {

    const homeRef = useRef(null);



    const [fade, setFade] = useState(null);
    useLayoutEffect(() => {
      if (!fade) 
        return;
        gsap.from(fade, {
          opacity:0,
          duration:1,
          delauy:1
      });
    }, [fade]);




    return (

      <div className="home" ref={setFade}>

        <div>
          <section className="logo">
            <img className="img-logo" src={logo} alt="logo" />
            
            <div className="intro">
              <h1>Hello!</h1> 
              <h1>I'm <span className="name-home">Suyeon Kim</span>.</h1>
              <h3>Based in Toronto, I'm a front-end developer passionate
              about building accessible web app that users love
              </h3>

              <ul className="social-home">
                <li>
                  <a href="https://www.linkedin.com/in/suyeon-kim-02642a267/" target="_blank">
                   <FaLinkedin/>
                 </a>
                </li>
                <li>
                  <a href="https://github.com/SuisuKim" target="_blank">
                   <FaGithub/>
                  </a>
                </li>
            </ul>
            </div>
          </section>

        </div>

      </div>
    );
  }