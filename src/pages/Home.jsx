// import React, { useState, useRef } from 'react'
// import hero from '../assets/home2.jpg'
// import interior from '../assets/Interior.jpg'
// import homeautomation from '../assets/homeautomation.jpg'
// import lamp from '../assets/tablelamp2.jpg'
// import contact from '../assets/contact2.jpg'
// import Footer from '../components/Footer'
// import { Link, useNavigate } from 'react-router-dom'
// import { RxHamburgerMenu } from "react-icons/rx";

// const Home = () => {
//     const [open, setOpen] = useState(false);
//     const navigate = useNavigate();
//     const contactRef = useRef(null);

//     const handleOpen = () => {
//         setOpen((prev) => !prev);
//     };

//     const scrollToContact = () => {
//         contactRef.current?.scrollIntoView({ behavior: 'smooth' });
//     };

//     const divStyle = {
//         width: '100%',
//         height: '80vh',
//         backgroundImage: `url(${hero})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         paddingTop: '74px'
//     }

//     const contactStyle = {
//         width: '100%',
//         height: '95vh',
//         backgroundImage: `url(${contact})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         paddingTop: '74px',
//         filter: 'brightness(0.5)'
//     }

//     return (
//         <div className=''>
//             <div style={divStyle} className="relative">
//                 <div className='hidden md:block'>
//                 <div className='flex flex-wrap justify-center gap-4 bg-gray-400 py-3 w-full md:w-[560px] mx-auto rounded-full opacity-90'>
//                     <Link to={'/'}><p className='text-white text-lg bg-gray-800 px-3 rounded-3xl cursor-pointer'>Home</p></Link>
//                     <Link to={'/about'}><p className='text-white text-lg cursor-pointer'>about</p></Link>
//                     <div className='relative'>
//                         <p onClick={handleOpen} className='text-white text-lg cursor-pointer'>services</p>
//                         {open && <div className='bg-white w-[200px] absolute mt-4 z-50 rounded left-1/2 transform -translate-x-1/2'>
//                             <Link to={'/interiordecor'}><p className='py-3 px-2 hover:bg-black hover:text-white cursor-pointer'>Interior Decoration</p></Link>
//                             <Link to={'/homeautomation'}><p className='py-3 px-2 hover:bg-black hover:text-white cursor-pointer'>Home Automation</p></Link>
//                             <Link to={'/spacemanagement'}><p className='py-3 px-2 hover:bg-black hover:text-white cursor-pointer'>Space Management</p></Link>
//                         </div>}
//                     </div>
//                     <Link to={'/lamps'}><p className='text-white text-lg cursor-pointer'>lamps</p></Link>
//                     <p onClick={scrollToContact} className='text-white text-lg cursor-pointer'>contact</p>
//                     <Link to={'/login'}><p className='text-white text-lg cursor-pointer'>sign in</p></Link>
//                 </div>
//                 </div>
//                 <div className='flex justify-end px-4 md:hidden'><RxHamburgerMenu size={30} color='white' /></div>

//                 <p className='text-5xl md:text-[200px] text-center text-white mt-8 md:mt-0'>Amasian</p>

//                 <div className='absolute bottom-4 right-4 md:bottom-8 md:right-8 text-right'>
//                     <p className='text-white text-xl md:text-2xl font-semibold'>Elevate Your Space, Define Your Vision</p>
//                     <p className='text-white text-xl md:text-2xl font-semibold'>Transformative architectural solutions</p>
//                 </div>
//             </div>

//             {/* what we do */}
//             <div className='flex flex-col md:flex-row justify-center md:gap-x-96 mt-12 md:mt-[120px] items-center px-4 md:px-0'>
//                 <p className='text-4xl md:text-6xl font-medium mb-8 md:mb-0'>What we do</p>
//                 <div>
//                     <p className='text-lg max-w-[500px] mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
//                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
//                     <button className='bg-black text-white font-semibold px-5 py-1 rounded-md'>See More</button>
//                 </div>
//             </div>

//             {/* our services */}
//             <div className='bg-black w-full mt-12 md:mt-[104px] py-12'>
//                 <p className='text-white text-4xl md:text-6xl font-medium text-center pt-9'>Services we Offer</p>
//                 <div className='flex flex-col md:flex-row gap-8 md:gap-x-9 justify-center px-4 md:px-12 mt-8'>
//                     <div className='relative'>
//                         <img src={interior} className='object-cover w-full md:w-[500px] h-[270px] brightness-50'/>
//                         <p className='absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-2xl md:text-3xl text-white font-semibold'>Interior Decoration</p>
//                     </div>

