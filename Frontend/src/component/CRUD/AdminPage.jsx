import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/admin')
      .then((response) => setHeadings(response.data))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const deleteNews = (id) => {
    axios
      .post(`http://localhost:3000/delete/${id}`)
      .then((response) => {
        console.log(response);
        setHeadings((prevHeadings) => prevHeadings.filter(e => e._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <div>
        <Link to={'/create-news'} > Create a New News </Link>
        <h1>Admin</h1>
        {headings.map((e) => (
            <div key={e.id}>
            Title: {e.heading}
            <button>Edit</button>
            <button onClick={() => deleteNews(e._id)}>Delete</button>
            </div>
        ))}
    </div>
  );
};

export default AdminPage;
