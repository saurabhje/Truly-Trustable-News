import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CreateNews from './CreateNews';

const AdminPage = () => {
  const [headings, setHeadings] = useState([]);
  const [deletionError, setDeletionError] = useState(null);
  const [isCreateNewsVisible, setIsCreateNewsVisible] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/admin');
      setHeadings(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteNews = async (id) => {
    setHeadings((prevHeadings) => prevHeadings.filter(e => e._id !== id));
    setDeletionError(null);

    try {
      const response = await axios.post(`http://localhost:3000/delete/${id}`);
      console.log(response);
    } catch (error) {
      console.log(error);
      setDeletionError('Error deleting the news item. Please try again.');
    }
  };
  const renderCreateNews = () => {
    setIsCreateNewsVisible(true);
  };

  return (
    <div>
      <h1>Admin</h1>
      {isCreateNewsVisible ? (
        <CreateNews />
      ) : (
        <button onClick={renderCreateNews}>Create New News</button>
      )}

      {deletionError && <p className="error-message">{deletionError}</p>}
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
