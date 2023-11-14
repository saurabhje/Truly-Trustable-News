import React from 'react';
import AdminNews from './AdminNews';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col'>
        <h1 className='font-sans w-full text-center font-normal text-3xl md:text-6xl'>Admin Operations for Kremlin</h1>
        < div className="mx-5 p-3 md:mx-20 md:px-10">
        <button 
            className='py-2 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 border-none rounded focus:shadow-outline hover:bg-indigo-800'
            onClick={()=>navigate('/createnews')}>Create News</button>
          <AdminNews/>
        </div>
    </div>
  );
};

export default AdminPage;
