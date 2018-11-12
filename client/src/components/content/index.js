import React from "react";
import { Grid } from "@material-ui/core";
import RightPane from "./RightPane";

export default props => (
  <Grid container justify="center">
    <Grid item xs={12} sm={6} md={4}>
      <RightPane />
    </Grid>
  </Grid>
);
