import React, { Component, Fragment } from "react";
import "./App.css";
import { Header, Footer } from "./components/layouts";
import Body from "./components/layouts/Body";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <Body />

        <Footer />
      </Fragment>
    );
  }
}

export default App;
