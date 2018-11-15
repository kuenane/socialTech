import React, { Component } from "react";
import {
  Input,
  InputLabel,
  FormControl,
  FormHelperText
} from "@material-ui/core";

class Email extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.sortErrors = this.sortErrors.bind(this);
  }

  onChange(event) {
    this.props.onEmailChange(event.target.value);
    this.props.onClearErrorMsg("email");
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
    const email = this.props.parentState.email;
    const errors = this.props.parentState.errors;
    return (
      <FormControl margin="normal" required>
        <InputLabel htmlFor="email">Email Address</InputLabel>
        <Input
          id="email"
          name="email"
          value={email}
          onChange={this.onChange}
          autoComplete="email"
        />
        <FormHelperText id="emailHelper" error={true}>
          {this.sortErrors(errors, "email")[0]}
        </FormHelperText>
      </FormControl>
    );
  }
}
export default Email;
