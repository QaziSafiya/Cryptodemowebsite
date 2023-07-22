import React, { useState } from 'react'
import { FaPhoneAlt ,FaArrowRight , FaArrowsAlt ,FaMixcloud} from "react-icons/fa";
const Support = () => {


  const supportdata=[
    {
      id:1,
      para:"Sales",
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repellendus modi adipisci qui optiotenetur?",
      contact:"Contact"
    },
    {
      id:2,
      para:"Technical",
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repellendus modi adipisci qui optiotenetur?",
      contact:"Contact"
    },
    {
      id:3,
      para:"Management",
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repellendus modi adipisci qui optiotenetur?",
      contact:"Contact"
    },

  ]

  const[support ,setSupport]=useState(supportdata);
  return (
    <div name='support' className='w-full h-full mt-40 '>
  <div className='w-full  md:h-[600px] h-[550px] absolute '><img className='w-full h-full object-cover mix-blend-overlay' src="./img3.jpg" alt="" /></div>
  <div className='w-full max-w-[1240px] text-white   md:ml-[130px] relative'>
    <div className='px-8 py-12  md:mx-[120px] md:my-9'>

        <h2 className='text-white  text-2xl  '>Support</h2>
        <h1 className=' text-2xl  font-bold md:my-8   my-6'>Finding The Right Team</h1>
        <p className='flex  mt-8 md:text-2xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis laborum fugiat officiis! Nemo animi repudiandae, facilis quas exercitationem iusto laborum at explicabo deleniti quasi perferendis accusamus illo qui, eius sed!</p>
    </div>


    <div className='text-white grid md:grid-cols-3 md:mt-[120px]  mt-9
     '>
     
        {
          support.map((ele)=>{
return(
  <div>
  <div className=' md:mx-[80px] mx-5 md:my-4 md:py-2 my-[40px] rounded-xl  bg-white text-blue-800 '>
        <div><FaPhoneAlt size={50} className='rounded-xl md:mt-[-2rem]  mt-[-3rem] py-3 px-3 border-md bg-yellow-400 text-white mx-[20px] '/>
        <p className='mb-6 text-3xl '>{ele.para}</p>
        <p className='mx-4'>{ele.details}</p></div>
        <div className=' text-blue-800  text-xl md:mt-8  mt-5  mb-3 flex justify-start items-center pl-6 '>{ele.contact}<FaArrowRight className='mx-2 mt-1'/></div>

        </div>
  </div>
)
          })
        }


       

       
        

        

        
    </div>
  </div>
    </div>
  )
}

export default Support
