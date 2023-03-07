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

        
      </div>
    </div>

  )
}

export default About