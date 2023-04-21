import { ThemeProvider as MuiProvider, createTheme } from "@mui/material";
import React from "react";
export const shades = {
  primary: {
    main: "#19376D",
    light: "#A5D7E8",
    dark: "#0B2447",
  },
};
const ThemeProvider = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: { ...shades.primary },
    },
  });
  return <MuiProvider theme={theme}> {children}</MuiProvider>;
};

export default ThemeProvider;
