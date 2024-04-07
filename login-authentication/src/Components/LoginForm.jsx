// LoginForm.js
import React, { useState } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import Login from './LoginSVG.jsx';



const LoginForm = ({ handleLogin, login, TogglePage }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername("")
    setPassword("")
    handleLogin(username, password);
  };


  return (
    <div className={`Login-Container w-full min-h-screen bg-slate-100 flex justify-center items-center absolute top-0 left-0 ${login ? "z-20 flex" : "z-10 hidden"}  sm:px-20 min-[350px]:p-5`}>
      <div className='w-[100%] flex md:flex-row sm:flex-col-reverse min-[350px]:flex-col-reverse shadow-[0px_0px_30px_-15px_rgba(0,0,0,0.5)]'>
       
        <div className='md:w-2/5 sm:w-full h-auto backdrop-blur-xl md:shadow-[20px_0px_60px_-15px_rgba(0,0,0,0.3)] min-[350px]:shadow-[0px_-20px_60px_-15px_rgba(0,0,0,0.3)] flex items-center justify-center flex-wrap md:p-10 min-[350px]:p-5'>
         
          <div className='md:w-full flex sm:flex-row md:flex-col min-[350px]:flex-col items-center justify-center sm:mb-0 sm:gap-10'>
            <div className='md:w-full sm:w-1/2 flex flex-col items-center justify-center'>
              <h1 className='text-2xl text-center font-semibold'>Don't Have An Account Yet ?</h1>
              <p className='text-[15px] text-center'>Login to Your Account so you can access your dashboard.</p>
            </div>
            <div className="sm:w-1/2 md:w-full flex min-[350px]:flex-row sm:flex-col min-[350px]:gap-0 sm:gap-5 justify-center items-center ">
              <Login />
              <button onClick={(e) => {
                TogglePage(false)
              }} className={` sm:w-max sm:py-1 md:py-2 min-[350px]:w-full md:text-[15px] sm:text-xs flex items-center justify-center rounded-md sm:px-5 md:px-8 min-[350px]:px-5 min-[350px]:py-1 capitalize bg-slate-100 relative overflow-hidden border border-black  gap-1 hover:gap-5 transition-all duration-300`}>Sign Up
                <IoIosArrowRoundForward size={25} />
              </button>
            </div>
          </div>
        </div>

        <div className='Login-Form md:w-3/5 sm:w-full h-auto flex items-center justify-center '>
          <form onSubmit={handleSubmit} className=' xl:w-[70%] md:w-full sm:w-full min-[350px]:w-full min-[350px]:p-4 min-[350px]:gap-2 sm:gap-5 sm:p-10 flex flex-col justify-center items-center gap-5'>
            <div className='w-full flex flex-col justify-center items-center sm:mb-10 min-[350px]:mb-5'>
              <h1 className='text-2xl text-center font-semibold'>Welcome To Your Account </h1>
              <p className=' text-center text-[15px]'>Login to Your Account so you can access your dashboard.</p>
            </div>
            <div className='w-full'>
              <label className='w-full'>Enter Your Username</label>
              <input
                type="text"
                placeholder="Username"
                value={username}
                required
                className='w-full mt-1 border-slate-400 border-[1px] h-12 pl-[2vh] overflow-hidden'
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='w-full'>
              <label className='w-full'>Enter Your Password </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                required
                className='w-full mt-1 border-slate-400 border-[1px] h-12 pl-[2vh] overflow-hidden'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='w-full flex justify-between '>
              <div className='flex gap-2'>
                <input type="checkbox" id="RememberMe" name="RememberMe" value="RememberMe" required ></input>
                <label htmlFor="RememberMe">Remember Me</label>
              </div>
              <a href="#forgot-pass" className='hover:underline text-black font-normal'>Forgot Password?</a>
            </div>
            <div>
              <button type='submit' className={`Button w-max py-3 flex items-center rounded-md px-10 bg-blue-400 capitalize relative overflow-hidden `}>Login
                <p className='Button-Text w-max py-3 flex items-center rounded-md px-10 bg-transparent capitalize absolute left-0'>
                  Login
                  <IoIosArrowRoundForward />
                </p>
                <IoIosArrowRoundForward />
              </button>
            </div>
            <a onClick={(e) => {
              TogglePage(false)
            }} className='cursor-pointer hover:underline text-black font-normal'>Create An Account?</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
