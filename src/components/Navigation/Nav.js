import React, { useState } from "react";
import {
  Button,
  Menu,
  Box,
  List,
  ListItem,
  ListItemText,
  MenuItem,
} from "@mui/material";
import PremierGolfLogo from "../../assets/PremierGolfLogo.jpg";
import { navMenuItems } from "./navMenuItems";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  const handleClick = (index, event) => {
    setAnchorEl({ [index]: event.currentTarget });
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    logoStyle: {
      marginLeft: 17,
    },
    buttonStyle: {
      color: "black",
    },
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          // justifyContent: "space-between",
          p: 1,
        }}
      >
        <img
          src={PremierGolfLogo}
          alt="premier golf logo"
          style={styles.logoStyle}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 1,
          }}
        >
          {/* map over nav menu titles by index from navMenuItems */}
          {Object.keys(navMenuItems).map((item, index) => (
            <div key={index}>
              <Button
                style={styles.buttonStyle}
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onMouseOver={(e) => handleClick(index, e)}
              >
                {item}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl && anchorEl[index]}
                open={open && anchorEl[index]}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {/* map over drop down menu items from navMenuItems */}
                {navMenuItems[item].map((navMenuItems, navMenuIndex) => (
                  <MenuItem
                    key={navMenuIndex}
                    selected={navMenuItems === item}
                    onClose={handleClose}
                  >
                    {navMenuItems.title}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          ))}
        </Box>
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 1,
          }}
        > */}
        <Button style={styles.buttonStyle}>DEALS</Button>
        <Button style={styles.buttonStyle}>JOIN PREMIER GC</Button>
        {/* </Box> */}
      </Box>
    </div>
  );

  // return (
  //   <div>
  //     <Box
  //       sx={{
  //         display: "flex",
  //         justifyContent: "space-between",
  //         p: 1,
  //       }}
  //     >
  //       <img
  //         src={PremierGolfLogo}
  //         alt="premier golf logo"
  //         style={styles.logoStyle}
  //       />
  //       <Box
  //         sx={{
  //           display: "flex",
  //           justifyContent: "flex-end",
  //           p: 1,
  //         }}
  //       >
  //         <Button
  //           style={styles.buttonStyle}
  //           id="basic-button"
  //           aria-controls="basic-menu"
  //           aria-haspopup="true"
  //           aria-expanded={open ? "true" : undefined}
  //           onMouseOver={handleClick}
  //         >
  //           COURSES
  //         </Button>
  //         <Menu
  //           id="basic-menu"
  //           anchorEl={anchorEl}
  //           open={open}
  //           onClose={handleClose}
  //           MenuListProps={{
  //             "aria-labelledby": "basic-button",
  //           }}
  //         >
  //           <List>
  //             {[
  //               "Interbay Golf Center",
  //               "Jackson Park Golf Course",
  //               "Jefferson Park Golf Course",
  //               "West Seattle Golf Course",
  //               "Bellevue Golf Course",
  //               "Crossroads Par 3 Golf Course",
  //               "Legion Memorial Golf Course",
  //               "Walter E. Hall Golf Course",
  //               "Lynnwood Golf Course",
  //               "Cedarcrest Golf Course",
  //               "Lake Padden Golf Course",
  //             ].map((text) => (
  //               <ListItem button key={text}>
  //                 <ListItemText primary={text} />
  //               </ListItem>
  //             ))}
  //           </List>
  //         </Menu>
  //         <Button
  //           style={styles.buttonStyle}
  //           id="basic-button"
  //           aria-controls="basic-menu"
  //           aria-haspopup="true"
  //           aria-expanded={open ? "true" : undefined}
  //           onClick={handleClick}
  //           onMouseOver={handleClick}
  //         >
  //           ABOUT
  //         </Button>
  //         <Menu
  //           id="basic-menu"
  //           anchorEl={anchorEl}
  //           // open={open}
  //           onClose={handleClose}
  //           MenuListProps={{
  //             "aria-labelledby": "basic-button",
  //           }}
  //         >
  //           <List>
  //             {[
  //               "Mission statement",
  //               "PGC instruction academy",
  //               "Footgolf",
  //               "News",
  //               "Employment",
  //               "Premier Club",
  //               "Join Premier GC",
  //               "Contact Us",
  //             ].map((text) => (
  //               <ListItem button key={text}>
  //                 <ListItemText primary={text} />
  //               </ListItem>
  //             ))}
  //           </List>
  //         </Menu>
  //         <Button
  //           style={styles.buttonStyle}
  //           id="basic-button"
  //           aria-controls="basic-menu"
  //           aria-haspopup="true"
  //           aria-expanded={open ? "true" : undefined}
  //           // onClick={handleClick}
  //         >
  //           DEALS
  //         </Button>
  //         <Button
  //           style={styles.buttonStyle}
  //           id="basic-button"
  //           aria-controls="basic-menu"
  //           aria-haspopup="true"
  //           aria-expanded={open ? "true" : undefined}
  //           // onClick={handleClick}
  //         >
  //           JOIN PREMIER GC
  //         </Button>
  //         <Button
  //           style={styles.buttonStyle}
  //           id="basic-button"
  //           aria-controls="basic-menu"
  //           aria-haspopup="true"
  //           aria-expanded={open ? "true" : undefined}
  //         >
  //           MY ACCOUNT
  //         </Button>
  //       </Box>
  //     </Box>
  //   </div>
  // );
}
