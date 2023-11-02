import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { id } = useParams();

  const [data, setData] = useState({ category: {}, categoryNews: [] });

  async function getData(id) {
    try {
      const res = await axios.get(`http://localhost:3000/category/${id}`);
      setData(res.data); // Store the entire response in the state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <div>
      <h2>Category: {data.category.title}</h2>
      <h3>Category News:</h3>
      <ul>
        {data.categoryNews.map((news) => (
          <a
            href={`/news/${news._id}`}
            key={news._id}
            className="text-blue-500 hover:underline"
          >
            {news.heading}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Category;
