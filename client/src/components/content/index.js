import React from "react";
import { Grid } from "@material-ui/core";
import RightPane from "./RightPane";

export default props => (
  <Grid container sm={12} justify="center">
    <Grid sm={6}>
      <RightPane style={style} />
    </Grid>
  </Grid>
);
