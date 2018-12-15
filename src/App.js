import Footer from "./Components/Layouts/Footer";
import Header from "./Components/Layouts/Header";
import Main from "./Components/Content/Main";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <>
        <Header />

        <Main />

        <Footer />
      </>
    );
  }
}

export default App;
