import React, {useState} from 'react'
import lamp from '../assets/lamp3.jpg'




const LampCard = ({title, description, price, discount, imageUrl, color}) => {
  



  return (
        <div className=' mt-6 w-[370px] h-[450px] '>
  <img src={imageUrl ? imageUrl : lamp} className='w-[370px] h-[350px] rounded' />
  <p className='text-xl mt-3 text-white'>{title}</p>
  <p className='text-md mt-1 text-white'>{description?.length <= 39 ? description?.slice(0, 39) : description?.slice(0, 39)+"..."} </p>
 

{/* <div className='flex justify-between'> */}
  <div className='flex gap-4 mt-2'>
      {discount ? <p className='line-through text-[#808080] font-semibold'>₦{price}</p> : <p className='font-semibold text-white'>₦{price}</p>  }

    {!discount ? null : <p className='font-semibold text-white'>₦{discount}</p> }

     </div>
     {/* <p className='text-lg'>{color}</p>
     </div> */}

</div>
  
  )
}

export default LampCard