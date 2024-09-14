import React from 'react'
import services from '../assets/about.jpg'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { GoHome } from "react-icons/go";
import { RiHomeGearLine } from "react-icons/ri";
import { BsHouseGear } from "react-icons/bs";
import { BsLamp } from "react-icons/bs";
import { GrUserManager } from "react-icons/gr";

const Services = () => {

    const divStyle = {
        width: '100vw',
        height: '59vh',
        backgroundImage: `url(${services})`,
        backgroundSize: 'cover', // Adjusts the background image to cover the whole container
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Prevents the background image from repeating
        paddingTop: '74px',
        filter: 'brightness(0.75)'
    }

    // const contactStyle = {
    //     width: '100vw',
    //     height: '95vh',
    //     backgroundImage: `url(${contact})`,
    //     backgroundSize: 'cover', // Adjusts the background image to cover the whole container
    //     backgroundPosition: 'center', // Centers the background image
    //     backgroundRepeat: 'no-repeat', // Prevents the background image from repeating
    //     paddingTop: '74px',
    //     filter: 'brightness(0.5)'
    // }
    
  return (
    <div className='h-screen'>
  
        <div style={divStyle}>
        <div className='flex justify-center gap-x-9 bg-gray-400 py-3 w-[500px] mx-auto mt-[-30px] rounded-full bg-opacity-100'>
        <Link to={'/'}><p className='text-white text-lg cursor-pointer'>Home</p></Link>
        <Link to={'/about'}><p className='text-white text-lg cursor-pointer'>about</p></Link>
        <p className='text-white text-lg bg-gray-800 px-3 rounded-3xl cursor-pointer'>services</p>
        <p className='text-white text-lg cursor-pointer'>lamps</p>
        <p className='text-white text-lg cursor-pointer'>contact</p>
        </div>
        {/* </div> */}
        

        <div className='relative'>
        <p className='text-[200px] text-center absolute left-1/2 transform -translate-x-1/2 mt-[-10px] text-white'>Services</p>
        <p className='text-[20px] text-center absolute left-1/2 transform -translate-x-1/2 mt-[250px] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        </div>

        {/* second section */}

    <div className='flex justify-center px-4 md:gap-x-52 mt-24'>
        <div className='relative'>
        <img src={services} alt='nigga' className='w-[300px] h-[240px] object-cover rounded-lg'/>
        <img src={services} alt='nigga' className='w-[300px] h-[280px] object-cover absolute top-16 left-32 rounded-lg'/>
        </div>

        <div>
            <p className='text-gray-600 text-xl font-medium'>What We Do</p>
            <p className='max-w-[450px] text-black text-4xl font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p className='max-w-[450px] text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        </div>


        <div className='flex flex-col items-center justify-center  bg-white py-32 mt-32'>

<div className='grid grid-cols-2 gap-x-96 gap-y-16 px-24'>
    <div className=''>
    <div className='bg-gray-400 w-[50px] h-[50px] rounded-full flex justify-center items-center ml-5'>  
    <GoHome size={25} color='white'/>
    </div>      
    <p className='mt-1 font-medium'>Interior decor</p>
    </div>

    <div>
    <div className='bg-gray-400 w-[50px] h-[50px] rounded-full flex justify-center items-center ml-5'>  
    < BsHouseGear size={25} color='white'/>
    </div>  
    <p className='mt-1 font-medium'>Home Automation</p>
    </div>  

    <div>
    <div className='bg-gray-400 w-[50px] h-[50px] rounded-full flex justify-center items-center ml-5'>  
    < BsLamp size={25} color='white'/>
    </div>    
    <p className='mt-1 font-medium'>Bespoke lamp</p>
    </div>

    <div>
    <div className='bg-gray-400 w-[50px] h-[50px] rounded-full flex justify-center items-center ml-5'>  
    <GrUserManager size={25} color='white'/>
    </div>   
    <p className='mt-1 font-medium'>Consultancy/</p>
    <p className='mt-1 font-medium'>Space management</p>

    </div> 

    </div>


        </div>



        <div className='mt-24'></div>
    </div>
  )
}

export default Services