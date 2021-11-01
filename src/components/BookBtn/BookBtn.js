import React from "react";
import Button from "@mui/material/Button";

export default function BookBtn() {
  return (
    <div>
      <Button variant="contained" justify="flex-end">
        Book Tee-Time
      </Button>
    </div>
  );
}

const styles = {
  buttonStyle: {
    alignItems: "flex-end",
  },
};
