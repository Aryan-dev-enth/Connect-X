'use client'
import React from 'react';
import HomeNavbar from '@/components/HomeNavbar';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
  return (
    <div className='main w-screen h-screen bg-[#161616] flex items-center'>
      <HomeNavbar />
      <div className="hero flex justify-center h-3/5 w-3/5 item ml-80 flex">

        {/* Left Section */}
        <div className="left h-full w-3/5 flex flex-col items-center">
          {/* Adjusted dimensions to maintain 16:9 aspect ratio */}
          <div className="screen h-4/6 w-full max-w-[1920px] my-10 max-h-[1080px] bg-black flex justify-center items-center rounded-3xl overflow-hidden">
            <h1 className='font-normal text-3xl text-white'>
              Loading ...
            </h1>
          </div>
          <div className="options w-full flex items-center justify-between px-5 py-2 mt-4">

            {/* Mic Option */}
            <div className="mic shadow-2xl shadow-black text-white p-5 w-1/3 mr-2 h-10 flex justify-center items-center rounded-xl">
              mic
            </div>

            {/* Video Option */}
            <div className="video shadow-2xl shadow-black text-white p-5 w-1/3 mr-2 h-10 flex justify-center items-center rounded-xl">
              video
            </div>

            {/* Screen Option */}
            <div className="screen shadow-2xl shadow-black text-white p-5 w-1/3 mr-2 h-10 flex justify-center items-center rounded-xl">
              screen
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right h-1/2 w-2/5 flex flex-col p-11 items-center justify-center gap-10 pt-44 pl-16">
          <h1 className='font-normal text-3xl text-white'>
            Ready to Join?
          </h1>
          <h4 className='text-white font-extralight text-lg'>
            No one else is here
          </h4>

          {/* Join Button */}
          <button className='h-auto w-24 px-5 py-3 text-white bg-[#323232] rounded-2xl transition-all hover:bg-[#242424] hover:scale-105 mt-4' onClick={()=>{
            router.push('/Stream');
          }}>
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
