import React, { Component } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";

class NewsContainerLiberal extends Component {
  constructor() {
    super();
    this.state = {
      stories: []
    };
  }

  componentDidMount() {
    const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
    const QUERY = "election";

    const END_POINT =
      "https://newsapi.org/v2/everything?domains=msnbc.com,huffingtonpost.com&language=en&q=" +
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
      "https://newsapi.org/v2/everything?domains=cnn.com,abc-news.com&language=en&q=" +
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

  //Figure out the logic for setting up a "there's nothing here" message
  //if stories.length < 1

  render() {
    const { stories } = this.state;
    //const shortStories = stories.slice(0, 9);
    var article = " ";
    if (stories.length > 0) {
      article = stories.map(d => (
        <NewsCard key={d.url} data={d}>
          {" "}
        </NewsCard>
      ));
    } else {
      //Replace with a prettier error card
      article = "Hmm, couldn't find any results for that from liberals";
    }
    return (
      <div className="column" id="liberal">
        {article}
      </div>
    );
  }
}

export default NewsContainerLiberal;
