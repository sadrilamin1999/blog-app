import React, { Component } from "react";
import Header from "./components/Header";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <Header />
          </div>
        </div>
      </div>
    );
  }
}
