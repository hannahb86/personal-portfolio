import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail, AiOutlineTool } from 'react-icons/ai';
import { GrProjects } from 'react-icons/gr';
import { BsPerson } from 'react-icons/bs';

const SideNav = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    };

    return (
    <div> {/* --- mobile nav --- */} 
      <AiOutlineMenu onClick={handleNav} className='bg-gray-100 w-full fixed top-0 right-0 z-[99] cursor-pointer md:hidden' />
      {
        nav ? ( // ternary operator for if statement
            <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                <a onClick={handleNav} href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-sm 
                bg-gray-100 shadow-gray-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineHome size={20} />
                    <span className='pl-4'>Home</span>
                </a>

                <a onClick={handleNav} href='#about' className='w-[75%] flex justify-center items-center rounded-full shadow-sm 
                bg-gray-100 shadow-gray-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <BsPerson size={20} />
                    <span className='pl-4'>About</span>
                </a>

                <a onClick={handleNav} href='#skills' className='w-[75%] flex justify-center items-center rounded-full shadow-sm 
                bg-gray-100 shadow-gray-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineTool size={20} />
                    <span className='pl-4'>Skills</span>
                </a>

                <a onClick={handleNav} href='#projects' className='w-[75%] flex justify-center items-center rounded-full shadow-sm 
                bg-gray-100 shadow-gray-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <GrProjects size={20} />
                    <span className='pl-4'>Projects</span>
                </a>

                <a onClick={handleNav} href='#contact' className='w-[75%] flex justify-center items-center rounded-full shadow-sm 
                bg-gray-100 shadow-gray-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineMail size={20} />
                    <span className='pl-4'>Contact</span>
                </a>

            </div>
        )
        : ( // ternary operator for else 
            ''
        )}



        {/* --- side nav --- */}
        <div className='md:block hidden fixed top-[25%] z-10'>
            <div className='flex flex-col'>

                <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 
                m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <AiOutlineHome size={20}/>
                </a>

                <a href='#about' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 
                m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <BsPerson size={20}/>
                </a>
                
                <a href='#skills' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 
                m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <AiOutlineTool size={20}/>
                </a>
                
                <a href='#projects' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 
                m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <GrProjects size={20}/>
                </a>

                <a href='#contact' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 
                m-4 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <AiOutlineMail size={20}/>
                </a>

            </div>
        </div>

    </div>
  )
}

export default SideNav;
