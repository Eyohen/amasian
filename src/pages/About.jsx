// import React, {useState, useRef} from 'react'
// import about from '../assets/about.jpg'
// import Footer from '../components/Footer'
// import { Link } from 'react-router-dom'
// import { GoHome } from "react-icons/go";
// import { RiHomeGearLine } from "react-icons/ri";
// import { BsHouseGear } from "react-icons/bs";
// import { BsLamp } from "react-icons/bs";
// import { GrUserManager } from "react-icons/gr";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { IoMdClose } from "react-icons/io";

// const About = () => {
//     const [open, setOpen] = useState(false);
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const navigate = useNavigate();
//     const contactRef = useRef(null);

//     const divStyle = {
//         width: '100vw',
//         height: '59vh',
//         backgroundImage: `url(${about})`,
//         backgroundSize: 'cover', // Adjusts the background image to cover the whole container
//         backgroundPosition: 'center', // Centers the background image
//         backgroundRepeat: 'no-repeat', // Prevents the background image from repeating
//         paddingTop: '74px',
//         filter: 'brightness(0.75)'
//     }

//     // const contactStyle = {
//     //     width: '100vw',
//     //     height: '95vh',
//     //     backgroundImage: `url(${contact})`,
//     //     backgroundSize: 'cover', // Adjusts the background image to cover the whole container
//     //     backgroundPosition: 'center', // Centers the background image
//     //     backgroundRepeat: 'no-repeat', // Prevents the background image from repeating
//     //     paddingTop: '74px',
//     //     filter: 'brightness(0.5)'
//     // }

//     const handleOpen = () => {
//         setOpen((prev) => !prev);
//       };

//       const toggleMobileMenu = () => {
//         setMobileMenuOpen((prev) => !prev);
//     };


    
//   return (
//     <div className='h-[100vh] bg-black'>
//         <div style={divStyle}>
//         <div className='hidden md:block'>
//         <div className='flex justify-center gap-x-9 bg-gray-400 py-3 w-[500px] mx-auto mt-[-20px] rounded-full opacity-90 absolute z-50 left-1/2 transform -translate-x-1/2 top-[50px]'>
//         <Link to={'/'}><p className='text-white text-lg cursor-pointer'>Home</p></Link>
//         <p className='text-white text-lg bg-gray-800 px-3 rounded-3xl cursor-pointer'>about</p>
//         <div className='relative'>
//         <p onClick={handleOpen} className='text-white text-lg cursor-pointer'>services</p>
//         {open && <div className='bg-white w-[200px] absolute mt-4 z-50 rounded left-1/2 transform -translate-x-1/2'>
//         <Link to={'/interiordecor'}><p className='py-3 px-2 hover:bg-black hover:text-white cursor-pointer'>Interior Decoration</p></Link>
//         <Link to={'/homeautomation'}><p className='py-3 px-2 hover:bg-black hover:text-white cursor-pointer'>Home Automation</p></Link>
//         <Link to={'/spacemanagement'}><p className='py-3 px-2 hover:bg-black hover:text-white cursor-pointer'>Space Management</p></Link>
        
//         </div>}
//         </div>
//         <Link to={'/lamps'}><p className='text-white text-lg cursor-pointer'>lamps</p></Link>
//         <p className='text-white text-lg cursor-pointer'>contact</p>
//         <Link to={'/login'}><p className='text-white text-lg cursor-pointer'>sign in</p></Link>
//         </div>
//         </div>
//         <div className='flex justify-end px-4 md:hidden'>
//                     <button onClick={toggleMobileMenu} className="z-50">
//                         {mobileMenuOpen ? <IoMdClose size={30} color='white' /> : <RxHamburgerMenu size={30} color='white' />}
//                     </button>
//                 </div>


        
//         <div className='relative'>
//         <p className='text-[200px] text-center absolute z-50 left-1/2 transform -translate-x-1/2 mt-[-10px] text-white'>About Us</p>
//         <p className='text-[20px] text-center absolute z-50 left-1/2 transform -translate-x-1/2 mt-[250px] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//         </div>
//         </div>


//         {/* second section */}

