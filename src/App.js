import React, {Component} from "react";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

import NavBar from "./components/NavBar";
import {MyContainer} from "./components/Container";
import {MyDrawer} from "./components/Drawer";
import MuiAppBar from '@mui/material/AppBar';


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
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

const mdTheme = createTheme();

export default function MyApp () {
  return (
    <>
      <NavBar/>
      <MyDrawer/>
      <MyContainer>
      </MyContainer>
    </>
  );
}
