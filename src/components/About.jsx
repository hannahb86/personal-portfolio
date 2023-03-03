import React from 'react';

const About = () => {
  return (
    <div id='about' className='max-w-[1040] m-auto md:p-40 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-indigo-900 mb-8'>About</h1>

        <div className='grid grid-col-2 grid-row-3 gap-4 pl-32'>
          <img src='src/assets/websitehero.png' className='max-w-[250px] col-start-1 row-span-3 ml-16 p-4'></img> 

          <div className='pl-20 pr-60 col-start-2 mb-6'>
          <p className='text-left text-gray-500 row-start-1 mb-8' >I have always been a creative problem solver. 
          As a child I was the one who built the dens, the one who figured out the quickest 
          route to the shops to buy sweets and later, the pub. </p>

          <p className='text-left text-gray-500 row-start-2 mb-8'>I love solving puzzles and have a love of computer games, particularly World of Warcraft, 
          that I balance with yoga and kickboxing. I am also an accomplished classical guitar teacher and performer.</p>

          <p className='text-left text-gray-500 row-start-3 mb-8'>As a Front-end Developer with UI/UX qualifications, I can provide you and your business with user-centered 
          web applications.</p>

          <p className='text-left text-gray-500'>Please get in touch for more details.</p></div>
        </div>
    </div>
  )
}

export default About;
