import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export default function BookForm() {
  const [value, setValue] = useState(null);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        "& > :not(style)": {
          m: 1,
          width: 900,
          height: 500,
        },
      }}
    >
      <Paper elevation={3}>
        <Typography align="center" style={styles.headerStyle}>
          BOOK A TEE TIME
        </Typography>
      </Paper>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Basic example"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  );
}

const styles = {
  headerStyle: {
    fontSize: 25,
    marginTop: 10,
  },
};
