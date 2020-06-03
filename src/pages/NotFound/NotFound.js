import React from "react";
import Header from "../../components/Header/Header";
import Grid from "@material-ui/core/Grid";

import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="page notfound">
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Page Not Found</h1>
        </Grid>
      </Grid>
    </div>
  );
}
