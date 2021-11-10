import React, { useState, useEffect } from "react";
import {
  Grid,
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
      height: 0,
      paddingTop: "56.25%",
      marginTop: "30",
    },
    cardStyles: {
      justfifyContent: "space-around",
      alignItems: "center",
    },
  };

  return (
    <div>
      <Grid container display="flex" justify="center" spacing={7}>
        {/* <> */}
        {deals.premierDeals.map((deals) => (
          <Card
            sx={{
              maxWidth: 345,
              justifyContent: "space-around",
              alignSelf: "center",
            }}
          >
            <CardMedia
              component="img"
              height="309"
              // image={require(`${deals.image}`)}
              style={styles.mediaStyles}
              imageUrl={`${deals.image}`}
              alt="course logo and name"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {deals.numberOfDeals} DEALS TODAY
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small">
                VIEW DEALS
              </Button>
            </CardActions>
          </Card>
        ))}
        {/* </> */}
      </Grid>
    </div>
  );
}
