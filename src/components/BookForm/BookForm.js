import React, { useState, useEffect } from "react";
import { Box, Paper, Typography, Button, Container, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BookForm() {
  // states for booking select form
  const [booking, setBooking] = useState({
    course: "",
    date: "",
    time: "",
    players: "",
    holes: "",
  });

  useEffect(() => {
    setBooking({
      ...booking,
    });
  }, []);

  //   set booking state on select
  const handleSelect = (event) => {
    setBooking(event.target.value);
  };

  return (
    <div>
      <Grid container justifyContent="space-around" alignItems="center">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            "& > :not(style)": {
              m: 1,
              width: 894,
              height: 273,
            },
          }}
        >
          {/* <Grid container justifyContent="space-around" alignItems="center"> */}
          <Paper elevation={3}>
            <Typography align="flex-start" style={styles.headerStyle}>
              BOOK A TEE TIME
            </Typography>
            <Grid
              container
              direction="row"
              // justifyContent="space-around"
              style={styles.selectStyle}
            >
              <FormControl style={styles.courseStyle}>
                <InputLabel id="demo-simple-select-label">Course</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="course"
                  // value={booking.course}
                  value={booking.value}
                  label="Course"
                  onSelect={handleSelect}
                >
                  <MenuItem value="interbay">Interbay Golf Center</MenuItem>
                  <MenuItem value="jackson">Jackson Park Golf Course</MenuItem>
                  <MenuItem value="jefferson">
                    Jefferson Park Golf COurse
                  </MenuItem>
                  <MenuItem value="westSeattle">
                    West Seattle Golf Course
                  </MenuItem>
                  <MenuItem value="bellevue">Bellevue Golf Course</MenuItem>
                  <MenuItem value="crossroads">
                    Crossroads Par 3 Golf Course
                  </MenuItem>
                  <MenuItem value="legion">
                    Legion Memorial Golf Course
                  </MenuItem>
                  <MenuItem value="walter">Walter E. Hall Golf Course</MenuItem>
                  <MenuItem value="lynnwood">Lynnwood Golf Course</MenuItem>
                  <MenuItem value="cedarcrest">Cedarcrest Golf Course</MenuItem>
                  <MenuItem value="lakePadden">
                    Lake Padden Golf Course
                  </MenuItem>
                </Select>
              </FormControl>
              <Box
                sx={{
                  width: 150,
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    style={styles.dateStyle}
                    label="Date"
                    value={booking}
                    onChange={(newBooking) => {
                      setBooking(newBooking);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
              <FormControl style={styles.timePlayersHolesStyle}>
                <InputLabel id="demo-simple-select-label">Time</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={booking.value}
                  label="Time"
                  onChange={handleSelect}
                >
                  <MenuItem value="early">Early (6AM - 8AM) </MenuItem>
                  <MenuItem value="morning">Morning (8AM - 12PM)</MenuItem>
                  <MenuItem value="afternoon">Afternoon (12PM - 4PM)</MenuItem>
                  <MenuItem value="evening">Evening (4PM - 8AM)</MenuItem>
                </Select>
              </FormControl>
              <FormControl style={styles.timePlayersHolesStyle}>
                <InputLabel id="demo-simple-select-label">Players</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={booking.value}
                  label="Players"
                  onChange={handleSelect}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                </Select>
              </FormControl>
              <FormControl style={styles.timePlayersHolesStyle}>
                <InputLabel id="demo-simple-select-label">Holes</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={booking.value}
                  label="Holes"
                  onChange={handleSelect}
                >
                  <MenuItem value="8">9</MenuItem>
                  <MenuItem value="18">18</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              container
              justifyContent="flex-end"
              alignItems="flex-end"
              style={styles.searchButtonStyle}
            >
              <Button variant="contained">SEARCH</Button>
            </Grid>
          </Paper>
        </Box>
      </Grid>
      {/* </Grid> */}
    </div>
  );
}

const styles = {
  headerStyle: {
    fontSize: 25,
    padding: 20,
  },
  courseStyle: {
    width: 200,
  },
  dateStyle: {
    width: 150,
  },
  timePlayersHolesStyle: {
    width: 150,
  },
  selectStyle: {
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },
  searchButtonStyle: {
    padding: 20,
  },
};
