import {
  Box,
  Button,
  Container,
  Grid,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { getLanguage } from "../../utils/getLanguage";
import { data } from "./data";
const Project = ({ sectionRef }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [videoId, setVideoId] = useState(null);
  const lang = getLanguage();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", md: "1000px" },
    height: { xs: "300px", md: "500px" },
    bgcolor: "primary.dark",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Container maxWidth="xl" sx={{ marginTop: 12 }} ref={sectionRef}>
      <Box textAlign={"center"} mb={20}>
        <Typography
          variant="h2"
          mb={2}
          color={"primary.light"}
          fontSize={"3rem"}
        >
          {data.text1[lang]}
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {data.projet.map((el, index) => (
          <Grid
            item
            xs={12}
            md={6}
            key={`${index}-${el.title}`}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Paper
              sx={{
                padding: 2,
                backgroundColor: "primary.dark",
                height: "100%",
              }}
              elevation={3}
            >
              <Button
                sx={{ width: "100%", height: { md: "300px", xs: "200px" } }}
                target="_blank"
                href={el.btn.demo.link}
              >
                <img
                  src={el.img}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "left top",
                  }}
                />
              </Button>
              <Box mt={2}>
                <Typography variant="h5">{el.title}</Typography>
                <Typography
                  paragraph
                  pt={2}
                  fontSize={{ xs: "0.8rem", md: "0.9rem" }}
                >
                  {el.text[lang]}
                </Typography>
                <Box
                  display="flex"
                  flexDirection={"row"}
                  gap={2}
                  flexWrap={"wrap"}
                >
                  {el.btn.video && (
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        handleOpen(true);
                        setVideoId(el.btn.video.link);
                      }}
                    >
                      {el.btn.video.text[lang]}
                    </Button>
                  )}
                  {el.btn.code && (
                    <Button
                      variant="outlined"
                      color="info"
                      href={el.btn.code.link}
                      target="_blank"
                    >
                      {el.btn.code.text[lang]}
                    </Button>
                  )}
                  <Button
                    variant="outlined"
                    color="error"
                    href={el.btn.demo.link}
                    target="_blank"
                  >
                    {el.btn.demo.text[lang]}
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <iframe
            allowFullScreen
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
          ></iframe>
        </Box>
      </Modal>
    </Container>
  );
};

export default Project;
