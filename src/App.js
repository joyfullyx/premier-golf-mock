import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Nav from "../src/components/Navigation/Nav";
import BookBtn from "./components/BookBtn/BookBtn";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Aerification from "../src/pages/Aerification";
import Deals from "../src/pages/Deals";
import FootGolf from "../src/pages/FootGolf";
import Instruction from "../src/pages/Instruction";
import Banner from "./components/Banner/Banner";

export default function App() {
  return (
    <div>
      <Banner />
      <Nav />
      <BookBtn />
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
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
      {/* <Home /> */}
    </div>
  );
}
