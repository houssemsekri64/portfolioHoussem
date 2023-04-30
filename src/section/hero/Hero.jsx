import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import Computer from "../../components/Computer";
import ImageParticles from "../../components/ImageParticles";
import { data } from "./data";
import { getLanguage } from "../../utils/getLanguage";
const Hero = ({ sectionRef }) => {
  const mobile = useMediaQuery("(min-width:1000px)");
  const lang = getLanguage();

  return (
    <Container
      ref={sectionRef}
      maxWidth="xl"
      sx={{
        display: "grid",
        placeItems: "center",
        height: "calc(100vh - 70px)",
      }}
    >
      <Box
        sx={{
          marginLeft: { md: "50px", xs: "0" },
          display: "flex",
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box width={{ xs: "95%", md: "45%" }}>
          <Typography
            variant="h3"
            color={"primary.light"}
            textAlign={{ xs: "center", md: "left" }}
          >
            {data.text1[lang]}
            <motion.span
              role="img"
              aria-label="wave emoji"
              animate={{ rotate: [-10, 10, -10] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              style={{ display: "inline-block" }}
            >
              👋
            </motion.span>{" "}
            {data.text2[lang]}
          </Typography>
          <Typography
            textAlign={{ xs: "center", md: "left" }}
            variant="h2"
            sx={{
              textTransform: "uppercase",
              fontWeight: "bold",
              backgroundcolor: "primary",
              backgroundImage: `linear-gradient(45deg, #5514B4, #FF80FF)`,
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            HOUSSEM SEKRI
          </Typography>
          <Typography
            textAlign={{ xs: "center", md: "left" }}
            variant="h4"
            fontWeight={300}
            letterSpacing={2}
            fontSize={{ xs: "25px", md: "30px" }}
          >
            {data.text3[lang]}
          </Typography>
          <Box my={2} textAlign={{ xs: "center", md: "left" }}>
            <Button
              variant="outlined"
              color="secondary"
              LinkComponent={"a"}
              href={data.button[lang].link}
            >
              {data.button[lang].text}
            </Button>
          </Box>
          <Box
            height={"119px"}
            overflow={"hidden"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={{ md: "flex-start", xs: "center" }}
          >
            <Box
              width={{ sm: "200px" }}
              height={{ sm: "200px" }}
              overflow={"hidden"}
              display={"grid"}
              sx={{ placeItems: "center" }}
            >
              <ImageParticles
                url={"./skills/react.png"}
                Logocolor={"#61DBFB"}
              />
            </Box>
            <Box
              width={{ sm: "200px" }}
              height={{ sm: "200px" }}
              overflow={"hidden"}
              display={"grid"}
              sx={{ placeItems: "center start" }}
            >
              <ImageParticles url={"./skills/nd.png"} Logocolor={"#3c873a"} />
            </Box>
          </Box>
        </Box>
        {mobile && (
          <Box
            width={{ sm: "100%", md: "45%" }}
            height={{ sm: "200px", md: "100%" }}
          >
            <Computer />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Hero;
