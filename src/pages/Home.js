import React from "react";
import { Grid } from "@mui/material";
import BookForm from "../components/BookForm/BookForm";
import WestSeattle from "../assets/WestSeattle.png";
import Deals from "./Deals";
import "../styles/homeStyles.css";

export default function Home() {
  return (
    <>
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
    </>
  );
}

const styles = {
  boxImage: {
    // background: `url(${WestSeattle}), linear-gradient(to right bottom, #0044F4, #00EF60)`,
    // background:
    //   "linear-gradient(to right bottom, #0044F4, #00EF60)",
    backgroundImage: `url(${WestSeattle})`,
    height: 700,
  },
  // imageStyles: {
  //   background: "linear-gradient(to right bottom, #0044F4, #00EF60)",
  //   opacity: 0.6,
  // },
};
