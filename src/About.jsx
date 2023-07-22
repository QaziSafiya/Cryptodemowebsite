import React from 'react'

const About = () => {
  return (
    <div  name='about'   className='w-full h-full flex flex-col justify-center items-center p-5 '>
      <div className='w-full h-full text-white mt-[300px]  max-w-[1240px] m-auto '>
        <h1 className='md:text-4xl md:mb-9 text-3xl mb-9'>Trusted by developers across the world</h1>
        <p className='md:text-2xl flex md:mx-[100px] md:mb-[80px] mb-[80px] mx-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim laborum aperiam qui, a expedita adipisci dignissimos ut quidem  tempora voluptas ab amet dicta iste, voluptatem sit hic, voluptatibus nam quaerat neque.</p>
      </div>
      <div className='grid md:grid-cols-3 md:mx-[80px] '>
        <div className='flex flex-col justify-center items-center rounded-md md:text-3xl px-9 border-2  md:py-6 md:mx-[50px] shadow-md bg-white text-blue-800 my-8 py-7 text-2xl'><h2>100%</h2>
        <p className='md:text-xl mt-3 '>Completion</p></div>
        <div className='flex flex-col justify-center items-center rounded-md md:text-3xl px-9 border-2  md:py-6 md:mx-[50px] shadow-md bg-white text-blue-800 my-8 py-7 text-2xl'><h2>24/7</h2>
        <p className='md:text-xl mt-3 '>Delivery</p></div>
        <div className='flex flex-col justify-center items-center rounded-md md:text-3xl px-9 border-2  md:py-6 md:mx-[50px] shadow-md bg-white text-blue-0 my-8 py-7 text-2xl'><h2>100K</h2>
        <p className='md:text-xl mt-3 '>Transaction</p></div>
      </div>
    
    </div>
  )
}

export default About
