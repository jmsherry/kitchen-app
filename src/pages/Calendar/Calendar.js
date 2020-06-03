import React from "react";
import Header from "../../components/Header/Header";
import Grid from "@material-ui/core/Grid";

import "./Calendar.css";

export default function Calendar() {
  return (
    <div className="page calendar">
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Calendar</h1>
        </Grid>
      </Grid>
    </div>
  );
}
