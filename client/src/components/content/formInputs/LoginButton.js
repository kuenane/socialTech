import React, { Component, Fragment } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import validator from "validator";

class LoginButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openDialog: false
    };
    this.validateUser = this.validateUser.bind(this);
    this.clearValidationErrors = this.clearValidationErrors.bind(this);
    this.validateUser = this.validateUser.bind(this);
  }

  handleClickOpen = () => {
    if (this.validateUser() === true) {
      this.setState({ openDialog: true });
    }
  };

  handleClose = () => {
    this.setState({ openDialog: false });
  };

  clearValidationErrors(element) {
    let newArr = [];
    for (let error of this.props.prevState.errors) {
      if (element !== error.element) {
        newArr.push(error);
      }
    }
    return { errors: newArr };
  }

  validateUser() {
    const username = this.props.parentState.username;
    const email = this.props.parentState.email;
    const password = this.props.parentState.password;

    let registrationValid = true;
    if (username === "") {
      this.props.onSubmit("username", "Username cannot be empty!");
      registrationValid = false;
    }
    if (email === "") {
      this.props.onSubmit("email", "Email cannot be empty!");
      registrationValid = false;
    } else if (validator.isEmail(email) === false) {
      this.props.onSubmit("email", "Invalid email format!");
      registrationValid = false;
    }

    if (password === "") {
      this.props.onSubmit("password", "Password cannot be empty!");
      registrationValid = false;
    }

    return registrationValid;
  }

  render() {
    return (
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={this.handleClickOpen}
      >
        Login
      </Button>
    );
  }
}

export default NewUser;
