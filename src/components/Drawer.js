import React from "react";
import {styled, createTheme, ThemeProvider} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import {mainListItems, secondaryListItems} from "./../config/menu";

const drawerWidth = 240;

export const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== "open"})(
  ({theme, open}) => ({
    "& .MuiDrawer-paper": {
      position  : "relative",
      whiteSpace: "nowrap",
      width     : drawerWidth,
      transition: theme.transitions.create("width", {
        easing  : theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      boxSizing : "border-box",
      ...(!open && {
        overflowX                   : "hidden",
        transition                  : theme.transitions.create("width", {
          easing  : theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        width                       : theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9)
        }
      })
    }
  })
);

export function MyDrawer (props) {

  return (
    <Drawer variant="permanent" open={props.open}>
      <Toolbar
        sx={{
          display       : "flex",
          alignItems    : "center",
          justifyContent: "flex-end",
          px            : [1]
        }}
      >
        <IconButton onClick={props.toggleDrawer}>
          <ChevronLeftIcon/>
        </IconButton>
      </Toolbar>
      <Divider/>
      <List component="nav">
        {mainListItems}
        <Divider sx={{my: 1}}/>
        {secondaryListItems}
      </List>
    </Drawer>
  );
}