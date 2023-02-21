import React from 'react';
import WorkItem from './WorkItem';

const data = [
  {
    year: '2022',
    title: 'PF Publishing | Graphic Designer',
    duration: 'Aug 2022 - Sep 2022',
    details: 'Brand design for music publishing company'
  },

  {
    year: '2021',
    title: 'Caredial | UI/UX Designer',
    duration: 'Feb 2021 - Jul 2021',
    details: 'Redesign and rebranding for a care provider'
  },

  {
    year: '2018',
    title: 'Jorvik Media | UI/UX Designer',
    duration: '2018 - 2019',
    details: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid'
  },

  {
    year: '2018',
    title: 'Jorvik Media | UI/UX Designer',
    duration: '2018 - 2019',
    details: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid'
  }

]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='sm:text-5xl text:4xl font-bold text-indigo-900'>Work</h1>
      {data.map((item, idx) => (
          <WorkItem 
            key={idx} 
            year={item.year} 
            title={item.title} 
            duration={item.duration} 
            details={item.details} />
        ))};
    </div>
  )
}

export default Work;
