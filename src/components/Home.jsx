import React from 'react'

const Home = () => {
  return (
    <div className='px-5 w-full h-screen flex justify-center items-center bg-cover bg-light-bg'>

      {/* Title / Heading */}
      <div className='flex flex-col justify-center text-center'>
          <h2 className='font-bold'>Hello I'm <span className='text-[#CD49C0]'>Benjamin Treglown</span></h2>
          <h2 className='font-bold py-5'>and I'm a Front-end Developer based in <span>Melbourne, Australia</span></h2>

          {/* Scrollable links */}
          <div className='flex justify-between p-7 w-full'>
            <a href="#" className='flex flex-col justify-center items-center'>
              <p>Projects</p>
              <img src="Black Arrow.png" alt="click here to scroll down the page"  className='h-6 rotate-90'/>
            </a>
            <a href="#" className='flex flex-col justify-center items-center'>
              <p>About Me</p>
              <img src="Black Arrow.png" alt="click here to scroll down the page"  className='h-6 rotate-90'/>
            </a>
          </div>
      </div>
    </div>
  )
}

export default Home