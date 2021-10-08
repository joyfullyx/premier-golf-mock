import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid } from "@mui/material";

export default function Nav() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>Nav items go here</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
