import React from "react";
import Paper from "@mui/material/Paper";
// import WSGC from "../../assets/WSGC.jpeg";
import WestSeattle from "../../assets/WestSeattle.png";

export default function Banner() {
  return (
    <div>
      <Paper>
        <img
          src={WestSeattle}
          alt="West Seattle Golf Course"
          style={styles.imageStyle}
        />
      </Paper>
    </div>
  );
}

const styles = {
  imageStyle: {
    width: "100%",
    height: 700,
  },
};
