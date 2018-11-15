import React, { Component } from "react";
import {
  Input,
  InputLabel,
  FormControl,
  FormHelperText
} from "@material-ui/core";

class Lastname extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.sortErrors = this.sortErrors.bind(this);
  }

  onChange(event) {
    this.props.onLastnameChange(event.target.value);
    this.props.onClearErrorMsg("lastname");
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
    const lastname = this.props.parentState.lastname;
    const errors = this.props.parentState.errors;

    return (
      <FormControl margin="normal" required>
        <InputLabel htmlFor="lastname">lastname</InputLabel>
        <Input
          id="lastname"
          name="lastname"
          value={lastname}
          onChange={this.onChange}
        />
        <FormHelperText id="lastnameHelper" error={true}>
          {this.sortErrors(errors, "lastname")[0]}
        </FormHelperText>
      </FormControl>
    );
  }
}

export default Lastname;
