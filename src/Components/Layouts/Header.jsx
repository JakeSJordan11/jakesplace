import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="headline" color="inherit">
            Jakesplace
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
