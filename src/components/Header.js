import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Header.css";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();
  if (hasHiddenAuthButtons) {
    return (
      <Box className="header">
        <Box className="header-title">
          <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={() => history.push("/")}
        >
          Back to explore
        </Button>
      </Box>
    );
  } else {
    return (
      <Box className="header">
        <Box className="header-title">
          <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        {children}
        {localStorage.getItem("username") == null ? (
          <Box>
            <Button
              className="register-button"
              variant="text"
              onClick={() => history.push("/login")}
            >
              Login
            </Button>
            <Button
              className="button "
              variant="contained"
              onClick={() => history.push("/register")}
            >
              Register
            </Button>
          </Box>
        ) : (
          <Box className="header-content">
            <img src="avatar.png" alt={localStorage.getItem("username")}></img>
            <p>{localStorage.getItem("username")}</p>
            <Button
              className="register-button"
              variant="text"
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              LOGOUT
            </Button>
          </Box>
        )}
      </Box>
    );
  }
};

export default Header;
