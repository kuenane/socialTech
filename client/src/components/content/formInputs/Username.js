import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

class Username extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  /*showValidarionErrors(element, message) {
    this.props.prevState = {
      errors: [...this.props.prevState.errors, { element, message }]
    };
  }

  clearValidationErrors(element) {
    let newArr = [];
    for (let error of this.props.prevState.errors) {
      if (element != error.element) {
        newArr.push(error);
      }
    }
    return { errors: newArr };
  }*/

  onChange(event) {
    //this.props.username({ username: event.target.value });
    this.props.onUsernameChange(event.target.value);
  }

  render() {
    const username = this.props.username;
    console.log(username);
    return (
      <FormControl margin="normal" required>
        <InputLabel>username</InputLabel>
        <Input id="username" value={username} onChange={this.onChange} />
      </FormControl>
    );
  }
}

export default Username;
