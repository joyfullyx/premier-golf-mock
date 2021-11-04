import React from "react";
import { Box, Paper, Grid } from "@mui/material";
import BookForm from "../components/BookForm/BookForm";
import WestSeattle from "../assets/WestSeattle.png";

export default function Home() {
  return (
    <div>
      <Grid container justifyContent="center" alignItems="center">
        <Paper style={styles.boxImage}>
          {/* <Box style={styles.boxStyle}> */}
          <BookForm />
          {/* </Box> */}
        </Paper>
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
  boxStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
};
