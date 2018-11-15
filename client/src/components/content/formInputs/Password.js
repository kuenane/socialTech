import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

class Password extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.onPasswordChange(event.target.value);
  }

  render() {
    const password = this.props.password;

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
      </FormControl>
    );
  }
}

export default Password;
