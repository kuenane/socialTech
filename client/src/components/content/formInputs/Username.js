import React, { Component } from "react";
import {
  Input,
  InputLabel,
  FormControl,
  FormHelperText
} from "@material-ui/core";

class Username extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.sortErrors = this.sortErrors.bind(this);
  }

  onChange(event) {
    this.props.onUsernameChange(event.target.value);
    this.props.onClearErrorMsg("username");
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
    const username = this.props.parentState.username;
    const errors = this.props.parentState.errors;

    return (
      <FormControl margin="dense" required>
        <InputLabel htmlFor="username">username</InputLabel>
        <Input
          id="username"
          name="username"
          value={username}
          onChange={this.onChange}
        />
        <FormHelperText id="usernameHelper" error={true}>
          {this.sortErrors(errors, "username")[0]}
        </FormHelperText>
      </FormControl>
    );
  }
}

export default Username;
