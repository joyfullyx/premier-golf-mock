import React from "react";
import { Grid } from "@mui/material";
import BookForm from "../components/BookForm/BookForm";
import WestSeattle from "../assets/WestSeattle.png";
import Deals from "./Deals";

export default function Home() {
  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={styles.boxImage}
      >
        <BookForm />
      </Grid>
      <Deals />
    </div>
  );
}

const styles = {
  boxImage: {
    backgroundImage: `url(${WestSeattle})`,
    width: "100%",
    height: 700,
  },
};
