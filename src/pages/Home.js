import React from "react";
import { Grid } from "@mui/material";
import BookForm from "../components/BookForm/BookForm";
import WestSeattle from "../assets/WestSeattle.png";

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
