import React, { Component } from "react";
import { newsCategory } from "../news";

export default class Header extends Component {
  state = {
    searchTerm: "",
  };
  handleChange = (e) => {
    // todo update
    this.setState({ searchTerm: e.target.value });
  };
  handleKeyPress = (e) => {};
  render() {
    const { category } = this.props;
    return (
      <div className="my-4">
        <h1 className="mb-4" style={{ fontWeight: "300" }}>
          Block Buster headline
        </h1>
        <input
          className="form-control"
          type="search"
          placeholder="Type to search anything and press enter"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <div className="my-4">
          {newsCategory &&
            Object.keys(newsCategory).map((item) => {
              return category === newsCategory[item] ? (
                <button className="btn btn-sm btn-warning mr-2 mb-2">{`#${newsCategory[item]}`}</button>
              ) : (
                <button className="btn btn-sm btn-light mr-2 mb-2">{`#${newsCategory[item]}`}</button>
              );
            })}
        </div>
      </div>
    );
  }
}
