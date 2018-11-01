import React, { Component } from "react";
import NewsContainerLiberal from "./NewsContainerLiberal";
import NewsContainerConservative from "./NewsContainerConservative";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: " "
    };
    this.placeHolder = " ";
    // this.getStories = this.getStories.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //This is probably a little hacky. While learning, I didn't know
  //about React's handling of controlled components, and didn't write
  //my form with the onChange event in mind.

  handleChange(event) {
    this.placeHolder = event.target.value;
    //console.log("Value is " + this.placeHolder);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.placeHolder.length > 0) {
      this.setState({ query: this.placeHolder });
      //console.log(this.state);
    }
  }

  render() {
    return (
      <div>
        <form id="search-bar" onSubmit={this.handleSubmit}>
          <label>
            Keywords:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Search" />
        </form>
        <div className="news-cards">
          {" "}
          <NewsContainerLiberal query={this.state.query} />
          <NewsContainerConservative query={this.state.query} />
        </div>
      </div>
    );
  }
}

export default Search;
