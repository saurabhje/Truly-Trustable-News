import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link, useParams } from 'react-router-dom';

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
  console.log(data.categoryNews);
  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <div className=' p-5 overflow-hidden'>
      <h1 className='text-center text-4xl font-normal'>{data.category.title} News</h1>
      <div className='text-2xl flex justify-center align-center'>
        {data.categoryNews.map((e) => (
          <Link to={`/news/${e._id}`} className="item bg-slate-200" key={e._id}>
            <img id="img" src={e.img} alt="News Image" />
            <div>
              <h2>{e.heading}</h2>
              <p>
                {e.subheading}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
