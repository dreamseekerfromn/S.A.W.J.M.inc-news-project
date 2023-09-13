import React from 'react';
import { useState, useEffect } from 'react';

const News = ({ NEWS }) => {
    const [newsData, setNewsData] = useState(null);

    useEffect(() => {
      // const BUS = import.meta.env.VITE_API_KEY;
    //   const NEWS = import.meta.env.VITE_NEWS_KEY
  
      const URL = `https://newsapi.org/v2/top-headlines/sources?apiKey=${NEWS}`;
  
      fetch(URL, {
        method: 'GET',
        headers: {
          'x-api-key': NEWS,
        },
      })
      .then(response => {
        if (!response.ok) {
          // alert('Network response was not ok');
        }
        return response.json();
      })
      .then(responseData => {
        setNewsData(responseData);
        console.log(responseData)
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }, []);
    return (
        <div>
            
        </div>
    );
}

export default News;
