import React, { Component } from "react";
import "./App.css";
import "./components/AppNavbar";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
//import AppNavbar from "./components/AppNavbar";
import ButtonAppBar from "./components/ButtonAppBar";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <ButtonAppBar />
      </MuiThemeProvider>
    );
  }
}

export default App;
