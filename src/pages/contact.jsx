import "../css/contact.css"; 
import React, {useRef, useEffect, useLayoutEffect,useState} from "react";
import {gsap} from "gsap";


export default function Contact() {


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
    <div className="contact" ref={setFade}>
      <h2 className="heading-contact">Contact</h2>
      <p className="contact-para">I would love to hear about your project and
        how I could help. Please fill in the form, and 
        I'll get back to you as soon as possible.
      </p>

      <fieldset>
        <legend></legend>
        <form action="
        " method="post" className="contact-form">
          
          <div className="field-holder">
            <input id="name" type="text" required aria-required="true" />
            <label htmlFor="name" aria-label="Enter name" >NAME*</label>
          </div>

          <div className="field-holder">
            <input id="email" type="text" required aria-required="true" />
            <label htmlFor="email" aria-label="Enter email">EMAIL*</label>
          </div>
        
          <div className="field-holder">
            <textarea id="message" rows="10" required aria-required="true"/>
            <label htmlFor="message" aria-label="Enter message" >MESSAGE*</label>
          </div>
          
          <p>* indicates requried field.</p>

          <input className="submit" type="submit" value= "SEND"/>
        </form>

      </fieldset>
    </div>
  );
}
