import React from "react";
import ThemeProvider from "./theme";
import Particules from "./global/particules/Particules";
import { CssBaseline } from "@mui/material";
import Navbar from "./global/navbar/Navbar";
import Hero from "./section/hero/Hero";
import Skills from "./section/skills/skills";
import Project from "./section/project/Project";
import Experience from "./section/experience/Experience";
import Contact from "./section/contact/Contact";
import { useRef } from "react";
import Footer from "./global/footer/footer";

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
      <Skills sectionRef={navigationRefs.skills} />
      <Project sectionRef={navigationRefs.project} />
      <Experience sectionRef={navigationRefs.experience} />
      <Contact sectionRef={navigationRefs.contact} />
      <Particules />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
