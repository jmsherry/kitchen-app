import React from "react";
import Header from "../../components/Header/Header";
import Grid from "@material-ui/core/Grid";

import "./Shop.css";

export default function Shop() {
  return (
    <div className="page shop">
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Shop</h1>
        </Grid>
      </Grid>
    </div>
  );
}
