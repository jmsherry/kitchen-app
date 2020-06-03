import React from "react";
import Header from "../../components/Header/Header";
import Grid from "@material-ui/core/Grid";

import "./Cupboard.css";

export default function Cupboard() {
  return (
    <div className="page cupboard">
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Cupboard</h1>
        </Grid>
      </Grid>
    </div>
  );
}
