import React from "react";
import { Grid, Typography } from "@material-ui/core";
import DealsDetail from "../components/DealsDetail/DealsDetail";

export default function Deals() {
  const styles = {
    headerStyle: {
      fontWeight: "bold",
      fontSize: 30,
      padding: 50,
    },
  };

  return (
    <>
      <Grid container>
        <Typography style={styles.headerStyle}>Daily deals</Typography>
      </Grid>
      <Grid container justifyContent="space-around">
        <DealsDetail />
      </Grid>
    </>
  );
}
