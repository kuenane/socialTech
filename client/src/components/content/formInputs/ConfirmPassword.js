import React, { Component } from "react";
import {
  Input,
  InputLabel,
  FormControl,
  FormHelperText
} from "@material-ui/core";

class ConfirmPassword extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.sortErrors = this.sortErrors.bind(this);
  }

  onChange(event) {
    this.props.onConfirmPasswordChange(event.target.value);
    this.props.onClearErrorMsg("confirmPassword");
  }

  sortErrors(errors, key) {
    let newArr = [];
    for (let error of errors) {
      if (key === error.element) {
        newArr.push(error.message);
      }
    }
    return newArr;
  }

  render() {
    const confirmPassword = this.props.parentState.confirmPassword;
    const errors = this.props.parentState.errors;

    return (
      <FormControl margin="dense" required>
        <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={this.onChange}
          type="password"
        />
        <FormHelperText id="confirmPasswordHelper" error={true}>
          {this.sortErrors(errors, "confirmPassword")[0]}
        </FormHelperText>
      </FormControl>
    );
  }
}

export default ConfirmPassword;
