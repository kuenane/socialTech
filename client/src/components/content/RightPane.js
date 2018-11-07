import React from "react";
import { Paper, Typography, Avatar, Button } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default ({ style }) => (
  <Paper style={style.Paper}>
    <Typography component="h1" variant="h5">
      Registration
    </Typography>

    <form className={style.form}>
      <FormControl margin="normal" required fullWidth>
        <InputLabel>Username</InputLabel>
        <Input id="username" autoFocus />
      </FormControl>

      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="email">Email Address</InputLabel>
        <Input id="email" name="email" autoComplete="email" autoFocus />
      </FormControl>

      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          name="password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
      </FormControl>

      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={style.submit}
      >
        Sign in
      </Button>
    </form>
  </Paper>
);
