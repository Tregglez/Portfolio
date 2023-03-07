import React, { useState } from 'react'
import projectData from '../data/projectData'

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="px-5 w-full flex flex-col bg-cover bg-light-bg">

      {/* Title */}
      <div className="relative mb-5">
        <img src="scribble.png" alt="scribble" className="h-44 ml-[-8%] mt-[-3%]" />
        <h1 className="absolute inset-0 pl-36 flex items-center font-bold text-5xl text-[#CD49C0] ml-[-3%]">Projects</h1>
      </div>

      {/* Projects */}
      <div className="sm:pt-20 tabs-container flex w-full justify-between items-center sm-screen-change">
        <div className="tabs flex flex-col w-4/12 ml-24 mb-16 sml-screen-margin top-project">
          {projectData.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm font-medium leading-5 text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-black focus:outline-none focus:text-black dark:focus:text-white focus:font-bold ${
                index === activeIndex ? 'text-black border-0 font-bold' : ''
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <h2 className='btm-border'>{tab.title} / {tab.micro_description}</h2>
            </button>
          ))}
        </div>
        
        {/* Images and Description */}
        <div className="tab-content flex flex-wrap w-5/12 justify-center items-center mr-32 sml-screen-margin">
          <h2 className='py-3 px-5 font-bold'>{projectData[activeIndex].title}</h2>
          <img src={projectData[activeIndex].image} alt={projectData[activeIndex].title} />
            <p className='px-2 py-1 mx-10 mt-5 border-solid border-2 border-gray-400 rounded-md'>{projectData[activeIndex].tech_stack}</p>
          <p className='py-5 text-center small-text'>{projectData[activeIndex].description} <br /><span className='font-bold'>{projectData[activeIndex].warning}</span></p>
          <div className='py-5'>
            {projectData[activeIndex].github && (
              <a href={projectData[activeIndex].github} className='px-2 py-1 mx-10 border-solid border-2 border-gray-400 rounded-md'>GitHub</a>
            )}
            {projectData[activeIndex].demo && (
              <a href={projectData[activeIndex].demo} className='px-2 py-1 border-solid border-2 border-gray-400 rounded-md'>Demo</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;