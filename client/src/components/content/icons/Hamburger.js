import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import SvgIcon from "@material-ui/core/SvgIcon";

const styles = theme => ({
  iconHover: {
    margin: theme.spacing.unit * 2,
    "&:hover": {
      color: red[800]
    }
  }
});

class HamburgerBurger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <SvgIcon fontSize="large" classeName={classes.iconHover}>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </SvgIcon>
    );
  }
}

HamburgerBurger.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HamburgerBurger);
