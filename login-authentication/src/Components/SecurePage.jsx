// SecuredPage.js
import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";


const SecuredPage = ({ user, userlast, handleLogout }) => {
  return (
    <div className='w-full h-screen flex flex-col justify-between items-center p-20'>
      <div >
      <h2 className='text-2xl font-semibold'>Welcome, {user} {userlast}!</h2>
      <p className='text-center'>You are now logged in successfully.</p>
      </div>
      <div className='w-full h-52 flex items-center justify-center bg-black'>
      <h1 className='text-white text-8xl'>This is Secured Page</h1>
      </div>
      <button onClick={(e)=>{
        handleLogout()
      }} className={`Button w-max py-3 flex items-center rounded-md px-10 bg-blue-400 capitalize relative overflow-hidden `}>Log Out
        <p className='Button-Text w-max py-3 flex items-center rounded-md px-10 bg-transparent capitalize absolute left-0'>
          Log Out
          <IoIosArrowRoundForward />
        </p>
        <IoIosArrowRoundForward />
      </button>
    </div>
  );
};

export default SecuredPage;
