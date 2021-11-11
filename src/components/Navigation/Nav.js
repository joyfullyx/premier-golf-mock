import React, { useState } from "react";
import { Button, Menu, Box, List, ListItem, ListItemText } from "@mui/material";
import PremierGolfLogo from "../../assets/PremierGolfLogo.jpg";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [about, setAbout] = useState(null);
  const open = Boolean(anchorEl);
  const openAbout = Boolean(about);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setAbout(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 1,
        }}
      >
        <img src={PremierGolfLogo} alt="premier golf logo" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 1,
          }}
        >
          <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onMouseOver={handleClick}
          >
            COURSES
          </Button>
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
              ].map((text) => (
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
            onMouseOver={handleClick}
          >
            ABOUT
          </Button>
          <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            // onClick={handleClick}
          >
            DEALS
          </Button>
          <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            // onClick={handleClick}
          >
            JOIN PREMIER GC
          </Button>
        </Box>
      </Box>
    </div>
  );
}
