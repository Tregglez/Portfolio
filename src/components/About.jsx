import React from 'react'

const About = () => {
  // All Circle images

  const circleButton1 = '/Circle Buttons/html.png';
  const circleButton2 = '/Circle Buttons/css.png';
  const circleButton3 = '/Circle Buttons/js.png';
  const circleButton4 = '/Circle Buttons/rails.png';
  const circleButton5 = '/Circle Buttons/react.png';
  const circleButton6 = '/Circle Buttons/rd.png';
  const circleButton7 = '/Circle Buttons/sql.png';

  return (
    <div className="px-5 pb-14 w-full flex flex-col bg-cover bg-light-bg">

      {/* Title */}
      <div className='w-full flex flex-row-reverse'>
        <div className="relative">
          <img src="scribble.png" alt="scribble" className="h-44 m-[-8%] mt-[-4%] right-0 transform translate-x-[50%]" />
          <h1 className="absolute inset-0 flex items-center top-12 font-bold text-5xl text-[#CD49C0] ml-[-24%]">About Me</h1>
        </div>
      </div>

      {/* About Me Section */}
      <div className='pt-10 w-full flex flex-col justify-center items-center text-center'>
        {/* Text Description */}
        <h2 className='font-bold mt-3 text-2xl pb-2'>Hi!</h2>
        <div className='flex justify-center items-center text-center w-full h-auto pt-6 text-base'>
          <p className='w-10/12 mx-auto'>
            As a highly motivated front-end web developer, I have revently honed my skills through completion
            of a coding bootcamp at LeWagon. I have a strong focus on user-centered design and a commitment to
            technical excellence, with exeprtise in HTML, Css, and Javascript. I approach each project with a
            proactive mindset, delivering results that are both functional and intuitive. Whether working
            independently or as part of a team, I bring a passion for continuous learning and improvement to my
            work, always striving to stay up-to-date with the latest web technologies. My goal is to create web
            experiences that are not only easy to use, but also make a lasting impact on the user. With my training
            at LeWagon, I am well-equipped to deliver results that exceed expectations.
          </p>
        </div>

        {/* Skills */}
        <div className='flex flex-wrap justify-center mt-10 mx-24'>
          <img src={circleButton1} alt="HTML skill" className='circle-image sm-screen' />
          <img src={circleButton2} alt="CSS skill" className='circle-image sm-screen' />
        </div>
        <div className='flex flex-wrap justify-center'>
          <img src={circleButton3} alt="JS skill" className='circle-image sm-screen' />
          <img src={circleButton4} alt="Rails skill" className='circle-image sm-screen' />
          <img src={circleButton5} alt="React skill" className='circle-image sm-screen' />
        </div>
        <div className='flex flex-wrap justify-center mb-10 mx-24'>
          <img src={circleButton6} alt="Relational Databasing skill" className='circle-image sm-screen' />
          <img src={circleButton7} alt="sql skill" className='circle-image sm-screen' />
        </div>

        {/* Contact Me */}
        <div className='flex flex-col mb-18 mx-auto w-full'>
          <div className='flex justify-center items-center'>
            <form 
              action='https://getform.io/f/ed64f096-ee74-402e-8275-6b5ec255d6eb'
              method='POST'
              className='flex flex-col w-full md:w-7/12'
            >
              <input 
                type='text'
                name='name'
                placeholder='Name'
                className='p-2 w-full border-2 rounded-md focus:outline-none border-gray-300 border-solid'
              />
              <input 
                type='text' 
                name='email'
                placeholder='Email'
                className='my-2 p-2 border-2 rounded-md focus:outline-none border-gray-300 border-solid'
              />
              <textarea
                name='message'
                placeholder='Message'
                rows='10'
                className='mb-4 p-2 border-2 rounded-md focus:outline-none border-gray-300 border-solid'
              />
              <button
                type='submit'
                className='text-center inline-block px-8 py-3 w-full mb-8 text-base font-medium rounded-md bg-white border-gray-300 border-solid border-2 text-gray-500'
              >
                Work With Me!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About