//     <div className='flex justify-center px-4 md:gap-x-52 mt-24'>
//         <div className='relative'>
//         <img src={about} alt='nigga' className='w-[300px] h-[240px] object-cover rounded-lg'/>
//         <img src={about} alt='nigga' className='w-[300px] h-[280px] object-cover absolute top-16 left-32 rounded-lg'/>
//         </div>

//         <div>
//             <p className='text-white text-xl font-medium'>What We Do</p>
//             <p className='max-w-[450px] text-white text-4xl font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
//             <p className='max-w-[450px] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//         </div>

//         </div>


//         <div className='flex flex-col items-center justify-center  bg-black py-32'>

// <div className='grid grid-cols-2 gap-x-96 gap-y-16 px-24 pt-32'>
//     <div className=''>
//     <div className='bg-gray-400 w-[50px] h-[50px] rounded-full flex justify-center items-center ml-5'>  
//     <GoHome size={25} color='white'/>
//     </div>      
//     <p className='mt-1 font-medium text-white'>Interior decor</p>
//     </div>

//     <div>
//     <div className='bg-gray-400 w-[50px] h-[50px] rounded-full flex justify-center items-center ml-5'>  
//     < BsHouseGear size={25} color='white'/>
//     </div>  
//     <p className='mt-1 font-medium text-white'>Home Automation</p>
//     </div>  

//     <div>
//     <div className='bg-gray-400 w-[50px] h-[50px] rounded-full flex justify-center items-center ml-5'>  
//     < BsLamp size={25} color='white'/>
//     </div>    
//     <p className='mt-1 font-medium text-white'>Bespoke lamp</p>
//     </div>

//     <div>
//     <div className='bg-gray-400 w-[50px] h-[50px] rounded-full flex justify-center items-center ml-5'>  
//     <GrUserManager size={25} color='white'/>
//     </div>   
//     <p className='mt-1 font-medium text-white'>Consultancy/</p>
//     <p className='mt-1 font-medium text-white'>Space management</p>

//     </div> 

//     </div>


//         </div>



//         <div className='mt-24'></div>
//     </div>
//   )
// }

// export default About

