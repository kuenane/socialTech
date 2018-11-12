import React, { Component, Fragment } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" />
            <Typography variant="h6" color="inherit">
              Stationary 4 Africa
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}

export default Header;
