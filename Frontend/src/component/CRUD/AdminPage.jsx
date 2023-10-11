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

  return (
    <div>
        <Link to={'/create-news'} > Create a New News </Link>
        <h1>Admin</h1>
        {headings.map((e) => (
            <div key={e.id}>
            Title: {e.heading}
            <button>Edit</button>
            <button>Delete</button>
            </div>
        ))}
    </div>
  );
};

export default AdminPage;
