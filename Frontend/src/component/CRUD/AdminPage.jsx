// import CreateNews from './CreateNews';
import AdminNews from './AdminNews';

const AdminPage = () => {

  return (
    <div className='flex flex-col'>
        <h1 className='font-sans w-full text-center font-normal text-6xl md:text-3xl'>Admin Operations for Kremlin</h1>
        <div className="bg-red-500 mx-20 p-3 md:">
          <AdminNews/>
          {/* <CreateNews/> */}
        </div>
    </div>
  );
};

export default AdminPage;
