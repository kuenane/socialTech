import React, { Component, Fragment } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  "@global": {
    "html, body, #root": {
      height: "100%"
    }
  },
  headerText: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.classes = props;
  }

  render() {
    const { classes } = this.classes;
    return (
      <Fragment>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              classes={{ root: classes.menuButton }}
            />
            <Typography
              variant="h6"
              color="inherit"
              classes={{
                root: classes.headerText
              }}
            >
              S4A
            </Typography>
            <Button variant="contained" color="primary">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
