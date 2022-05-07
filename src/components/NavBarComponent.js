import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useMoralis } from "react-moralis";
import UploadResume from "./UploadResume";
import logo from "../assets/resume-chain-logo.png";
import SearchComponent from "./SearchComponent";
import { useNavigate } from "react-router-dom";

const pages = ["Products", "Pricing", "Blog"];

const NavBarComponent = () => {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log into Resume Chain" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user ? user.get("ethAddress") : "no-user");
        })
        .catch(function (error) {
          console.log(error);
        });
      //TODO : Retrieve user data from blockchain and update the state in the store
    }
  };

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  let navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={logo}
            alt="logo"
            style={{ maxWidth: "40px", marginRight: "5px", cursor: "pointer" }}
            onClick={navigateHome}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              cursor: "pointer",
            }}
            onClick={navigateHome}
          >
            Resume Chain
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <SearchComponent />
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Orgnisations</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Resume Chain
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <Box>
              <SearchComponent />
            </Box>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Orgnisations
            </Button>
          </Box>
          {isAuthenticated ? (
            <Box sx={{ flexGrow: 0 }}>
              <UploadResume />
              <Button variant="contained" color="secondary" onClick={logOut}>
                Logout : {user.get("ethAddress").substring(0, 10) + "..."}
              </Button>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Button variant="contained" color="secondary" onClick={login}>
                Connect
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBarComponent;
