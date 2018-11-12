import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

export default props => (
  <FormControl margin="normal" required>
    <InputLabel htmlFor="password">Password</InputLabel>
    <Input
      name="password"
      type="password"
      id="password"
      autoComplete="current-password"
    />
  </FormControl>
);
