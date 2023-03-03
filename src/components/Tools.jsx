import React from 'react';

const Tools = () => {
  return (
    <div className='max-w-[1040px] m-auto py-16'>
        <h1 className='text-4xl font-bold text-center text-indigo-900'>Skills</h1>

        <div className='mt-16 grid gap-6 grid-cols-6 grid-row-4'>

          {/* Frontend-y !! STILL TO DO - Redux */}
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

          <div className='min-w-180px col-start-5 row-start-1'>
            <img src='./src/assets/icons/Tailwind.png' alt='Tailwind icon'/>
          </div>

          <div className='min-w-180px col-start-6 row-start-1'>
            <img src='./src/assets/icons/Bootstrap.png' alt='Bootstrap icon'/>
          </div>


          {/* Backend-y !! STILL TO DO - Apache and Command Line */}
          <div className='min-w-180px col-start-1 row-start-2'>
            <img src='./src/assets/icons/JSON.png' alt='JSON icon'/>
          </div>

          <div className='min-w-180px col-start-2 row-start-2'>
            <img src='./src/assets/icons/PHP.png' alt='PHP icon'/>
          </div>

          <div className='min-w-180px col-start-3 row-start-2'>
            <img src='./src/assets/icons/MySQL.png' alt='MySQL icon'/>
          </div>


          {/* Development !! STILL TO DO - VS Code Vite CRA Next */}
          <div className='min-w-180px col-start-1 row-start-3'>
            <img src='./src/assets/icons/NodeJs.png' alt='Node JS icon'/>
          </div>


          {/* Creative */}
          <div className='min-w-180px col-start-1 row-start-4'>
            <img src='./src/assets/icons/Adobe.png' alt='Adobe icon'/>
          </div>

          <div className='min-w-180px col-start-2 row-start-4'>
            <img src='./src/assets/icons/Figma.png' alt='Figma icon'/>
          </div>

          <div className='min-w-180px col-start-3 row-start-4'>
            <img src='./src/assets/icons/Zeplin.png' alt='Zeplin icon'/>
          </div>

          <div className='min-w-180px col-start-4 row-start-4'>
            <img src='./src/assets/icons/Unity_1.png' alt='Unity icon'/>
          </div>

          

        </div>

    </div>
  )
}

export default Tools;
