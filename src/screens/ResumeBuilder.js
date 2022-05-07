import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import React from "react";
import TabsComponent from "./../components/TabsComponent";
import useLargerScreensGif from "../assets/useLargerScreens.gif";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PDFWrapperComponent from "./../components/PDFWrapperComponent";

const ResumeBuilder = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      {matches ? (
        <Grid container spacing={2} sx={{ height: "90vh" }}>
          <Grid item xs={12} md={6}>
            <TabsComponent />
          </Grid>
          <Grid item xs={12} md={6}>
            <PDFWrapperComponent />
          </Grid>
        </Grid>
      ) : (
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={useLargerScreensGif}
            alt="Please Use Larger Screen To Continue"
            width="50%"
          />
          <Typography variant="caption" sx={{ textAlign: "center", p: 2 }}>
            Please Use Larger Screen To Continue
          </Typography>
        </Box>
      )}
    </>
  );
};

export default ResumeBuilder;
