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
      checkedA: false,
      firstname: "",
      lastname: "",
      companyName: "",
      username: "",
      email: "",
      password: "",
      errors: [],
      validSubmission: true
    };
    this.formValidation = this.formValidation.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
    this.handleLastnameChange = this.handleLastnameChange.bind(this);
    this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleUsernameChange(userInput) {
    this.setState({ username: userInput });
  }

  handleEmailChange(userInput) {
    this.setState({ email: userInput });
  }

  handlePasswordChange(userInput) {
    this.setState({ password: userInput });
  }

  handleFirstnameChange(userInput) {
    this.setState({ firstname: userInput });
  }

  handleLastnameChange(userInput) {
    this.setState({ lastname: userInput });
  }

  handleCompanyNameChange(userInput) {
    this.setState({ companyName: userInput });
  }

  toggleLabel() {
    return this.state.checkedA === false ? "User" : "Company";
  }

  userType() {
    return this.state.checkedA === false ? (
      <Fragment>
        <Firstname
          firstname={this.state.firstname}
          onFirstnameChange={this.handleFirstnameChange}
        />
        <Lastname
          lastname={this.state.lastname}
          onLastnameChange={this.handleLastnameChange}
        />
      </Fragment>
    ) : (
      <CompanyName
        companyName={this.state.companyName}
        onCompanyNameChange={this.handleCompanyNameChange}
      />
    );
  }

  formValidation() {}

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

          <Username
            username={this.state.username}
            onUsernameChange={this.handleUsernameChange}
          />
          <Email
            email={this.state.email}
            onEmailChange={this.handleEmailChange}
          />
          <Password
            password={this.state.password}
            onPasswordChange={this.handlePasswordChange}
          />
          <NewUser props={this.state} />
        </FormGroup>
      </Paper>
    );
  }
}

RightPane.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RightPane);
