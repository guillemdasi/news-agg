"use client"

import React, { useState, useEffect } from 'react';
import ArticleList from './ArticleList';
import NewsAPI from 'newsapi';

const NewsFetcher = () => {
  const [articles, setArticles] = useState([]);

  const newsapi = new NewsAPI('be339f9ade374a59b770502c83c894ae');

  const fetchArticles = async () => {
    try {
      const response = await newsapi.v2.topHeadlines({
        apiKey: 'be339f9ade374a59b770502c83c894ae',
        q: 'elecciones',
        // category: 'business',
        //language: 'es',
        country: 'es'
      });

      const data = response.data;
      setArticles(data.articles);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return <ArticleList articles={articles} />;
};

export default NewsFetcher;
