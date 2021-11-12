import React, { useState, useEffect } from "react";
import {
  Grid,
  ImageList,
  Box,
  Paper,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import API from "../../utils/API";

export default function DealsDetail() {
  const [deals, setDeals] = useState({
    premierDeals: [],
    // image: "",
    // courseName: "",
    // numberOfDeals: "",
  });

  const getDeals = () => {
    API.getAllDeals(deals).then((res) => {
      console.log("======== res.data ========", res.data);
      setDeals({
        premierDeals: res.data,
        // image: res.data.image,
        // courseName: res.data.courseName,
        // numberOfDeals: res.data.numberOfDeals,
      });
    });
  };

  useEffect(() => {
    getDeals();
  }, []);

  const styles = {
    mediaStyles: {
      height: 160,
      // paddingTop: "56.25%",
      marginTop: "30",
    },
    cardStyles: {
      // justfifyContent: "space-around",
      // alignItems: "center",
      maxWidth: 300,
      margin: "auto",
    },
    buttonStyle: {
      justifyContent: "center",
      padding: 20,
    },
    contentStyles: {
      textAlign: "center",
    },
    headingStyles: {
      fontWeight: "bold",
      padding: 10,
    },
    footerStyles: {
      background: "linear-gradient(to right bottom, #0044F4, #00EF60)",
      color: "#0044F4",
    },
  };

  return (
    <div>
      <Grid container>
        <ImageList cols={4} gap={50}>
          {/* <Box>
          <Typography>Daily Deals</Typography>
        </Box> */}
          {deals.premierDeals.map((deals) => (
            <Card
              sx={{
                maxWidth: 400,
                // justifyContent: "space-between",
                alignSelf: "center",
              }}
              style={styles.cardStyles}
            >
              <CardMedia
                component="img"
                // height="309"
                image={`${deals.image}`}
                style={styles.mediaStyles}
                // imageUrl={`${deals.image}`}
                // src={`${deals.image}`}
                alt="course logo and name"
              />
              <CardContent style={styles.contentStyles}>
                <Typography
                  gutterBottom
                  variant="h7"
                  component="div"
                  style={styles.headingStyles}
                >
                  {deals.numberOfDeals} DEALS TODAY
                </Typography>
              </CardContent>
              <CardActions style={styles.buttonStyle}>
                <Button variant="outlined" size="small">
                  VIEW DEALS
                </Button>
              </CardActions>
              <div style={styles.footerStyles}>
                <Typography style={styles.footerStyles}>'</Typography>
              </div>
            </Card>
          ))}
        </ImageList>
      </Grid>
    </div>
  );
}
