import React, { Component, Fragment } from "react";
import { Grid, Paper, Tabs, Tab } from "@material-ui/core";
import Register from "../content/Register";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  bodyStyle: {
    height: "calc(100% - 59px - 48px)"
  },
  tab: {
    width: "50%"
  },
  bodyHeader: {
    margin: "50px 5px 0px 5px"
  }
};

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.displayChange = this.displayChange.bind(this);
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  displayChange() {
    const value = this.state.value;
    if (value === 0) {
    } else {
      return <Register />;
    }
  }

  render() {
    const { classes } = this.props;
    const value = this.state.value;
    return (
      <Grid container={true} justify="center" className={classes.bodyStyle}>
        <Grid item xs={12} sm={6}>
          <Fragment>
            <Paper className={classes.bodyHeader}>
              <Tabs
                value={value}
                indicatorColor="secondary"
                textColor="primary"
                centered
                onChange={this.handleChange}
              >
                <Tab label="Login" className={classes.tab} />
                <Tab label="Register" className={classes.tab} />
              </Tabs>
            </Paper>
            {this.displayChange()}
          </Fragment>
        </Grid>
      </Grid>
    );
  }
}

Body.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Body);
