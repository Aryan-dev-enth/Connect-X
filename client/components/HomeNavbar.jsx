'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const HomeNavbar = () => {
    const router= useRouter();
    return (
        <div className='home-navbar h-full w-24 bg-[#323232] rounded-3xl rounded-l-none shadow-lg shadow-black flex flex-col justify-between items-center'>
            <div className="icon-container my-20">
                <img src="/users.png" alt="icon" width={20} className='filter invert hover:scale-110 transition-transform cursor-pointer my-8' />
                <img src="/search.png" alt="icon" width={20} className='filter invert hover:scale-110 transition-transform cursor-pointer my-8' />
                <img src="/home.png" alt="icon" width={20} className='filter invert hover:scale-110 transition-transform cursor-pointer my-8' />
            </div>
            <div className="icon-container my-20">
                <img src="/plus.png" alt="icon" width={20} className='filter invert hover:scale-110 transition-transform cursor-pointer my-8' />
                <img src="/person.png" alt="icon" width={20} className='filter invert hover:scale-110 transition-transform cursor-pointer my-8' />
            </div>
            <div className="icon-container mt-20 mb-7">

                <img src="/comment.png" alt="icon" width={20} className='filter invert hover:scale-110 transition-transform cursor-pointer my-8' />
                <img src="/leave.png" alt="icon" width={20} className='filter invert hover:scale- transition-transform cursor-pointer my-8' onClick={()=>{
                    router.push('/');
                }}/>
            </div>
        </div>
    );
}

export default HomeNavbar;
