import React, { Component, Fragment } from "react";
import { Paper, Typography, FormGroup } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import NewUser from "./dialogs/NewUser";
import {
  Firstname,
  Username,
  CompanyName,
  Lastname,
  Email,
  Password
} from "./formInputs";

const styles = {
  registerPaper: {
    padding: "5% 15% 5% 15%"
  },
  registerLabel: {}
};

class RightPane extends Component {
  constructor(props) {
    super(props);
    this.classes = props;
    this.state = {
      checkedA: false
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  toggleLabel() {
    return this.state.checkedA === false ? "User" : "Company";
  }

  userType() {
    return this.state.checkedA === false ? (
      <Fragment>
        <Firstname />
        <Lastname />
      </Fragment>
    ) : (
      <CompanyName />
    );
  }

  render() {
    const { classes } = this.classes;
    return (
      <Paper classes={{ root: classes.registerPaper }}>
        <FormGroup>
          <Typography variant="h2" gutterBottom={true}>
            Registration
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedA}
                onChange={this.handleChange("checkedA")}
                value="checkedB"
                color="primary"
              />
            }
            label={this.toggleLabel()}
          />

          {this.userType()}

          <Username />
          <Email />
          <Password />
          <NewUser toggle={this.state.checkedA} />
        </FormGroup>
      </Paper>
    );
  }
}

RightPane.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RightPane);
