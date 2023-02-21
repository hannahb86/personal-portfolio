import React from 'react'

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#312E81]'>Projects</h1>
            <p className='text-center py-8 text-gray-500' >Lorem ipsum dolor sit amet consectetur, a
            dipisicing elit. Expedita corporis voluptas voluptate aspernatur pariatur 
            sequi nulla perferendis omnis fuga itaque.
            </p>

            <div className='grid sm:grid-cols 2 gap-12'>
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            </div>
            
        </div>
    );
};

export default Projects;