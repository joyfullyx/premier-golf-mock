import React from "react";
import { Box, Paper } from "@mui/material";
import BookForm from "../components/BookForm/BookForm";
import WestSeattle from "../assets/WestSeattle.png";

export default function Home() {
  return (
    <div>
      <Box>
        <Paper style={styles.boxImage}>
          <BookForm />
        </Paper>
      </Box>
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
