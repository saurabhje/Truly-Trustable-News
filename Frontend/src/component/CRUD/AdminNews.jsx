import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminNews.css'

const AdminNews = () => {
    const [headings, setHeadings] = useState([]);
    const [deletionError,setDeletionError] = useState('');
    const [showPopUp, setShowPopUp] = useState(false);
    const [newsItemIdToDelete, setNewsItemIdToDelete] = useState(null);

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
        setShowPopUp(false);

        try {
          const response = await axios.post(`http://localhost:3000/delete/${id}`);
          console.log(response);
        } catch (error) {
          console.log(error);
          setDeletionError('Error deleting the news item. Please try again.');
        }
      };

      function closePopUp(){
        setShowPopUp(false);
        setNewsItemIdToDelete(null);
      }

  return (
    <div>
      <h2 className='font-normal text-center text-xl md:text-4xl '>News List</h2>  
      {deletionError && <p className="error-message">{deletionError}</p>}
      <div className='newsContainer flex flex-col flex-1 px-1 gap-5 md:px-15'>
        {headings.map((e) => (
            <div className='newsbox bg-slate-300 rounded px-2 py-5 md:px-5'  key={e._id}>
                <h3 className='newsheading font-normal mt-0'>Title: {e.heading}</h3>
                <button className="py-2 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 border-none rounded focus:shadow-outline hover:bg-indigo-800">Edit</button>             
                <button
                        className="py-2 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 border-none rounded focus:shadow-outline hover:bg-red-800"
                        onClick={() => {
                          setNewsItemIdToDelete(e._id);
                          setShowPopUp(true);
                        }}>
                        Delete
              </button>            
            </div>
        ))}
      </div>
      {showPopUp && (
        <div className="popup">
          <div className="popup-content ">
            <p>Are you sure you want to delete this item?</p>
            <button onClick={closePopUp}>Cancel</button>
            <button className="py-2 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 border-none rounded focus:shadow-outline hover:bg-red-800" onClick={() => deleteNews(newsItemIdToDelete)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminNews