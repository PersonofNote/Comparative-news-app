import React from "react";

const NewsCard = props => {
  const {
    source,
    name,
    author,
    title,
    description,
    urlToImage,
    url,
    content
  } = props.data;
  return (
    <div className="news-card">
      <img className="small-img" src={urlToImage} />
      <h2 className="news-title">
        <a href={url}>{title}</a>
      </h2>
      <p> {source.title}</p>
      <p className="article-content">{description}</p>
      <a href={url}>
        <button>Read more</button>
      </a>
      <p className="source-note">Sourced from {source.name}</p>
    </div>
  );
};

export default NewsCard;
