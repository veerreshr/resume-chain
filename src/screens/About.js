import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import resumegif from "../assets/resume.gif";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AuthButton from "./../components/AuthButton";

const About = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid spacing={2} container sx={{ height: "90vh" }}>
        <Grid
          item
          xs={6}
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack direction="column">
            <Typography variant="h2" component="h1" gutterBottom>
              Spend less time finding and more time getting.
            </Typography>
            <Typography variant="h5" component="h6" gutterBottom>
              A Blockchain Based Resume Builder
            </Typography>
            <AuthButton sx={{ width: "fit-content" }} />
          </Stack>
        </Grid>
        <Grid item xs={6} sx={{ height: "100%" }}>
          <img src={resumegif} alt="Hero Banner" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
