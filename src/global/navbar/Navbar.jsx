import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import Menu from "./Menu";
import { useState } from "react";
import userAvatar from "./assets/user.jpg";
import Language from "./Language";

const Navbar = ({ navigationRefs, scrollToSection }) => {
  const isNotMobile = useMediaQuery("(min-width:1000px)");
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        backgroundColor: "primary.dark",
      }}
      elevation={1}
    >
      <Container
        maxWidth="xl"
        sx={{
          height: "85px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar src={userAvatar} sx={{ height: "60px", width: "60px" }} />
          <Typography variant="subtitle2" fontSize={"20px"}>
            {" "}
            Houssem{" "}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItem: "center" }}>
          <Menu
            isNotMobile={isNotMobile}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            navigationRefs={navigationRefs}
            scrollToSection={scrollToSection}
          />
          <Language />
        </Box>
        {!isNotMobile && (
          <Box onClick={() => setMenuOpen(true)}>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Box>
        )}
      </Container>
    </AppBar>
  );
};

export default Navbar;
