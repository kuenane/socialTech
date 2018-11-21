import React, { Component } from "react";
import { Paper, FormGroup } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import LoginButton from "../content/formInputs/LoginButton";
import { Username, Email, Password } from "./formInputs";

const styles = {
  loginPaper: {
    padding: "5% 15% 5% 15%",
    margin: "10px 5px"
  },
  loginLabel: {}
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.classes = props;
    this.state = {
      checkedA: false,
      username: "",
      email: "",
      password: "",
      errors: []
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearError = this.handleClearError.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  clearInput() {
    this.setState({ username: "" });
    this.setState({ email: "" });
    this.setState({ password: "" });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    this.handleClearError("username");
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

  render() {
    const { classes } = this.classes;

    return (
      <Paper classes={{ root: classes.loginPaper }}>
        <FormGroup>
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
          <LoginButton parentState={this.state} onSubmit={this.handleSubmit} />
        </FormGroup>
      </Paper>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
