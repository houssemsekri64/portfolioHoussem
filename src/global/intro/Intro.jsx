import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

export const Intro = () => {
  const [display, setDisplay] = useState("block");
  useEffect(() => {
    setTimeout(() => {
      setDisplay("none");
    }, 8000);
  }, []);

  return (
    <motion.div
      animate={{ scaleY: 0 }}
      transition={{ duration: 0.5, delay: 7 }}
      style={{
        position: "relative",
        top: "0",
        transformOrigin: "top center",
        display: display,
        zIndex: 999999,
      }}
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
            <Typography variant="h3" display={"flex"} alignItems={"center"}>
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
            <Typography variant="h3">I'M HOUSSEM SEKRI</Typography>
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
            <Typography variant="h3" textAlign={"center"}>
              FROND END & BACKEND <br /> DEVELOPER
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
};
