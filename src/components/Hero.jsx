import React from "react";
import { Box, Typography } from "@mui/material";
import heroImage from "../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        py: 10,
        textAlign: "center",
      }}
    >
      <Typography variant="h2" gutterBottom>
        WELCOME TO MEDILAB
      </Typography>
      <Typography variant="h6">
        We are team of talented designers making websites
      </Typography>
    </Box>
  );
};

export default Hero;
