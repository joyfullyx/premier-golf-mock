import React from "react";
import Paper from "@mui/material/Paper";
import WSGC from "../../assets/WSGC.jpeg";

export default function Banner() {
  return (
    <div>
      <Paper>
        <img src={WSGC} style={styles.imageStyle} />
      </Paper>
    </div>
  );
}

const styles = {
  imageStyle: {
    width: "100%",
    height: 300,
  },
};
