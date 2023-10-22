import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminNews.css'

const AdminNews = () => {
    const [headings, setHeadings] = useState([]);
    const [deletionError,setDeletionError] = useState('');

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

  return (
    <div>
      <h2 className='font-normal text-center text-4xl md:text-xl'>News List</h2>  
      {deletionError && <p className="error-message">{deletionError}</p>}
      <div className='newsContainer flex flex-col flex-1 gap-1.5 px-10 md: gap-1 px-5'>
        {headings.map((e) => (
            <div className='newsbox bg-green-400'  key={e._id}>
                <h3 className='newsheading'>Title: {e.heading}</h3>
                <button className='newsedit'>Edit</button>
                <button className='newsdelete' onClick={() => deleteNews(e._id)}>Delete</button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default AdminNews