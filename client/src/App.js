import React, { Component, Fragment } from "react";
import "./App.css";
import { Header, Footer } from "./components/layouts";
import Content from "./components/content";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <Header />

        <Content />

        <Footer />
      </Fragment>
    );
  }
}

export default App;
