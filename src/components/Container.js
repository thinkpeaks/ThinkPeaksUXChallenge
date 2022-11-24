import React, {Component} from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const MyContainer: React.FunctionComponent<MyProps> = props => {
  return (
    <Container sx={props.sx}>
      <Box>
        {props.children}
      </Box>
    </Container>
  );
};
