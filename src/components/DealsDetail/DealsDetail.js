import React, { useState, useEffect } from "react";
import {
  Grid,
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
      paddingTop: "56.25%",
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
    },
  };

  return (
    <div>
      <Grid container display="flex" justify="center">
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
              // image={require(`${deals.image}`)}
              style={styles.mediaStyles}
              // imageUrl={`${deals.image}`}
              src={`${deals.image}`}
              alt="course logo and name"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {deals.numberOfDeals} DEALS TODAY
              </Typography>
            </CardContent>
            <CardActions style={styles.buttonStyle}>
              <Button variant="outlined" size="small">
                VIEW DEALS
              </Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </div>
  );
}
