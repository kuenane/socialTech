import React, { Component, Fragment } from "react";
import "./App.css";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { Header, Footer } from "./components/layouts";
import Content from "./components/content";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Fragment>
          <Header />

          <Content />

          <Footer />
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
