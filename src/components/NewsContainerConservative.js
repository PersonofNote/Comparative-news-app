import React, { Component } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";

class NewsContainerConservative extends Component {
  constructor() {
    super();

    this.state = {
      stories: []
    };
  }

  componentDidMount() {
    const QUERY = "election";
    const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
    const END_POINT =
      "https://newsapi.org/v2/everything?sources=fox-news,the-american-conservative&language=en&q=" +
      QUERY +
      "&apiKey=";

    axios
      .get(END_POINT + API_KEY)
      .then(response => {
        this.setState({
          stories: response.data.articles
        });
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  componentWillReceiveProps({ query }) {
    const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
    const QUERY = query;
    const END_POINT =
      "https://newsapi.org/v2/everything?sources=fox-news,the-american-conservative&language=en&q=" +
      QUERY +
      "&apiKey=";

    axios
      .get(END_POINT + API_KEY)
      .then(response => {
        this.setState({
          stories: response.data.articles
        });
      })
      .catch(error => {
        console.log(error, "failed to fetch data");
      });
  }

  render() {
    const { stories } = this.state;
    var article = " ";
    if (stories.length > 0) {
      article = stories.map(d => (
        <NewsCard key={d.url} data={d}>
          {" "}
        </NewsCard>
      ));
    } else {
      article = "Hmm, couldn't find any results for that from conservatives";
    }

    return (
      <div className="column" id="conservative">
        {article}
      </div>
    );
  }
}

export default NewsContainerConservative;
