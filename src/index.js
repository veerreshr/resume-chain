import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "DM Sans",
    },
    h2: {
      fontFamily: "DM Sans",
    },
    h3: {
      fontFamily: "DM Sans",
    },
    h4: {
      fontFamily: "DM Sans",
    },
    h5: {
      fontFamily: "DM Sans",
    },
    h6: {
      fontFamily: "DM Sans",
    },
    fontFamily: "Inter, Roboto, sans-serif",
  },
  palette: {
    primary: {
      light: "#52717f",
      main: "#264653",
      dark: "#001f2a",
      contrastText: "#fff",
    },
    secondary: {
      light: "#fff79a",
      main: "#e9c46a",
      dark: "#b4943c",
      contrastText: "#000",
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <MoralisProvider
        serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL}
        appId={process.env.REACT_APP_MORALIS_APPLICATION_ID}
      >
        <App />
      </MoralisProvider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
