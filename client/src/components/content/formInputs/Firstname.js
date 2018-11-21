import React, { Component } from "react";
import {
  Input,
  InputLabel,
  FormControl,
  FormHelperText
} from "@material-ui/core";

class Firstname extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.sortErrors = this.sortErrors.bind(this);
  }

  onChange(event) {
    this.props.onFirstnameChange(event.target.value);
    this.props.onClearErrorMsg("firstname");
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
    const firstname = this.props.parentState.firstname;
    const errors = this.props.parentState.errors;

    return (
      <FormControl margin="normal" required>
        <InputLabel htmlFor="firstname">Firstname</InputLabel>
        <Input
          id="firstname"
          name="firstname"
          value={firstname}
          onChange={this.onChange}
        />
        <FormHelperText id="firstnameHelper" error={true}>
          {this.sortErrors(errors, "firstname")[0]}
        </FormHelperText>
      </FormControl>
    );
  }
}

export default Firstname;
