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
    this.props = props;
    this.registerUser = this.registerUser.bind(this);
  }

  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
    this.registerUser();
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  registerUser() {
    var userInput = {};
    if (this.props.toggle === false) {
      userInput = {
        Firstname: document.getElementById("firstname").value,
        Lastname: document.getElementById("lastname").value,
        Username: document.getElementById("username").value,
        Email: document.getElementById("email").value,
        Password: document.getElementById("password").value
      };
    } else {
      userInput = {
        CompanyName: document.getElementById("companyName").value,
        Username: document.getElementById("username").value,
        Email: document.getElementById("email").value,
        Password: document.getElementById("password").value
      };
    }
    console.log(userInput);
  }

  render() {
    return (
      <Fragment>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Register
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Registration Succesfull"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <p>Thank you for joining us at S4A.</p>
              <p>Providing the tools you need to succeed</p>
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
