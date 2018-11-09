import React from "react";
import { Grid, Paper } from "@material-ui/core";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const style = {
  Paper: { padding: 50, marginTop: 10, marigBottom: 10 }
};

export default props => (
  <Grid container sm={12} justify="center">
    <Grid sm={6}>
      <RightPane style={style} />
    </Grid>
  </Grid>
);
