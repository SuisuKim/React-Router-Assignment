import * as React from "react";
import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import Layout from "./components/layout";
import { useEffect, useRef } from "react";





import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Project from './pages/project.jsx'
import Contact from './pages/contact.jsx'
import NoMatch from './pages/noMatch.jsx'

export default function App() {

  return (

    <div>


      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project" element={<Project/>} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        </Route>
      </Routes>
      
      



    </div>
  );
}





