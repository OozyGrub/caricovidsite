import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import Map from "../pages/MapPage/Map";
import Credits from "../pages/CreditsPage/Credits";
import GraphPage from "../pages/GraphPage/GraphPage";

import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Link to="/">
              <Navbar.Brand>Caribbean COVID Map</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav activeKey="/home">
                <Nav.Link style={{color: "white", paddingRight: 10}} href="/graphs" className="text-align-end">Case Graphs</Nav.Link>
                <Nav.Link style={{color: "white"}} href="/credits">Credits</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div>
            <Switch>
              <Route exact path="/" component={Map}/>
              <Route path="/credits" component={Credits}/>     
              <Route path="/graphs" component={GraphPage}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
