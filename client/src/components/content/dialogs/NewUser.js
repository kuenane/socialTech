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
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

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
