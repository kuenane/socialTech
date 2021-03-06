import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import validator from "validator";

const styles = {
  registerButton: {
    marginTop: "20px"
  }
};

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.classes = props;
    this.state = {
      openDialog: false
    };
    var passwordValidator = require("password-validator");
    this.passwordValidator = new passwordValidator();
    this.passwordValidator
      .is()
      .min(8)
      .is()
      .max(100)
      .has()
      .uppercase()
      .has()
      .lowercase()
      .has()
      .digits()
      .has()
      .not()
      .spaces()
      .is()
      .not()
      .oneOf(["Passw0rd", "Password123"]);

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
    const confirmPassword = this.props.parentState.confirmPassword;
    const firstname = this.props.parentState.firstname;
    const lastname = this.props.parentState.lastname;
    const companyName = this.props.parentState.companyName;

    let registrationValid = true;
    if (username === "") {
      this.props.onSubmit("username", "Field cannot be empty!");
      registrationValid = false;
    }
    if (email === "") {
      this.props.onSubmit("email", "Field cannot be empty!");
      registrationValid = false;
    } else if (validator.isEmail(email) === false) {
      this.props.onSubmit("email", "Invalid email format!");
      registrationValid = false;
    }

    if (password === "") {
      this.props.onSubmit("password", "Field cannot be empty!");
      registrationValid = false;
    }

    if (confirmPassword === "") {
      this.props.onSubmit("confirmPassword", "Field cannot be empty!");
      registrationValid = false;
    } else if (confirmPassword !== password) {
      this.props.onSubmit("confirmPassword", "Passwords do not match");
      this.props.onSubmit("password", "Passwords do not match");
      registrationValid = false;
    }
    if (this.passwordValidator.validate(password) === false) {
      this.props.onSubmit(
        "password",
        "Invalid password! Password must be longer than 8 characters. Contain 1 Uppercase,1 Lowercase, 1 Digit and 1 Special Character "
      );
      registrationValid = false;
    }

    if (firstname === "") {
      this.props.onSubmit("firstname", "Field cannot be empty!");
      registrationValid = false;
    }
    if (lastname === "") {
      this.props.onSubmit("lastname", "Field cannot be empty!");
      registrationValid = false;
    }
    if (companyName === "") {
      this.props.onSubmit("companyName", "Field cannot be empty!");
      registrationValid = false;
    }
    return registrationValid;
  }

  render() {
    const { classes } = this.classes;
    return (
      <Fragment>
        <Button
          className={classes.registerButton}
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

NewUser.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(NewUser);
