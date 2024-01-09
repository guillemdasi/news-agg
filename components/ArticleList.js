import React from 'react';

const ArticleList = ({ articles }) => {
  return (
    <div className="container">
      <h1>Top Headlines</h1>

      {articles.map((article) => (
        <div key={article.source.id} className="article-item">
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <p>Source: {article.source.name}</p>
          <a href={article.url} target="_blank" className="read-more-link">Read More</a>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
