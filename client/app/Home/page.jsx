'use client'
import React from 'react';
import HomeNavbar from '@/components/HomeNavbar';
import ImageCard from '@/components/ImageCard';
import FolderCard from '@/components/FolderCard'; // Adjust the import path based on your project structure
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const dummyVideoData = [
    {
      name: 'John Doe 1',
      profileImg: 'profile.jpg',
      mainImg: 'conf1.jpg',
      meetingSchedule: 'Meeting at 2:00 PM',
      createdAt: 'January 28, 2024',
    },
    {
      name: 'John Doe 2',
      profileImg: 'profile.jpg',
      mainImg: 'conf2.jpg',
      meetingSchedule: 'Meeting at 3:00 PM',
      createdAt: 'January 29, 2024',
    },
    {
      name: 'John Doe 3',
      profileImg: 'profile.jpg',
      mainImg: 'conf3.png',
      meetingSchedule: 'Meeting at 4:00 PM',
      createdAt: 'January 30, 2024',
    },
    {
      name: 'John Doe 4',
      profileImg: 'profile.jpg',
      mainImg: 'conf4.png',
      meetingSchedule: 'Meeting at 5:00 PM',
      createdAt: 'January 31, 2024',
    },
  ];

  const dummyFolderData = [
    {
      name: 'Alice Smith',
      profileImg: 'profile.jpg',
      taskTitle: 'Project Files',
      createdAt: 'February 5, 2024',
    },
    {
      name: 'Bob Johnson',
      profileImg: 'profile.jpg',
      taskTitle: 'Design Mockups',
      createdAt: 'February 6, 2024',
    },
    {
      name: 'Eva Martinez',
      profileImg: 'profile.jpg',
      taskTitle: 'Development Tasks',
      createdAt: 'February 7, 2024',
    },
    {
      name: 'Charlie Brown',
      profileImg: 'profile.jpg',
      taskTitle: 'Marketing Materials',
      createdAt: 'February 8, 2024',
    },
  ];
  

  return (
    <div className="main flex h-screen bg-[#161616]">
      <HomeNavbar />

      <div className="flex-grow p-8 overflow-hidden">
        <div className="top h-auto w-full ml-20 flex justify-between items-start">
          <div className="left h-auto w-2/12 my-10 flex justify-between items-center">
            <img src="/profile.jpg" alt="pfp" className='rounded-full' width={100} />
            <div>
              <h4 className='text-white font-normal text-2xl'>
                Your Workspace
              </h4>
              <h1 className='text-white font-semibold text-3xl mt-3' >
                CX Team
              </h1>
            </div>
          </div>
          <div className="right mr-20 flex w-14 h-auto justify-between items-center">
            <img src="/search.png" alt="icon" width={20} className='filter invert hover:scale-110 transition-transform cursor-pointer my-8' />
            <img src="/bell.png" alt="icon" width={20} className='filter invert hover:scale-110 transition-transform cursor-pointer my-8' />
          </div>
        </div>

        <div className="hero ml-20 my-5">
          <div className="videos">
            <h1 className='text-white font-medium text-2xl'>
              Videos
            </h1>
            <div className="cards flex m-5 ">
              {dummyVideoData.map((videoData, index) => (
                <ImageCard key={index} {...videoData} />
              ))}
            </div>
          </div>
          <div className="folder my-10">
            <h1 className='text-white font-medium text-2xl'>
              Folders
            </h1>
            <div className="cards flex m-5 ">
              {
                dummyFolderData.map((data, index) => (
                  <FolderCard key= {index} {...data}/>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
