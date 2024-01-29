'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Landing = () => {
    const router= useRouter();
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className='main w-screen h-screen bg-black flex justify-center items-center'>
      <div className="left h-full w-6/12 bg-[#323232] flex flex-col justify-center items-center">
        <div className="image">
          <img src='/landing.png' alt='Landing Hero' width={500} height={300} />
        </div>
        <div className="text-white text-center">
          <h1 className='font-bold text-4xl mt-14 mb-10'>Connect-X makes video <br />conferencing simple.</h1>
          <h4 className='font-extralight text-md text-gray-400'>" All your meetings and collaborations in <br />one place. "</h4>
        </div>
        
      </div>

      <div className={`right h-full w-6/12 bg-[#161616] flex justify-center items-center transition-all duration-500 ${isLogin ? 'flex' : 'hidden'}`}>
        {/* Login Form */}
        <div className="form-1 h-auto w-2/4 rounded-3xl shadow-2xl shadow-black p-12 bg-[#161616] text-white transition-all duration-300" >
          <h1 className='font-extrabold text-4xl mb-6'>Login</h1>
          
          <label className='text-sm transition-all duration-300'>Conference Code</label>
          <input
            type="conference code"
            placeholder="Enter conference code"
            className="w-full p-3 mb-6 rounded-2xl bg-[#1f1f1f] border border-gray-600 focus:outline-none focus:shadow-outline transition-all duration-300"
          />
          
          <label className='text-sm transition-all duration-300'>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full p-3 mb-6 rounded-2xl bg-[#1f1f1f] border border-gray-600 focus:outline-none focus:shadow-outline transition-all duration-300"
          />

          <button className="join-btn w-full rounded-xl text-gray-300 px-8 py-2 bg-[#1f1f1f] hover:bg-[#333333] focus:outline-none focus:shadow-outline transition-all duration-300" onClick={()=>{
            router.push('/Home');
          }}>
            Join
          </button>
          
          <div className='h-0.5 w-full bg-gray-800 my-5'></div>
          <button className="text-gray-300 join-btn w-full rounded-xl  px-8 py-2 bg-[#1f1f1f] hover:bg-[#333333] focus:outline-none focus:shadow-outline transition-all duration-300" onClick={toggleForm}>
            Create a meeting as a host
          </button>
        </div>
      </div>
      
      
      <div className={`right h-full w-6/12 bg-[#161616] flex justify-center items-center transition-all duration-500 ${isLogin ? 'hidden' : 'flex'}`}>
        <div className="form-1 h-auto w-2/4 rounded-3xl shadow-2xl shadow-black p-12 bg-[#161616] text-white transition-all duration-300" >
          <h1 className='font-extrabold text-4xl mb-6'>Host Details</h1>
          
          
          <label className='text-sm transition-all duration-300'>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 mb-6 rounded-2xl bg-[#1f1f1f] border border-gray-600 focus:outline-none focus:shadow-outline transition-all duration-300"
          />
          
          
          
          <button className="join-btn w-full rounded-xl text-white px-8 py-2 bg-[#1f1f1f] hover:bg-[#333333] focus:outline-none focus:shadow-outline transition-all duration-300" onClick={()=>{
            router.push('/Home');
          }}>
            Start Meeting
          </button>
          <div className='h-0.5 w-full bg-gray-800 my-5'></div>
          <button className="text-gray-300 join-btn w-full rounded-xl  px-8 py-2 bg-[#1f1f1f] hover:bg-[#333333] focus:outline-none focus:shadow-outline transition-all duration-300" onClick={toggleForm}>
            Join a meeting as a guest
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
