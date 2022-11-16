import React, {Component} from "react";

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export const MyContainer: React.FunctionComponent<MyProps> = props => {
  return (
    <Container >
      <Box sx={{my: 4}}>
        {props.children}
      </Box>
    </Container>
  );
};
