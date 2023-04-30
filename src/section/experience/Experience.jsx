import React from "react";
import {
  Box,
  Typography,
  Container,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import { ArrowRight } from "@mui/icons-material";
import { getLanguage } from "../../utils/getLanguage";
import data from "./data";

const Experience = ({ sectionRef }) => {
  const lang = getLanguage();
  return (
    <Container maxWidth="xl" sx={{ marginTop: 30 }} ref={sectionRef}>
      <Box textAlign={"center"} mb={10}>
        <Typography variant="h2" color={"primary.light"}>
          {data.text[lang]}
        </Typography>
      </Box>
      <Paper
        width={{ sx: "100%", md: "70%" }}
        sx={{
          backgroundColor: "primary.dark",
          padding: "1rem",
          borderRadius: 2,
          boxShadow: 3,
          margin: "auto",
          width: { sx: "100%", md: "70%" },
        }}
      >
        <Typography variant="h6" color="secondary.main">
          {" "}
          Frontend developer @ la boite immo{" "}
        </Typography>
        <List>
          {data.work[lang].map((el, index) => (
            <ListItem key={`${index}-{data.text}`}>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText inset sx={{ paddingLeft: "0.1rem" }} primary={el} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default Experience;
