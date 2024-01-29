'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const LargeHomeNavbar = () => {
    const router = useRouter();
    return (
        <div className='h-screen w-48 bg-[#323232] rounded-3xl rounded-l-none shadow-2xl shadow-black flex flex-col justify-between items-center py-5'>

            <div className="top w-full h-auto py-5 ">
                <h1 className='text-3xl font-sans font-bold text-white mb-10 mx-2 cursor-pointer transition-all hover:scale-105' onClick={()=>{
                router.push('/Home');
              }}>Connext-X</h1>
                <div className="users w-full h-auto p-3 cursor-pointer hover:bg-[#161616] rounded-md flex  flex-center  items-center px-5 transition-all duration-100">
                    <img src="/users.png" alt="" width={20} className='filter invert' />
                    <h4 className='text-white font-sm text-sm ml-4'>
                        Join Session
                    </h4>
                </div>
                <div className="users w-full h-auto p-3 cursor-pointer hover:bg-[#161616] rounded-md flex flex-center  items-center px-5 transition-all duration-100">
                    <img src="/search.png" alt="" width={20} className='filter invert' />
                    <h4 className='text-white font-sm text-sm ml-4' >
                        Enter Code
                    </h4>
                </div>
                <div className="users w-full h-auto p-3 cursor-pointer hover:bg-[#161616] rounded-md flex  flex-center items-center px-5 transition-all duration-100">
                    <img src="/home.png" alt="" width={20} className='filter invert' />
                    <h4 className='text-white font-sm text-sm ml-4'>
                        Home
                    </h4>
                </div>

            </div>
            <div className="middle w-full h-auto">
                <div className="users w-full h-auto p-3 cursor-pointer hover:bg-[#161616] rounded-md flex  flex-center  items-center px-5 transition-all duration-100">
                    <img src="/plus.png" alt="" width={20} className='filter invert' />
                    <h4 className='text-white font-sm text-sm ml-4'>
                        Create
                    </h4>
                </div>
                <div className="users w-full h-auto p-3 cursor-pointer hover:bg-[#161616] rounded-md flex  flex-center  items-center px-5 transition-all duration-100">
                    <img src="/person.png" alt="" width={20} className='filter invert' />
                    <h4 className='text-white font-sm text-sm ml-4'>
                        Participants
                    </h4>
                </div>
            </div>
            <div className="bottom w-full h-auto">

                <div className="users w-full h-auto p-3 cursor-pointer hover:bg-[#161616] rounded-md flex  flex-center  items-center px-5 transition-all duration-100">
                    <img src="/comment.png" alt="" width={20} className='filter invert' />
                    <h4 className='text-white font-sm text-sm ml-4'>
                        Chat
                    </h4>
                </div>
                <div className="users w-full h-auto p-3 cursor-pointer hover:bg-[#161616] rounded-md flex  flex-center  items-center px-5 transition-all duration-100" onClick={() => {
                    router.push('/Home');
                }}>
                    <img src="/leave.png" alt="" width={20} className='filter invert' />
                    <h4 className='text-white font-sm text-sm ml-4'>
                        Leave
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default LargeHomeNavbar;
