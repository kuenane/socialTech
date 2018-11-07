import React, { Component } from "react";
//import { withStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Button, Grid } from "@material-ui/core";
//import MenuIcon from "@material-ui/icons/Menu";

class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: {
        grow: {
          flexGrow: 1
        }
      }
    };
  }

  render() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid container direction="row" justify="center" alignments="center">
            <Typography variant="headline" color="inherit">
              S4A
            </Typography>
            <Button color="primary">Login</Button>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default AppNavbar;
