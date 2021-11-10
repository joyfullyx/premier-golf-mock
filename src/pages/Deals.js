import React, { useState, useEffect } from "react";
import DealsDetail from "../components/DealsDetail/DealsDetail";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import API from "../utils/API";

export default function Deals() {
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

  return (
    <div>
      <Grid>
        <>
          {deals.premierDeals.map((deals) => (
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={deals.image}
                src={deals.image}
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
        </>
      </Grid>
    </div>
  );
}
