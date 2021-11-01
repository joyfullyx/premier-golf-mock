import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          p: 1,
        }}
      >
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          // onClick={handleClick}
        >
          About
        </Button>
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onMouseOver={handleClick}
        >
          Courses
        </Button>
        {/* <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Interbay Golf Center</MenuItem>
          <MenuItem onClick={handleClose}>Jackson Park Golf Course</MenuItem>
          <MenuItem onClick={handleClose}>Jefferson Park Golf Course</MenuItem>
          <MenuItem onClick={handleClose}>West Seattle Golf Course</MenuItem>
          <MenuItem onClick={handleClose}>Bellevue Golf Course</MenuItem>
          <MenuItem onClick={handleClose}>
            Crossroads Par 3 Golf Course
          </MenuItem>
          <MenuItem onClick={handleClose}>Legion Memorial Golf Course</MenuItem>
          <MenuItem onClick={handleClose}>Walter E. Hall Golf Course</MenuItem>
          <MenuItem onClick={handleClose}>Lynnwood Golf Course</MenuItem>
          <MenuItem onClick={handleClose}>Cedarcrest Golf Course</MenuItem>
          <MenuItem onClick={handleClose}>Lake Padden Golf Course</MenuItem>
        </Menu> */}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <List>
            {[
              "Interbay Golf Center",
              "Jackson Park Golf Course",
              "Jefferson Park Golf Course",
              "West Seattle Golf Course",
              "Bellevue Golf Course",
              "Crossroads Par 3 Golf Course",
              "Legion Memorial Golf Course",
              "Walter E. Hall Golf Course",
              "Lynnwood Golf Course",
              "Cedarcrest Golf Course",
              "Lake Padden Golf Course",
            ].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Menu>
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          // onClick={handleClick}
        >
          PGC Instruction Academy
        </Button>
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          // onClick={handleClick}
        >
          Footgolf
        </Button>
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          // onClick={handleClick}
        >
          Daily Deals
        </Button>
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          // onClick={handleClick}
        >
          Fall Aerification
        </Button>
      </Box>
    </div>
  );
}
