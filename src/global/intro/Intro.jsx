import React from "react";
import { Box, Typography, duration } from "@mui/material";
import { motion } from "framer-motion";

export const Intro = () => {
  return (
    <motion.div
      animate={{ scaleY: 0 }}
      transition={{ duration: 0.5, delay: 7 }}
      style={{ transformOrigin: "top center" }}
    >
      <Box
        minHeight={"100vh"}
        minWidth={"100vw"}
        display={"grid"}
        sx={{
          placeItems: "center",
          background: (theme) => theme.palette.primary.main,
        }}
      >
        <Box
          sx={{
            height: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <motion.div
            style={{ position: "absolute", bottom: "0" }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: [-50, -50, -100] }}
            transition={{
              opacity: { duration: 2 },
              y: { duration: 2 },
            }}
          >
            <Typography
              color={"white"}
              variant="h3"
              display={"flex"}
              alignItems={"center"}
            >
              {" "}
              Hi{" "}
              <motion.span
                role="img"
                aria-label="wave emoji"
                animate={{ rotate: [-10, 10, -10] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                style={{ display: "inline-block" }}
              >
                👋
              </motion.span>
            </Typography>
          </motion.div>
          <motion.div
            style={{ position: "absolute", bottom: "0" }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: [-50, -50, -100] }}
            transition={{
              opacity: { duration: 2.5 },
              y: { duration: 2.5 },
              delay: 2.2,
            }}
          >
            <Typography
              color={"white"}
              variant="h3"
              display={"flex"}
              alignItems={"center"}
            >
              I'M HOUSSEM SEKRI
            </Typography>
          </motion.div>
          <motion.div
            style={{ position: "absolute", bottom: "0" }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: [-50, -50, -100] }}
            transition={{
              opacity: { duration: 2.5 },
              y: { duration: 2.5 },
              delay: 4.4,
            }}
          >
            <Typography
              color={"white"}
              variant="h4"
              display={"flex"}
              alignItems={"center"}
            >
              FROND END & BACKEND DEVELOPER
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
};
