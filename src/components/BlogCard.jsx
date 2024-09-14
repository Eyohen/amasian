import React from 'react'
import umbrella from '../assets/Hero.jpg'
import { FaLongArrowAltRight } from "react-icons/fa";

const BlogCard = ({title, imageUrl, text, heading}) => {
  return (
    <div className='bg-black'>
        <img src={imageUrl ? imageUrl : umbrella} className='object-cover max-w-[350px] min-w-[320px] h-[180px]' />

        <p className='font-bold text-[22px] text-white py-2 w-[320px]'>{title}</p>
        <p className='text-gray-300 w-[320px]'>{text.slice(0,200)}</p>

        <div className='flex items-center py-3'>
        <p className='font-semibold text-white min-w-[150px]'>Continue Reading </p><div className='mt-1'><FaLongArrowAltRight color='white' /></div>
        </div>

    </div>
  )
}

export default BlogCard