//                     <div className='relative'>
//                         <img src={homeautomation} className='object-cover w-full md:w-[500px] h-[270px] brightness-50' />
//                         <p className='absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-2xl md:text-3xl text-white font-semibold'>Home Automation</p>
//                     </div>

//                     <div className='relative'>
//                         <img src={interior} className='object-cover w-full md:w-[500px] h-[270px] brightness-50'/>
//                         <p className='absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-2xl md:text-3xl text-white font-semibold'>Space Management/Consultancy</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Our Bespoke lamps */}
//             <div className='bg-gray-300 py-12 mt-16 mx-4 md:mx-auto md:max-w-[1500px] rounded-3xl'>
//                 <p className='text-4xl md:text-6xl font-medium text-center'>Our bespoke lamps</p>

//                 <div className='flex flex-col md:flex-row gap-8 md:gap-x-24 justify-center mt-9 px-4 md:px-32'>
//                     <img src={lamp} className='rounded-xl w-full md:w-[550px] h-[300px] md:h-[400px] object-cover'/>
//                     <div>
//                         <p className='text-2xl font-semibold'>Explore our bespoke lamps</p>
//                         <p className='max-w-[600px] text-lg mt-4'>Discover our Amasian Bespoke Lamp Collection, where every lamp is handcrafted to blend unique materials with custom designs. Perfect for adding a touch of elegance and creativity to any space, these lamps combine functionality with artistic flair. </p>
//                     </div>
//                 </div>
//             </div>

//             {/* contact us */}
//             <div ref={contactRef} className='relative mt-12'>
//                 <div style={contactStyle} />
//                 <div className='absolute inset-0 flex flex-col items-center justify-center px-4 md:px-0'>
//                     <p className='text-4xl md:text-6xl font-medium text-white text-center mb-8'>We'd love to hear from you!</p>
                    
//                     <div className='w-full max-w-[950px]'>
//                         <div className='flex flex-col md:flex-row gap-8 md:gap-x-10'>
//                             <div className='border-b-2 border-white flex-1'>
//                                 <p className='text-white'>Full Name</p>
//                                 <input className='w-full px-2 py-2 bg-white bg-opacity-50 focus:outline-none' placeholder='name' />
//                             </div>

//                             <div className='border-b-2 border-white flex-1'>
//                                 <p className='text-white'>Email</p>
//                                 <input className='w-full px-2 py-2 bg-white bg-opacity-50 focus:outline-none' placeholder='email' />
//                             </div>
//                         </div>

//                         <div className='border-b-2 border-white mt-8'>
//                             <p className='text-white'>Additional Information</p>
//                             <textarea className='w-full px-2 py-2 bg-white bg-opacity-50 focus:outline-none' placeholder='additional information' />
//                         </div>

//                         <p className='text-white text-xl mt-6'>What is your interest ?</p>

//                         <div className='flex flex-wrap justify-center gap-4 mt-6'>
//                             {['Interior decoration', 'Home automation', 'Space Management', 'Amasian lamps'].map((interest) => (
//                                 <div key={interest} className='border-2 border-white rounded-full px-3 py-1'>
//                                     <p className='text-white'>{interest}</p>
//                                 </div>
//                             ))}
//                         </div>

//                         <div className='text-center mt-12'>
//                             <button className='bg-black border-2 border-white text-white px-12 md:px-24 py-2 rounded-full'>Submit</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className='mt-24'></div>
//             <Footer />
//         </div>
//     )
// }

// export default Home

