import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

class CompanyName extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.onCompanyNameChange(event.target.value);
  }

  render() {
    const companyName = this.props.companyName;

    return (
      <FormControl margin="normal" required>
        <InputLabel htmlFor="companyName">Company Name</InputLabel>
        <Input
          id="companyName"
          name="companyName"
          value={companyName}
          onChange={this.onChange}
        />
      </FormControl>
    );
  }
}

export default CompanyName;
