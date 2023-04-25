import React from "react";
import { Intro } from "./global/intro/Intro";
import ThemeProvider from "./theme";
import Particules from "./global/particules/Particules";
import { Box, CssBaseline } from "@mui/material";
import Navbar from "./global/navbar/Navbar";
import Hero from "./section/hero/Hero";
import Skills from "./section/skills/skills";

const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Navbar />
      <Hero />
      <Skills />
      <Particules />
    </ThemeProvider>
  );
};

export default App;