import React, { useState, useRef } from 'react'
import hero from '../assets/home2.jpg'
import interior from '../assets/Interior.jpg'
import homeautomation from '../assets/homeautomation.jpg'
import lamp from '../assets/tablelamp2.jpg'
import contact from '../assets/contact2.jpg'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Home = () => {
    const [open, setOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const contactRef = useRef(null);

    const handleOpen = () => {
        setOpen((prev) => !prev);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    const divStyle = {
        width: '100%',
        height: '80vh',
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: '74px'
    }

    const contactStyle = {
        width: '100%',
        height: '95vh',
        backgroundImage: `url(${contact})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: '74px',
        filter: 'brightness(0.5)'
    }

    return (
        <div className=''>
            <div style={divStyle} className="relative">
                <div className='hidden md:block'>
                    <div className='flex flex-wrap justify-center gap-4 bg-gray-400 py-3 w-full md:w-[560px] mx-auto rounded-full opacity-90'>
                        <Link to={'/'}><p className='text-white text-lg bg-gray-800 px-3 rounded-3xl cursor-pointer'>Home</p></Link>
                        <Link to={'/about'}><p className='text-white text-lg cursor-pointer'>about</p></Link>
                        <div className='relative'>
                            <p onClick={handleOpen} className='text-white text-lg cursor-pointer'>services</p>
                            {open && <div className='bg-black w-[200px] absolute mt-4 z-50 rounded left-1/2 transform -translate-x-1/2'>
                                <Link to={'/interiordecor'}><p className='py-3 px-2 text-white hover:bg-white hover:text-black cursor-pointer'>Interior Decoration</p></Link>
                                <Link to={'/homeautomation'}><p className='py-3 px-2 text-white hover:bg-white hover:text-black cursor-pointer'>Home Automation</p></Link>

                            </div>}
                        </div>
                        <Link to={'/lamps'}><p className='text-white text-lg cursor-pointer'>lamps</p></Link>
                        <Link to={'/spacemanagement'}><p className='text-white text-lg cursor-pointer'>space management</p></Link>
                        <Link to={'/login'}><p className='text-white text-lg border border-gray-800 px-3 rounded-3xl cursor-pointer'>sign in</p></Link>
                    </div>
                </div>
                <div className='flex justify-end px-4 md:hidden'>
                    <button onClick={toggleMobileMenu} className="z-50">
                        {mobileMenuOpen ? <IoMdClose size={30} color='white' /> : <RxHamburgerMenu size={30} color='white' />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-95 z-40 flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center gap-6">
                            <Link to={'/'} onClick={() => setMobileMenuOpen(false)}><p className='text-white text-xl cursor-pointer'>Home</p></Link>
                            <Link to={'/about'} onClick={() => setMobileMenuOpen(false)}><p className='text-white text-xl cursor-pointer'>About</p></Link>
                            <div className='relative'>
                                <p onClick={handleOpen} className='text-white text-xl cursor-pointer'>Services</p>
                                {open && <div className='bg-white w-[200px] absolute mt-4 z-50 rounded left-1/2 transform -translate-x-1/2'>
                                    <Link to={'/interiordecor'} onClick={() => setMobileMenuOpen(false)}><p className='py-3 px-2 hover:bg-black hover:text-white cursor-pointer'>Interior Decoration</p></Link>
                                    <Link to={'/homeautomation'} onClick={() => setMobileMenuOpen(false)}><p className='py-3 px-2 hover:bg-black hover:text-white cursor-pointer'>Home Automation</p></Link>
                                    <Link to={'/spacemanagement'} onClick={() => setMobileMenuOpen(false)}><p className='py-3 px-2 hover:bg-black hover:text-white cursor-pointer'>Space Management</p></Link>
                                </div>}
                            </div>
                            <Link to={'/lamps'} onClick={() => setMobileMenuOpen(false)}><p className='text-white text-xl cursor-pointer'>Lamps</p></Link>
                            <p onClick={scrollToContact} className='text-white text-xl cursor-pointer'>Contact</p>
                            <Link to={'/login'} onClick={() => setMobileMenuOpen(false)}><p className='text-white text-xl cursor-pointer'>Sign In</p></Link>
                        </div>
                    </div>
                )}

                <p className='text-5xl md:text-[200px] text-center text-white mt-8 md:mt-0'>Amasian</p>

                <div className='absolute bottom-4 right-4 md:bottom-8 md:right-8 text-right'>
                    <p className='text-white text-xl md:text-2xl font-semibold'>Elevate Your Space, Define Your Vision</p>
                    <p className='text-white text-xl md:text-2xl font-semibold'>Transformative architectural solutions</p>
                </div>
            </div>

             {/* what we do */}
            <div className='flex flex-col md:flex-row justify-center md:gap-x-96 mt-12 md:mt-[120px] items-center px-4 md:px-0'>
                <p className='text-4xl md:text-6xl font-medium mb-8 md:mb-0'>What we do</p>
                <div>
                    <p className='text-lg max-w-[500px] mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    <button className='bg-black text-white font-semibold px-5 py-1 rounded-md'>See More</button>
                </div>
            </div>

            {/* our services */}
            <div className='bg-black w-full mt-12 md:mt-[104px] py-12'>
                <p className='text-white text-4xl md:text-6xl font-medium text-center pt-9'>Services we Offer</p>
                <div className='flex flex-col md:flex-row gap-8 md:gap-x-9 justify-center px-4 md:px-12 mt-8'>
                    <div className='relative'>
                        <img src={interior} className='object-cover w-full md:w-[500px] h-[270px] brightness-50'/>
                        <p className='absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-2xl md:text-3xl text-white font-semibold'>Interior Decoration</p>
                    </div>

                    <div className='relative'>
                        <img src={homeautomation} className='object-cover w-full md:w-[500px] h-[270px] brightness-50' />
                        <p className='absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-2xl md:text-3xl text-white font-semibold'>Home Automation</p>
                    </div>

                    <div className='relative'>
                        <img src={interior} className='object-cover w-full md:w-[500px] h-[270px] brightness-50'/>
                        <p className='absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-2xl md:text-3xl text-white font-semibold'>Space Management/Consultancy</p>
                    </div>
                </div>
            </div>

            {/* Our Bespoke lamps */}
            <div className='bg-gray-300 py-12 mt-16 mx-4 md:mx-auto md:max-w-[1500px] rounded-3xl'>
                <p className='text-4xl md:text-6xl font-medium text-center'>Our bespoke lamps</p>

                <div className='flex flex-col md:flex-row gap-8 md:gap-x-24 justify-center mt-9 px-4 md:px-32'>
                    <img src={lamp} className='rounded-xl w-full md:w-[550px] h-[300px] md:h-[400px] object-cover'/>
                    <div>
                        <p className='text-2xl font-semibold'>Explore our bespoke lamps</p>
                        <p className='max-w-[600px] text-lg mt-4'>Discover our Amasian Bespoke Lamp Collection, where every lamp is handcrafted to blend unique materials with custom designs. Perfect for adding a touch of elegance and creativity to any space, these lamps combine functionality with artistic flair. </p>
                    </div>
                </div>
            </div>

            {/* blog area */}
            

            {/* contact us */}
            <div ref={contactRef} className='relative mt-12'>
                <div style={contactStyle} />
                <div className='absolute inset-0 flex flex-col items-center justify-center px-4 md:px-0'>
                    <p className='text-4xl md:text-6xl font-medium text-white text-center mb-8'>We'd love to hear from you!</p>
                    
                    <div className='w-full max-w-[950px]'>
                        <div className='flex flex-col md:flex-row gap-8 md:gap-x-10'>
                            <div className='border-b-2 border-white flex-1'>
                                <p className='text-white'>Full Name</p>
                                <input className='w-full px-2 py-2 bg-white bg-opacity-50 focus:outline-none' placeholder='name' />
                            </div>

                            <div className='border-b-2 border-white flex-1'>
                                <p className='text-white'>Email</p>
                                <input className='w-full px-2 py-2 bg-white bg-opacity-50 focus:outline-none' placeholder='email' />
                            </div>
                        </div>

                        <div className='border-b-2 border-white mt-8'>
                            <p className='text-white'>Additional Information</p>
                            <textarea className='w-full px-2 py-2 bg-white bg-opacity-50 focus:outline-none' placeholder='additional information' />
                        </div>

                        <p className='text-white text-xl mt-6'>What is your interest ?</p>

                        <div className='flex flex-wrap justify-center gap-4 mt-6'>
                            {['Interior decoration', 'Home automation', 'Space Management', 'Amasian lamps'].map((interest) => (
                                <div key={interest} className='border-2 border-white rounded-full px-3 py-1'>
                                    <p className='text-white'>{interest}</p>
                                </div>
                            ))}
                        </div>

                        <div className='text-center mt-12'>
                            <button className='bg-black border-2 border-white text-white px-12 md:px-24 py-2 rounded-full'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-24'></div>
            <Footer />

        </div>
    )
}

export default Home