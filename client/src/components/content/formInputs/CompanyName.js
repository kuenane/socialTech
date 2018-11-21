import React, { Component } from "react";
import {
  Input,
  InputLabel,
  FormControl,
  FormHelperText
} from "@material-ui/core";

class CompanyName extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.sortErrors = this.sortErrors.bind(this);
  }

  onChange(event) {
    this.props.onCompanyNameChange(event.target.value);
    this.props.onClearErrorMsg("companyName");
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
    const companyName = this.props.parentState.companyName;
    const errors = this.props.parentState.errors;

    return (
      <FormControl margin="normal" required>
        <InputLabel htmlFor="companyName">Company Name</InputLabel>
        <Input
          id="companyName"
          name="companyName"
          value={companyName}
          onChange={this.onChange}
        />
        <FormHelperText id="companyNameHelper" error={true}>
          {this.sortErrors(errors, "username")[0]}
        </FormHelperText>
      </FormControl>
    );
  }
}

export default CompanyName;