import React, { useState, useRef } from 'react'
import about from '../assets/about.jpg'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { GoHome } from "react-icons/go";
import { RiHomeGearLine } from "react-icons/ri";
import { BsHouseGear } from "react-icons/bs";
import { BsLamp } from "react-icons/bs";
import { GrUserManager } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const About = () => {
    const [open, setOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const contactRef = useRef(null);

    const divStyle = {
        width: '100%',
        height: '59vh',
        backgroundImage: `url(${about})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: '74px',
        filter: 'brightness(0.75)'
    }

    const handleOpen = () => {
        setOpen((prev) => !prev);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    return (
        <div className='min-h-screen bg-black'>
            <div style={divStyle} className="relative">
                <div className='hidden md:block'>
                    <div className='flex justify-center gap-x-4 sm:gap-x-9 bg-gray-400 py-3 w-full sm:w-[500px] mx-auto mt-[-20px] rounded-full opacity-90 absolute z-50 left-1/2 transform -translate-x-1/2 top-[50px]'>
                        <Link to={'/'}><p className='text-white text-sm sm:text-lg cursor-pointer'>Home</p></Link>
                        <p className='text-white text-sm sm:text-lg bg-gray-800 px-3 rounded-3xl cursor-pointer'>about</p>
                        <div className='relative'>
                            <p onClick={handleOpen} className='text-white text-sm sm:text-lg cursor-pointer'>services</p>
                            {open && (
                                <div className='bg-white w-[200px] absolute mt-4 z-50 rounded left-1/2 transform -translate-x-1/2'>
                                    <Link to={'/interiordecor'}><p className='py-3 px-2 hover:bg-black hover:text-white cursor-pointer'>Interior Decoration</p></Link>
                                    <Link to={'/homeautomation'}><p className='py-3 px-2 hover:bg-black hover:text-white cursor-pointer'>Home Automation</p></Link>
                                    <Link to={'/spacemanagement'}><p className='py-3 px-2 hover:bg-black hover:text-white cursor-pointer'>Space Management</p></Link>
                                </div>
                            )}
                        </div>
                        <Link to={'/lamps'}><p className='text-white text-sm sm:text-lg cursor-pointer'>lamps</p></Link>
                        <p className='text-white text-sm sm:text-lg cursor-pointer'>contact</p>
                        <Link to={'/login'}><p className='text-white text-sm sm:text-lg cursor-pointer'>sign in</p></Link>
                    </div>
                </div>
                <div className='flex justify-end px-4 md:hidden'>
                    <button onClick={toggleMobileMenu} className="z-50">
                        {mobileMenuOpen ? <IoMdClose size={30} color='white' /> : <RxHamburgerMenu size={30} color='white' />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 z-40 flex items-center justify-center">
                        <div className="bg-white p-5 rounded-lg">
                            <Link to={'/'} onClick={toggleMobileMenu}><p className='py-2'>Home</p></Link>
                            <p className='py-2'>About</p>
                            <p className='py-2' onClick={() => { setOpen(!open); }}>Services</p>
                            {open && (
                                <div className="pl-4">
                                    <Link to={'/interiordecor'} onClick={toggleMobileMenu}><p className='py-1'>Interior Decoration</p></Link>
                                    <Link to={'/homeautomation'} onClick={toggleMobileMenu}><p className='py-1'>Home Automation</p></Link>
                                    <Link to={'/spacemanagement'} onClick={toggleMobileMenu}><p className='py-1'>Space Management</p></Link>
                                </div>
                            )}
                            <Link to={'/lamps'} onClick={toggleMobileMenu}><p className='py-2'>Lamps</p></Link>
                            <p className='py-2'>Contact</p>
                            <Link to={'/login'} onClick={toggleMobileMenu}><p className='py-2'>Sign In</p></Link>
                        </div>
                    </div>
                )}

                <div className='relative text-center px-4'>
                    <p className='text-6xl sm:text-[200px] absolute z-50 left-1/2 transform -translate-x-1/2 mt-8 sm:mt-[-10px] text-white'>About Us</p>
                    <p className='text-base sm:text-[20px] absolute z-50 left-1/2 transform -translate-x-1/2 mt-32 sm:mt-[250px] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-center px-4 md:gap-x-12 lg:gap-x-52 mt-24'>
                <div className='relative mb-48 md:mb-0 w-full md:w-auto'>
                    <img src={about} alt='about' className='w-full md:w-[300px] h-[240px] object-cover rounded-lg'/>
                    <img src={about} alt='about' className='w-full md:w-[300px] h-[280px] object-cover absolute top-16 left-8 md:left-32 rounded-lg'/>
                </div>

                <div className='max-w-[450px] mt-8 md:mt-0'>
                    <p className='text-white text-xl font-medium'>What We Do</p>
                    <p className='text-white text-3xl md:text-4xl font-semibold mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <p className='text-white mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center bg-black py-16 md:py-32'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-x-24 lg:gap-x-96 px-4 md:px-24 pt-8 md:pt-32'>
                    <div className='flex flex-col items-center text-center'>
                        <div className='bg-gray-400 w-[50px] h-[50px] rounded-full flex justify-center items-center'>  
                            <GoHome size={25} color='white'/>
                        </div>      
                        <p className='mt-2 font-medium text-white'>Interior decor</p>
                    </div>

                    <div className='flex flex-col items-center text-center'>
                        <div className='bg-gray-400 w-[50px] h-[50px] rounded-full flex justify-center items-center'>  
                            <BsHouseGear size={25} color='white'/>
                        </div>  
                        <p className='mt-2 font-medium text-white'>Home Automation</p>
                    </div>  

                    <div className='flex flex-col items-center text-center'>
                        <div className='bg-gray-400 w-[50px] h-[50px] rounded-full flex justify-center items-center'>  
                            <BsLamp size={25} color='white'/>
                        </div>    
                        <p className='mt-2 font-medium text-white'>Bespoke lamp</p>
                    </div>

                    <div className='flex flex-col items-center text-center'>
                        <div className='bg-gray-400 w-[50px] h-[50px] rounded-full flex justify-center items-center'>  
                            <GrUserManager size={25} color='white'/>
                        </div>   
                        <p className='mt-2 font-medium text-white'>Consultancy/<br/>Space management</p>
                    </div> 
                </div>
            </div>

            <div className='mt-24'></div>
        </div>
    )
}

export default About