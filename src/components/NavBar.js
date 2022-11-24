import React from "react";
import PropTypes from "prop-types";
import {styled, createTheme, ThemeProvider} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";

const drawerWidth = 240;

const NavBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({theme, open}) => ({
  zIndex    : theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing  : theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width     : `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing  : theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

NavBar.propTypes = {
  children: PropTypes.node
};

export default NavBar;