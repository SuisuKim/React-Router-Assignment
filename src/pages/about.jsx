import "../css/about.css"; 
import React, {useRef, useEffect, useLayoutEffect,useState} from "react";
import {gsap} from "gsap";

export default function About() {

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
      <div className="about" ref={setFade}>
        <h2 className="heading-about">About Me</h2>
        <p className="intro-about">
          <span className="hello-about">Hello!</span> 
          My name is <span className="name">Suyeon Kim</span>,<br></br> an aspiring frontend web developer.
          I believe that the more I experience the more I become creative. Every
          experience inspires me. Currently, the most inspiring experience is the time
          I spent in Japan. Living in Japan for one year, I learned their language and
          culture, and I realized that the culture is embodied in the language. This
          enlightenment led me to have an interest in computer languages. Surrounded
          by digital environments, I wanted to learn how people make visually attractive
          designs with a computer, especially by using computer languages. After
          learning various hard skills and doing some projects, I realized that creating
          gives me a sense of achievement and keeps me motivated.
        </p>
        
      </div>
    );
  }
  