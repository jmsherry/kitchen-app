import React from "react";
import Header from "../../components/Header/Header";
import Grid from "@material-ui/core/Grid";

import "./Meals.css";

export default function Meals() {
  return (
    <div className="page meals">
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Meals</h1>
        </Grid>
      </Grid>
    </div>
  );
}
