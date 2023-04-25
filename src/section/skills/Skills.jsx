import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const Skills = () => {
  return (
    <Container maxWidth="xl">
      <Box textAlign={"center"} mb={10}>
        <Typography variant="h2" mb={2} color={"primary.light"}>
          My Tech Stack
        </Typography>
        <Typography variant="h5" fontWeight={300}>
          {" "}
          Technologies I’ve been working with recently{" "}
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid xs={12} sm={3} md={2} item>
          <Box
            sx={{
              padding: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" mb={2}>
              {" "}
              React{" "}
            </Typography>
            <motion.div
              animate={{ y: [-5, 0, -5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <img
                src="/2.png"
                width="100px"
                height="100px"
                style={{ objectFit: "contain", textAlign: "center" }}
              />
            </motion.div>
          </Box>
        </Grid>
        <Grid xs={12} sm={3} md={2} item>
          <Box
            sx={{
              padding: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" mb={2}>
              {" "}
              Node js{" "}
            </Typography>

            <img
              src="/nodejs.png"
              width="100px"
              height="100px"
              style={{ objectFit: "contain", textAlign: "center" }}
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={3} md={2} item>
          <Box
            sx={{
              padding: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" mb={2}>
              {" "}
              Redux{" "}
            </Typography>

            <img
              src="/redux.png"
              width="100px"
              height="100px"
              style={{ objectFit: "contain", textAlign: "center" }}
            />
          </Box>
        </Grid>

        <Grid xs={12} sm={3} md={2} item>
          <Box
            sx={{
              padding: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" mb={2}>
              {" "}
              Material UI{" "}
            </Typography>

            <img
              src="/mui.png"
              width="100px"
              height="100px"
              style={{ objectFit: "contain", textAlign: "center" }}
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={3} md={2} item>
          <Box
            sx={{
              padding: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" mb={2}>
              {" "}
              React Query{" "}
            </Typography>

            <img
              src="/reactquery.png"
              width="100px"
              height="100px"
              style={{ objectFit: "contain", textAlign: "center" }}
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={3} md={2} item>
          <Box
            sx={{
              padding: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" mb={2}>
              {" "}
              Next js{" "}
            </Typography>

            <img
              src="/nextjs-2.png"
              width="100px"
              height="100px"
              style={{ objectFit: "contain", textAlign: "center" }}
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={3} md={2} item>
          <Box
            sx={{
              padding: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" mb={2}>
              {" "}
              Type Script{" "}
            </Typography>

            <img
              src="/ts.png"
              width="100px"
              height="100px"
              style={{ objectFit: "contain", textAlign: "center" }}
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={3} md={2} item>
          <Box
            sx={{
              padding: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" mb={2}>
              {" "}
              Mongodb{" "}
            </Typography>

            <img
              src="/mongo.png"
              width="100px"
              height="100px"
              style={{ objectFit: "contain", textAlign: "center" }}
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={3} md={2} item>
          <Box
            sx={{
              padding: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" mb={2}>
              {" "}
              Sass{" "}
            </Typography>

            <img
              src="/sass.png"
              width="100px"
              height="100px"
              style={{ objectFit: "contain", textAlign: "center" }}
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={3} md={2} item>
          <Box
            sx={{
              padding: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" mb={2}>
              {" "}
              Git{" "}
            </Typography>

            <img
              src="/git.png"
              width="100px"
              height="100px"
              style={{ objectFit: "contain", textAlign: "center" }}
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={3} md={2} item>
          <Box
            sx={{
              padding: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" mb={2}>
              {" "}
              Javascript{" "}
            </Typography>

            <img
              src="/js.png"
              width="100px"
              height="100px"
              style={{ objectFit: "contain", textAlign: "center" }}
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={3} md={2} item>
          <Box
            sx={{
              padding: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" mb={2}>
              {" "}
              Css 3{" "}
            </Typography>

            <img
              src="/css.png"
              width="100px"
              height="100px"
              style={{ objectFit: "contain", textAlign: "center" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;
