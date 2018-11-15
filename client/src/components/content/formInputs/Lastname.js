import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

class Lastname extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.onLastnameChange(event.target.value);
  }

  render() {
    const lastname = this.props.lastname;
    console.log(lastname);
    return (
      <FormControl margin="normal" required>
        <InputLabel htmlFor="lastname">lastname</InputLabel>
        <Input
          id="lastname"
          name="lastname"
          value={lastname}
          onChange={this.onChange}
        />
      </FormControl>
    );
  }
}

export default Lastname;
