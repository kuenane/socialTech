import React, { Component, Fragment } from "react";
import { Paper, Typography, FormGroup } from "@material-ui/core";
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

class RightPane extends Component {
  constructor(props) {
    super(props);
    this.props = props;
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
    return (
      <Paper>
        <FormGroup>
          <Typography component="h1" variant="h5">
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
          <NewUser />
        </FormGroup>
      </Paper>
    );
  }
}

export default RightPane;
