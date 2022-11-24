import React, {Component} from "react";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

import NavBar from "./components/NavBar";
import {MyContainer} from "./components/Container";
import {MyDrawer} from "./components/Drawer";
import {Drawer} from "./components/Drawer";
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import {Grid} from "@mui/material";
import SomeTable from "./components/ContentTable";
import BlogPost from "./components/BlogPost";
import {featuredPosts} from "./config/blogPosts";
import MultiForm from "./components/MultiForm";

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

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
      <NavBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: '24px', // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Think Peaks UI|UX Challenge
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </NavBar>
      <MyDrawer variant="permanent" open={open} toggleDrawer={toggleDrawer}/>
        <MyContainer>
        <Toolbar />
          <Grid container >
            <MultiForm/>
          </Grid>
          <Grid container >

            {featuredPosts.map((post) => (
              <Grid  md={12} lg={6}  >
              <BlogPost key={post.title} post={post} />
              </Grid>

            ))}
          </Grid>
          <Grid>
            <SomeTable/>
          </Grid>
        <Box component={"div"} sx={{textAlgin:"left"}}>{"<-"}</Box>
      </MyContainer>
        </Box>
      </ThemeProvider>
  );
}
