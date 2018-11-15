import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

class Firstname extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.onFirstnameChange(event.target.value);
  }

  render() {
    const firstname = this.props.firstname;
    return (
      <FormControl margin="normal" required>
        <InputLabel htmlFor="firstname">Firstname</InputLabel>
        <Input
          id="firstname"
          name="firstname"
          value={firstname}
          onChange={this.onChange}
        />
      </FormControl>
    );
  }
}

export default Firstname;
