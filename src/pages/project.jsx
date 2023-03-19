import "../css/project.css"; 
import React, {useRef, useEffect, useLayoutEffect,useState} from "react";
import {gsap} from "gsap";

export default function Project() {

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
    <div className="project" ref={setFade}>
      <h2 className="heading-project">Project</h2>

      <section className="projects">
        <ul className="websites">
          <li>
            <a href="#">
              <div className="websites-img"></div>
              Streaming Service
            </a>
          </li>
          <li>
            <a href="#">
              <div className="websites-img"></div>  
              Bootstrap</a>
          </li>
          <li>
            <a href="#">
              <div className="websites-img"></div>
              General Website</a>
          </li>
          <li>
            <a href="#">
              <div className="websites-img"></div>
              Current Weather App</a>
          </li>
        </ul>
      </section>
    </div>
  );
}
