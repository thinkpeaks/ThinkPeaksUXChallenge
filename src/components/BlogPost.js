import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import {Chip} from "@mui/material";

function BlogPost (props) {
  const {post} = props;

  return (
    <Paper sx={{m: {xs: 2, md: 4}}}>
      <Grid container>
        <Grid sm={12} sx={{p: {xs: 1}}}>

        </Grid>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p       : {xs: 2},
              pr      : {md: 1}
            }}
          >
            <Typography component="h3" variant="h4" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography>
              <Chip sx={{mr: 2}} label="Chip" size="small"/>
              <Chip sx={{mr: 1}} label="Tag 2" size="small"/>
              <Chip sx={{mr: 1}} label="Mag" size="small"/>
            </Typography>
            <Typography color="inherit" paragraph>
              {post.description}
            </Typography>
            <Link variant="subtitle1" href="#">
              {post.linkText}
            </Link>
          </Box>
        </Grid>
        <Grid item md={6} sx={{
          position          : "relative",
          backgroundColor   : "grey.800",
          color             : "#fff",
          mb                : 4,
          backgroundSize    : "cover",
          backgroundRepeat  : "no-repeat",
          backgroundPosition: "center",
          backgroundImage   : `url(${post.image})`
        }}>
          <Box>


            {/* Increase the priority of the hero background image */}
            {<img style={{display: "none"}} src={post.image} alt={post.imageText}/>}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

BlogPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image      : PropTypes.string.isRequired,
    imageText  : PropTypes.string.isRequired,
    linkText   : PropTypes.string.isRequired,
    title      : PropTypes.string.isRequired
  }).isRequired
};

export default BlogPost;