import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { getLanguage } from "../../utils/getLanguage";
import frImage from "./assets/fr.png";
import enImage from "./assets/en.png";
export default function Language() {
  const lang = getLanguage();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2} sx={{ ml: 6 }}>
      <div>
        <Button
          ref={anchorRef}
          variant="text"
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <img
            src={lang == "fr" ? frImage : enImage}
            witdh="15px"
            height="15px"
          />{" "}
          <Typography sx={{ pl: 1 }} textTransform={"capitalize"}>
            {" "}
            {lang}
          </Typography>
          <ArrowDropDown sx={{ color: "text.secondary" }} />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper sx={{ backgroundColor: "primary.main" }}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>
                      <a
                        href={lang == "fr" ? "/" : "?language=fr"}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <img
                          src={lang == "fr" ? enImage : frImage}
                          witdh="15px"
                          height="15px"
                        />{" "}
                        <Typography sx={{ pl: 1 }} textTransform={"capitalize"}>
                          {lang == "fr" ? "En" : "fr"}
                        </Typography>
                      </a>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
