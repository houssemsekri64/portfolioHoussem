import React from "react";
import { Box, Typography } from "@mui/material";
import { getLanguage } from "../../utils/getLanguage";

export default function FooterLast() {
  let lang = getLanguage();
  return (
    <Box py={3} textAlign={"center"} mt={19}>
      <Typography fontSize={"17px"}>
        {lang == "en"
          ? " Designed & Built by Houssem sekri"
          : "Conçu et construit par Houssem Sekri"}
      </Typography>
    </Box>
  );
}
