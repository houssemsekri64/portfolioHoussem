import React from "react";
import ThemeProvider from "./theme";
import Particules from "./global/particules/Particules";
import { CssBaseline } from "@mui/material";
import Navbar from "./global/navbar/Navbar";
import Hero from "./section/hero/Hero";
import MySkills from "./section/mySkills/Myskills";
import Project from "./section/project/Project";
import Experience from "./section/experience/Experience";
import Contact from "./section/contact/Contact";
import { useRef } from "react";
import FooterLast from "./global/footerlast/FooterLast";

const App = () => {
  const navigationRefs = {
    hero: useRef(null),
    skills: useRef(null),
    project: useRef(null),
    experience: useRef(null),
    contact: useRef(null),
  };
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 80,
      behavior: "smooth",
    });
  };
  return (
    <ThemeProvider>
      <CssBaseline />
      <Navbar
        navigationRefs={navigationRefs}
        scrollToSection={scrollToSection}
      />
      <Hero sectionRef={navigationRefs.hero} />
      <MySkills sectionRef={navigationRefs.skills} />
      <Project sectionRef={navigationRefs.project} />
      <Experience sectionRef={navigationRefs.experience} />
      <Contact sectionRef={navigationRefs.contact} />
      <Particules />
      <FooterLast />
    </ThemeProvider>
  );
};

export default App;
