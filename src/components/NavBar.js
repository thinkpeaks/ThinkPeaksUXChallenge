import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
const NavBar = (props) => {
  return(
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography component="h2" variant="h6" color="white" gutterBottom>
            Think Peaks UI|UX Challenge
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}


NavBar.propTypes = {
  children: PropTypes.node,
};

export default NavBar;