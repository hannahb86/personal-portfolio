import React from 'react';

const Tools = () => {
  return (
    <div className='max-w-[1040px] m-auto py-16'>
        <h1 className='text-4xl font-bold text-center text-indigo-900'>Skills</h1>

        <div className='py-8 grid gap-1 grid-cols-5 grid-row-2'>

          <div className='min-w-120px col-start-1'>
            <img src='./src/assets/icons/HTML.png' alt='HTML icon'/>
          </div>

          <div className='min-w-180px col-start-2'>
            <img src='./src/assets/icons/CSS.png' alt='CSS icon'/>
          </div>

          <div className='min-w-180px col-start-3'>
            <img src='./src/assets/icons/JS.png' alt='Javascript icon'/>
          </div>

          <div className='min-w-180px col-start-4'>
            <img src='./src/assets/icons/React.png' alt='React icon'/>
          </div>
        </div>

    </div>
  )
}

export default Tools;
