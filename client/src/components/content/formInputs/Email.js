import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

class Email extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.onEmailChange(event.target.value);
  }

  render() {
    const email = this.props.email;
    console.log(email);
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
      </FormControl>
    );
  }
}
export default Email;
/*
export default props => (
  <FormControl margin="normal" required>
    <InputLabel htmlFor="email">Email Address</InputLabel>
    <Input id="email" name="email" autoComplete="email" />
  </FormControl>
);*/
