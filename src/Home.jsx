import React from 'react'
import { FaDatabase , FaCloud  ,FaCloudUploadAlt ,FaAngleUp} from "react-icons/fa";
const Home = () => {
  return (
    <div  name ='home' className='w-full h-full flex flex-col justify-between items-center p-5 '>
      <div className="max-w-[1240px] grid md:grid-cols-2 m-auto">

        <div className='flex flex-col justify-center md:items-start px-3 py-4 mt-[100px]'>
<h1 className='md:text-4xl text-4xl text-white md:ml-2'>Cloud Managment</h1>
<p className='md:text-xl text-white mt-7 text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod vel tempora isquibusdam odit Lorem, ipsum dolor sit amet  .</p>
<button className='border-2 border-white py-3 md:px-6 md:mt-5  text-white  md:-ml-[2px] mt-9 w-[180px] ml-[50px] '>Get Started</button>
        </div>
        <div>
 <img  className='w-[400px] md:mt-[100px] md:ml-[120px] mt-[30px] ' src="./img1.jpg" alt="" />
        </div>
      </div>
      <div className=' absolute  flex flex-col  md:w-[960px]   mx-2  md:-translate-y-1 rounded-xl  bg-slate-200 md:py-8 md:bottom-[-17%]  bottom-[-420px] shadow-xl   '>
        <p className='text-xl text-black pb-4 '>Data Services</p>
        <div className='grid md:grid-cols-4  grid-cols-2 mx-5'>
          <p className='mx-[40px] flex flex-col justify-center items-center    cursor-pointer border-2  md:shadow-md md:py-[20px] py-3  px-4 hover:scale-75 duration-300'><FaDatabase/>Data</p>

          <p className='mx-[40px] flex flex-col justify-center items-center   cursor-pointer border-2  md:shadow-md md:py-[20px] py-3 px-4  hover:scale-75 duration-300'><FaCloud/>Cloud</p>

         <p className='mx-[40px] flex flex-col justify-center items-center   cursor-pointer border-2  md:shadow-md md:py-[20px] py-3 px-4  hover:scale-75 duration-300'> <FaCloudUploadAlt/>Data services</p>

         <p className='mx-[40px] flex flex-col justify-center items-center cursor-pointer border-2  md:shadow-md md:py-[20px] py-3 px-4 hover:scale-75 duration-300'><FaAngleUp/>API</p>
        </div>
      </div>
    </div>
  )
}

export default Home
