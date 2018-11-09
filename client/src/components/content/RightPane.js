import React, { Component, Fragment } from "react";
import { Paper, Typography, FormGroup } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Switch from "@material-ui/core/Switch";
import NewUser from "./dialogs/NewUser";

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
        <FormControl margin="normal" required>
          <InputLabel>Firstname</InputLabel>
          <Input id="username" autoFocus />
        </FormControl>

        <FormControl margin="normal" required>
          <InputLabel>Last Name</InputLabel>
          <Input id="username" />
        </FormControl>
      </Fragment>
    ) : (
      <FormControl margin="normal" required>
        <InputLabel>Company Name</InputLabel>
        <Input id="username" autoFocus />
      </FormControl>
    );
  }

  render() {
    return (
      <Paper style={this.props.style.Paper}>
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

          <FormControl margin="normal" required>
            <InputLabel>Username</InputLabel>
            <Input id="username" />
          </FormControl>
          <FormControl margin="normal" required>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" />
          </FormControl>
          <FormControl margin="normal" required>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </FormControl>
          <NewUser />
        </FormGroup>
      </Paper>
    );
  }
}

export default RightPane;
