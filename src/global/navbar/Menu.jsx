import { Close as CloseIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import React from "react";
const StyledButton = styled(Button)((theme) => ({
  padding: " 5px 25px ",
  borderRadius: 0,
  transition: "border-bottom 0.3s",
  borderBottom: "2px solid transparent",
  "&:hover": {
    borderBottom: "2px solid white",
    background: "none",
  },
}));

const MenuList = ({ isNotMobile }) => {
  return (
    <Stack
      direction={!isNotMobile ? "column" : "row"}
      spacing={!isNotMobile ? 4 : 1}
    >
      <StyledButton variant="text">
        <Typography>Home</Typography>
      </StyledButton>
      <StyledButton variant="link">
        <Typography> Skills </Typography>
      </StyledButton>
      <StyledButton variant="link">
        <Typography> Project </Typography>
      </StyledButton>
      <StyledButton variant="link">
        <Typography> Educatin & experience </Typography>
      </StyledButton>
      <StyledButton variant="link">
        <Typography> Contact </Typography>
      </StyledButton>
    </Stack>
  );
};
const Menu = ({ isNotMobile, menuOpen, setMenuOpen }) => {
  console.log(menuOpen);
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
            <MenuList isNotMobile={isNotMobile} />
          </Box>
        </Box>
      </Drawer>
    </>
  ) : (
    <>
      {" "}
      <MenuList isNotMobile={isNotMobile} />
    </>
  );
};

export default Menu;
