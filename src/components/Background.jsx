import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';


const Background = ( ) => {
    return (
        <div id='background'>
            <img className='w-full h-screen object-cover' src="./background-img.png" alt="Photo by Arnold Francisca"></img>
            <div className='w-full h-screen absolute top-0 left-0 bg-white/40'>

            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lf:items-start items-center'>
                <h3 className='sm:text-2xl text:1xl pb-5 text-white' >My name is </h3>
                <h1 className='sm:text-5xl text:4xl font-bold text-indigo-900'>Hannah Feehan</h1>
                <h2 className='flex sm:text-3xl text:2xl pt-5 pb-7 text-white' >
                    I'm a 
                <TypeAnimation
                    sequence={[
                        'Front-End Developer', // Types 'One'
                        1000, // Waits 1s
                        'Programmer', // Deletes 'One' and types 'Two'
                        1000, // Waits 1s
                        'UI/UX Designer', // Types 'Three' without deleting 'Two'
                        1000,
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em', paddingLeft: '5px' }}
                    /> </h2>
                <div className='flex justify-between pt-3 max-w-[160px] w-full'> 
                    <FaLinkedin className='cursor-pointer' size={20}/>
                    <FaGithub className='cursor-pointer' size={20}/>
                    <FaInstagram className='cursor-pointer' size={20}/>
                </div>
            </div>
           </div>            
        </div>

    ) 
}    
    
    export default Background;