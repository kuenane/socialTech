import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import RightPane from "../content/RightPane";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  bodyStyle: {
    height: "calc(100% - 64px - 48px)"
  }
};

class Body extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container={true} justify="center" className={classes.bodyStyle}>
        <Grid item xs={12} sm={6}>
          <RightPane />
        </Grid>
      </Grid>
    );
  }
}

Body.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Body);
