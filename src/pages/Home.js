import React from "react";
import { Grid } from "@mui/material";
import BookForm from "../components/BookForm/BookForm";
import WestSeattle from "../assets/WestSeattle.png";
import Deals from "./Deals";
// import "../styles/homeStyles.css";

export default function Home() {
  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={styles.boxImage}
        // className="gradient"
      >
        <BookForm />
      </Grid>

      <Grid container justifyContent="space-around" alignItems="center">
        <Deals />
      </Grid>
    </div>
  );
}

const styles = {
  boxImage: {
    backgroundImage: `url(${WestSeattle})`,
    backgroundRepeat: "no-reapeat",
    height: 700,
    // width: "100%",
    backgroundSize: "cover",
  },
};
