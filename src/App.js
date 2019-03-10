import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Post from "./components/Post";
import View from "./components/View";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Navbar />
          <Switch>
            <Route exact path="/" component={View} />
            <Route path="/post" component={Post} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
