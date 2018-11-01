import React, { Component } from "react";
import ReactDOM from "react-dom";
import NewsContainerLiberal from "./components/NewsContainerLiberal";
import NewsContainerConservative from "./components/NewsContainerConservative";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";

import "./styles.css";

//const API_KEY = `${process.env.REACT_APP_NEWS_API_KEY}`;

function App() {
  return (
    <div>
      <div>
        <div>
          <Header />{" "}
        </div>
        <Search />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

/* TODO: 
-Make searchbar and stuff prettier.
-Come up with a blurb/title/copy, all that
-Consider writing a footer that links to your website
-Look into making that checkbox array
-Handle edge cases like when there's no stories that match
-Make sure the ENV variables are working to protect the API key, and add to gitignore
Deploy!
*/
