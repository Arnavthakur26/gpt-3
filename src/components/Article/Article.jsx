import React from "react";
import "./Article.css";

function Article({ imgURL, date, title }) {
  return (
    <div className="gpt3_blog-container_article">
      <div className="gpt3_blog-container-image">
        <img src={imgURL} alt="blog" srcset="" />
      </div>
      <div className="gpt3_blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
}

export default Article;
