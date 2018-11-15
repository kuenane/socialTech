import React, { Component, Fragment } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

class NewUser extends Component {
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
    const firstname = this.props.parentState.firstname;
    const lastname = this.props.parentState.lastname;
    const companyName = this.props.parentState.companyName;

    let registrationValid = true;
    if (username === "") {
      this.props.onSubmit("username", "Username cannot be empty!");
      registrationValid = false;
    }
    if (email === "") {
      this.props.onSubmit("email", "Email cannot be empty!");
      registrationValid = false;
    }
    if (password === "") {
      this.props.onSubmit("password", "Password cannot be empty!");
      registrationValid = false;
    }
    if (firstname === "") {
      this.props.onSubmit("firstname", "Firstname cannot be empty!");
      registrationValid = false;
    }
    if (lastname === "") {
      this.props.onSubmit("lastname", "Lastname cannot be empty!");
      registrationValid = false;
    }
    if (companyName === "") {
      this.props.onSubmit("companyName", "companyName cannot be empty!");
      registrationValid = false;
    }
    return registrationValid;
  }

  render() {
    return (
      <Fragment>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={this.handleClickOpen}
        >
          Register
        </Button>
        <Dialog
          open={this.state.openDialog}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Registration Succesfull"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Thank you for joining us at S4A. Providing the tools you need to
              succeed.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Continue
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default NewUser;
