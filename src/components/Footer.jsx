import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='bg-black h-[230px] py-9'>
        <div className='flex justify-evenly'>



            <div className='flex flex-col gap-y-9'>
            <p className='text-2xl text-white'>LOGO</p>
            <p className='text-md text-white font-light'>Copyright © 2024 Amaris. All rights reserved.</p>
            </div>

            <div className='flex flex-col gap-y-2'>
            <p className='text-xl text-white font-semibold'>AMASIAN</p>
            <p className='text-md text-white font-light'>Home</p>
            <p className='text-md text-white font-light'>About.</p>
            <p className='text-md text-white font-light'>Contact</p>
            </div>

            <div className='flex flex-col gap-y-2'>
            <p className='text-xl text-white font-semibold'>SERVICES</p>
            <p className='text-md text-white font-light'>Interior decoration</p>
            <p className='text-md text-white font-light'>Home automation</p>
            <p className='text-md text-white font-light'>Space Management</p>
            <p className='text-md text-white font-light'>Amasian lamps</p>
            </div>


            <div className='flex flex-col gap-y-2'>
            <p className='text-xl text-white font-semibold'>FOLLOW</p>
            <div className='text-lg text-white flex gap-x-6 '><FaTwitter /><FaFacebookF /><IoLogoInstagram /></div>
            </div>


            </div>
    </div>
  )
}

export default Footer