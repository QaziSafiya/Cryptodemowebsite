import React, { useState } from 'react'
import {FcCheckmark  } from "react-icons/fc";
const Notifications = () => {

    const data=[
        {
            id:1,
            notification:"Notification",
            para:"Lorem ipsum, dolor sit amet consectetur  deleniti adipisci aliquid u."
        },

        {
            id:2,
            notification:"Notification",
            para:"Lorem ipsum, dolor sit amet consectetur  deleniti adipisci aliquid u."
        },
        {
            id:3,
            notification:"Notification",
            para:"Lorem ipsum, dolor sit amet consectetur  deleniti adipisci aliquid u."
        },
        {
            id:4,
            notification:"Notification",
            para:"Lorem ipsum, dolor sit amet consectetur  deleniti adipisci aliquid u."
        },
        {
            id:5,
            notification:"Notification",
            para:"Lorem ipsum, dolor sit amet consectetur  deleniti adipisci aliquid u."
        },
        {
            id:6,
            notification:"Notification",
            para:"Lorem ipsum, dolor sit amet consectetur  deleniti adipisci aliquid u."
        },
        {
            id:7,
            notification:"Notification",
            para:"Lorem ipsum, dolor sit amet consectetur  deleniti adipisci aliquid u."
        },
        {
            id:8,
            notification:"Notification",
            para:"Lorem ipsum, dolor sit amet consectetur  deleniti adipisci aliquid u."
        },



    ]

    const[notifications, setNotification]= useState(data)
  return (
    <div name='notifications'   className='w-full h-full flex justify-center items-center flex-col p-5'>
  <div className='w-full max-w-[1240px] h-full  md:mt-[160px] mt-[90px]'>
    <div className=' text-white md:mx-9 md:my-9 my-24'>

        <h1 className='md:text-4xl md:mb-8 text-3xl mb-7'>All - In - One Plateform</h1>
        <p className='md:mx-6 mx-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio debitis ad magni perspiciatis tenetur modi nostrum, laboriosam facere voluptatum illum, fugit explicabo quaerat eveniet ratione sed earum quisquam rem amet.</p>
    </div>

<div className='grid md:grid-cols-4 md:my-6 text-white  md:mx-9 '>

{
    notifications.map((ele)=>{
        return(
            <div>

            <div className=' md:mx-5 md:my-4 md:py-4 py-4 my-4 '><h3 className='md:mb-4 flex flex-col justify-center mb-3 '><FcCheckmark size={30} className='relative  md:ml-12 mb-[-1.5rem] ml-10  '/>{ele.notification}</h3>
        <p>{ele.para}</p></div>

            </div>
        )
    })
}
       
       

    </div>



    
  </div>
    </div>
  )
}

export default Notifications
