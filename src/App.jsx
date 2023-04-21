import React from "react";
import { Intro } from "./global/intro/Intro";
import ThemeProvider from "./theme";

const App = () => {
  return (
    <ThemeProvider>
      <Intro />
    </ThemeProvider>
  );
};

export default App;
