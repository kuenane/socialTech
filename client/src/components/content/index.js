import React from "react";
import { Grid, Paper } from "@material-ui/core";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const style = {
  Paper: { padding: 20, marginTop: 10, marigBottom: 10 }
};

export default props => (
  <Grid container sm={12}>
    <Grid item sm={6}>
      <LeftPane style={style} />
    </Grid>
    <Grid item sm={6}>
      <RightPane style={style} />
    </Grid>
  </Grid>
);
