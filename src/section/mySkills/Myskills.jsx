import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { getLanguage } from "../../utils/getLanguage";
import data from "./data";

export default function MySkills({ sectionRef }) {
  const lang = getLanguage();
  return (
    <Container maxWidth="xl" ref={sectionRef}>
      <Box textAlign={"center"} mb={10} id="#skills">
        <Typography variant="h2" mb={2} color={"primary.light"}>
          {data.title1[lang]}
        </Typography>
        <Typography variant="h5" fontWeight={300}>
          {data.title2[lang]}
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {data.skills.map((el, index) => (
          <Grid xs={6} sm={3} md={2} item key={`${index}-${el.title}`}>
            <Box
              sx={{
                padding: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" mb={2}>
                {el.title}
              </Typography>
              <motion.div
                animate={{ y: [-5, 0, -5] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <img
                  src={el.img}
                  width="100px"
                  height="100px"
                  style={{ objectFit: "contain", textAlign: "center" }}
                />
              </motion.div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
