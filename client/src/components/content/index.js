import React from "react";
import { Grid } from "@material-ui/core";
import RightPane from "./RightPane";

const style = {
  Paper: { padding: 50, marginTop: 10, marigBottom: 10 }
};

export default props => (
  <Grid container justify="center">
    <Grid xs={12} sm={6}>
      <RightPane style={style} />
    </Grid>
  </Grid>
);
