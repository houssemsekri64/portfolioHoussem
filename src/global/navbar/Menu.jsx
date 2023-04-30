import { Close as CloseIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

import { data } from "./data";
import { getLanguage } from "../../utils/getLanguage";
const MenuList = ({ isNotMobile, scrollToSection, navigationRefs }) => {
  const lang = getLanguage();

  return (
    <Stack
      direction={!isNotMobile ? "column" : "row"}
      spacing={!isNotMobile ? 4 : 3}
    >
      {data.map((el) => (
        <Button
          onClick={() => scrollToSection(navigationRefs[el.link])}
          variant="text"
          sx={{
            color: "text.secondary",
            "&:hover, &:active": {
              color: "secondary.main",
            },
          }}
        >
          <Typography sx={{ color: "inherit" }}>{el.text[lang]}</Typography>
        </Button>
      ))}
    </Stack>
  );
};
const Menu = ({
  isNotMobile,
  menuOpen,
  setMenuOpen,
  scrollToSection,
  navigationRefs,
}) => {
  return !isNotMobile ? (
    <>
      <Drawer
        open={menuOpen}
        onClose={() => setMenuOpen(!menuOpen)}
        anchor="right"
        sx={{
          ".MuiDrawer-paper": {
            backgroundColor: "primary.dark",
            maxWidth: "300px",
            width: "100%",
          },
        }}
      >
        <Box sx={{}}>
          <Box mt={1} ml={1} onClick={() => setMenuOpen(!menuOpen)}>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box mt={4}>
            <MenuList
              isNotMobile={isNotMobile}
              navigationRefs={navigationRefs}
              scrollToSection={scrollToSection}
            />
          </Box>
        </Box>
      </Drawer>
    </>
  ) : (
    <>
      {" "}
      <MenuList
        isNotMobile={isNotMobile}
        navigationRefs={navigationRefs}
        scrollToSection={scrollToSection}
      />
    </>
  );
};

export default Menu;
