// import CreateNews from './CreateNews';
import AdminNews from './AdminNews';

const AdminPage = () => {

  return (
    <div className='flex flex-col'>
        <h1 className='font-sans w-full text-center font-normal text-3xl md:text-6xl'>Admin Operations for Kremlin</h1>
        < div className="mx-5 p-3 md:mx-20 md:px-10">
          <AdminNews/>
          {/* <CreateNews/> */}
        </div>
    </div>
  );
};

export default AdminPage;
