import React from "react";
import Header from "../../components/Header/Header";
import Grid from "@material-ui/core/Grid";

import "./Home.css";

export default function Home() {
  return (
    <div className="page home">
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Home</h1>
        </Grid>
      </Grid>
    </div>
  );
}
