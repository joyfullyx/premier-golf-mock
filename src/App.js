import React from "react";
import { Grid } from "@mui/material";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../src/components/Navigation/Nav";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Aerification from "../src/pages/Aerification";
import Deals from "../src/pages/Deals";
import FootGolf from "../src/pages/FootGolf";
import Instruction from "../src/pages/Instruction";

export default function App() {
  return (
    <Grid>
      <Nav />
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/aerification">
              <Aerification />
            </Route>
            <Route exact path="/deals">
              <Deals />
            </Route>
            <Route exact path="/footgolf">
              <FootGolf />
            </Route>
            <Route exact path="/instruction">
              <Instruction />
            </Route>
          </Switch>
        </div>
      </Router>
    </Grid>
  );
}
