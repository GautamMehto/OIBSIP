// RegisterForm.js
import React, { useState } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import SignupSVG from "./SignUp"

const RegisterForm = ({ handleRegister, login, TogglePage }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(firstname, lastname, username, password);
  };

  return (
    <div className={`SignUp-Container w-full h-screen bg-slate-100 flex justify-center items-center absolute top-0 left-0 ${login ? "z-10 hidden" : "z-20 flex"} overflow-hidden sm:p-20 min-[350px]:p-5  min-[450px]:min-h-screen`}>
      <div className='w-[100%] flex md:flex-row-reverse min-[350px]:flex-col-reverse shadow-[0px_0px_30px_-15px_rgba(0,0,0,0.5)]'>

        <div className='md:w-2/5 sm:w-full h-auto backdrop-blur-xl md:shadow-[-20px_0px_60px_-15px_rgba(0,0,0,0.3)] min-[350px]:shadow-[0px_-20px_60px_-15px_rgba(0,0,0,0.3)] flex items-center justify-center flex-wrap md:p-10 min-[350px]:p-5'>

          <div className='md:w-full flex sm:flex-row md:flex-col min-[350px]:flex-col items-center justify-center sm:mb-0 sm:gap-10 '>
            <div className='md:w-full sm:w-1/2 flex flex-col items-center justify-center'>
              <h1 className='text-2xl text-center font-semibold'>Already Have An Account Yet ?</h1>
              <p className='text-[15px] text-center'>All users on MySpace will know that there are millions of people out there. Every day besides so many people joining this community</p>
            </div>

            <div className="sm:w-1/2 md:w-full flex min-[350px]:flex-row sm:flex-col min-[350px]:gap-0 sm:gap-5 justify-center items-center ">
              <SignupSVG />
              <button onClick={(e) => {
                TogglePage(true)
              }} className={`sm:w-max sm:py-1 md:py-2 min-[350px]:w-full md:text-[15px] sm:text-xs flex items-center justify-center rounded-md sm:px-5 md:px-8 min-[350px]:px-5 min-[350px]:py-1 capitalize bg-slate-100 relative overflow-hidden border border-black  gap-1 hover:gap-5 transition-all duration-300`}>Login
                <IoIosArrowRoundForward size={25} />
              </button>
            </div>
          </div>
        </div>

        <div className='SignUp-Form md:w-3/5 sm:w-full h-auto flex items-center justify-center'>
          <form onSubmit={handleSubmit} className=' xl:w-[80%] md:w-full sm:w-full min-[350px]:w-full min-[350px]:p-4 min-[350px]:gap-2 sm:gap-5 sm:p-5 flex flex-col justify-center items-center gap-5'>
            <div className='w-full flex flex-col justify-center items-center sm:mb-0 min-[350px]:mb-5'>
              <h1 className='text-2xl text-center font-semibold'>Sign Up For An Account </h1>
              <p className='text-center text-[15px]'>Lets Get You All Set Up So You Can Start Creating Your First Onbroading Experience</p>
            </div>
            <div className='w-full flex gap-5'>
              <div className='w-1/2'>
                <label className='w-full'>First Name</label>
                <input
                  type="text"
                  placeholder="Your First Name"
                  value={firstname}
                  required
                  className='w-full mt-1 border-slate-400 border-[1px] h-12 pl-[2vh] overflow-hidden'
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className='w-1/2'>
                <label className='w-full'>Last Name</label>
                <input
                  type="text"
                  placeholder="Your Last Name"
                  value={lastname}
                  required
                  className='w-full mt-1 border-slate-400 border-[1px] h-12 pl-[2vh] overflow-hidden'
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
            <div className='w-full'>
              <label className='w-full'>Username</label>
              <input
                type="text"
                placeholder="Enter Your Username"
                value={username}
                required
                className='w-full mt-1 border-slate-400 border-[1px] h-12 pl-[2vh] overflow-hidden'
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='w-full'>
              <label className='w-full'> Password </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                value={password}
                required
                className='w-full mt-1 border-slate-400 border-[1px] h-12 pl-[2vh] overflow-hidden'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='w-full flex gap-2'>
              <input type="checkbox" id="RememberMe" name="RememberMe" value="RememberMe" required className='cursor-pointer' ></input>
              <label htmlFor="RememberMe">I Accept All <a href='https://generator.lorem-ipsum.info/terms-and-conditions' target='_blank' className='text-blue-500 hover:underline'>The Terms & Conditions</a>.</label>
            </div>
            <div>
              <button type='submit' className={`Button w-max py-3 flex items-center rounded-md px-10 bg-blue-400 capitalize relative overflow-hidden `}>Register
                <p className='Button-Text w-max py-3 flex items-center rounded-md px-10 bg-transparent capitalize absolute left-0'>
                  Register
                  <IoIosArrowRoundForward />
                </p>
                <IoIosArrowRoundForward />
              </button>
            </div>
            <a onClick={(e) => {
              TogglePage(true)
            }} className='cursor-pointer hover:underline text-black font-normal'>Already Have An Account?</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
