import React, { Component } from "react";
import {
  Input,
  InputLabel,
  FormControl,
  FormHelperText
} from "@material-ui/core";

class Password extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.sortErrors = this.sortErrors.bind(this);
  }

  onChange(event) {
    this.props.onPasswordChange(event.target.value);
    this.props.onClearErrorMsg("password");
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
    const password = this.props.parentState.password;
    const errors = this.props.parentState.errors;

    return (
      <FormControl margin="normal" required>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
        />
        <FormHelperText id="passwordHelper" error={true}>
          {this.sortErrors(errors, "password")[0]}
        </FormHelperText>
      </FormControl>
    );
  }
}

export default Password;
