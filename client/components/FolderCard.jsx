import React from 'react';

const FolderCard = ({ name, profileImg, taskTitle, createdAt }) => {
    return (
        <div className="card h-auto w-60 p-6 border rounded-3xl border-gray-800 text-left mx-2 hover:scale-110 hover:mx-3 transition-all cursor-pointer">
            <div className="top flex items-center mb-3">
                <img src={profileImg} alt="pfp" className='rounded-full' width={30}/>
                <h1 className='text-white font-thin text-sm tracking-wide ml-3'>{name}</h1>
            </div>
            <div className="img mb-3">
                
            </div>
            <div className="bottom">
                <h3 className='text-lg text-white font-normal mb-1'>{taskTitle}</h3>
                <h4 className='text-sm text-white font-light'>{createdAt}</h4>
            </div>
        </div>
    );
};

export default FolderCard;
