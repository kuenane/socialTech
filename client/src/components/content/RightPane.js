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
      errors: []
      //   validSubmission: true
    };
    this.formValidation = this.formValidation.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
    this.handleLastnameChange = this.handleLastnameChange.bind(this);
    this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearError = this.handleClearError.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  clearInput() {
    this.setState({ firstname: "" });
    this.setState({ lasstname: "" });
    this.setState({ username: "" });
    this.setState({ companyName: "" });
    this.setState({ email: "" });
    this.setState({ password: "" });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    this.handleClearError("firstname");
    this.handleClearError("lastname");
    this.handleClearError("username");
    this.handleClearError("companyName");
    this.handleClearError("email");
    this.handleClearError("password");
    this.clearInput();
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

  handleSubmit(element, message) {
    this.setState(prevState => ({
      errors: [...prevState.errors, { element, message }]
    }));

    this.clearInput();
  }

  handleClearError(element) {
    this.setState(prevState => {
      let newArr = [];
      for (let error of prevState.errors) {
        if (element !== error.element) {
          newArr.push(error);
        }
      }
      return { errors: newArr };
    });
  }

  toggleLabel() {
    return this.state.checkedA === false ? "User" : "Company";
  }

  userType() {
    return this.state.checkedA === false ? (
      <Fragment>
        <Firstname
          parentState={this.state}
          onFirstnameChange={this.handleFirstnameChange}
          onClearErrorMsg={this.handleClearError}
        />
        <Lastname
          parentState={this.state}
          onLastnameChange={this.handleLastnameChange}
          onClearErrorMsg={this.handleClearError}
        />
      </Fragment>
    ) : (
      <CompanyName
        parentState={this.state}
        onCompanyNameChange={this.handleCompanyNameChange}
        onClearErrorMsg={this.handleClearError}
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
            parentState={this.state}
            onUsernameChange={this.handleUsernameChange}
            onClearErrorMsg={this.handleClearError}
          />
          <Email
            parentState={this.state}
            onEmailChange={this.handleEmailChange}
            onClearErrorMsg={this.handleClearError}
          />
          <Password
            parentState={this.state}
            onPasswordChange={this.handlePasswordChange}
            onClearErrorMsg={this.handleClearError}
          />
          <NewUser parentState={this.state} onSubmit={this.handleSubmit} />
        </FormGroup>
      </Paper>
    );
  }
}

RightPane.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RightPane);
