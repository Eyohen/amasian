import React from 'react'
import futureliving from '../assets/futureliving.jpg'
import Footer from '../components/Footer'

const HomeAutomation = () => {
  return (
    <div className="min-h-screen font-['Libre_Baskerville',serif]">
      <h1 className='text-center font-bold text-3xl sm:text-4xl mt-8 sm:mt-12 px-4 uppercase'>Home Automation</h1>

      <div className='flex flex-col md:flex-row justify-center px-4 md:px-8 lg:px-16 mt-8 sm:mt-16 gap-y-6 md:gap-x-12 lg:gap-x-24 items-center bg-black py-6'>
        <img src={futureliving} alt="Future Living Room" className='w-full md:w-1/2 lg:w-[700px] h-auto md:h-[350px] lg:h-[450px] object-cover'/>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <h2 className='text-2xl sm:text-3xl font-medium text-white uppercase'>Living Room</h2>
          <p className='mt-2 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row-reverse justify-center px-4 md:px-8 lg:px-16 gap-y-6 md:gap-x-12 lg:gap-x-24 items-center bg-[#404040] py-6'>
        <img src={futureliving} alt="Future Living Room" className='w-full md:w-1/2 lg:w-[700px] h-auto md:h-[350px] lg:h-[450px] object-cover'/>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <h2 className='text-2xl sm:text-3xl font-medium text-white uppercase'>Living Room</h2>
          <p className='mt-2 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-center px-4 md:px-8 lg:px-16 gap-y-6 md:gap-x-12 lg:gap-x-24 items-center bg-[#808080] py-6'>
        <img src={futureliving} alt="Future Living Room" className='w-full md:w-1/2 lg:w-[700px] h-auto md:h-[350px] lg:h-[450px] object-cover'/>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <h2 className='text-2xl sm:text-3xl font-medium text-white uppercase'>Living Room</h2>
          <p className='mt-2 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row-reverse justify-center px-4 md:px-8 lg:px-16 gap-y-6 md:gap-x-12 lg:gap-x-24 items-center bg-[#C0C0C0] py-6'>
        <img src={futureliving} alt="Future Living Room" className='w-full md:w-1/2 lg:w-[700px] h-auto md:h-[350px] lg:h-[450px] object-cover'/>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <h2 className='text-2xl sm:text-3xl font-medium text-white uppercase'>Living Room</h2>
          <p className='mt-2 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default HomeAutomation