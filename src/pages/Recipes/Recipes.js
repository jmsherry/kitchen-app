import React from "react";
import Header from "../../components/Header/Header";
import Grid from "@material-ui/core/Grid";

import "./Recipes.css";

export default function Recipes() {
  return (
    <div className="page recipes">
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Recipes</h1>
        </Grid>
      </Grid>
    </div>
  );
}
