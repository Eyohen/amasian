import React from 'react'
import hero from '../assets/home2.jpg'
import interior from '../assets/interior.jpg'
import homeautomation from '../assets/homeautomation.jpg'
import lamp from '../assets/tablelamp2.jpg'
import contact from '../assets/contact2.jpg'
import Footer from '../components/Footer'

const Home = () => {

    const divStyle = {
        width: '100vw',
        height: '80vh',
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover', // Adjusts the background image to cover the whole container
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Prevents the background image from repeating
        paddingTop: '74px'
    }

    const contactStyle = {
        width: '100vw',
        height: '95vh',
        backgroundImage: `url(${contact})`,
        backgroundSize: 'cover', // Adjusts the background image to cover the whole container
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Prevents the background image from repeating
        paddingTop: '74px',
        filter: 'brightness(0.5)'
    }
    
  return (
    <div className=''>
    <div style={divStyle}>
        <div className='flex justify-center gap-x-9 bg-gray-400 py-3 w-[500px] mx-auto rounded-full opacity-90'>
        <p className='text-white text-lg bg-gray-800 px-3 rounded-3xl cursor-pointer'>Home</p>
        <p className='text-white text-lg cursor-pointer'>about</p>
        <p className='text-white text-lg cursor-pointer'>services</p>
        <p className='text-white text-lg cursor-pointer'>lamps</p>
        <p className='text-white text-lg cursor-pointer'>contact</p>
        </div>

<p className='text-[200px] text-center text-white'>Amasian</p>

<p className='px-8 text-white text-2xl font-semibold text-right pt-[90px]'>Elevate Your Space, Define Your Vision</p>
<p className='px-8 text-white text-2xl font-semibold text-right'>Transaformative architectural solutions</p>
        </div>


        {/* what we do */}
        <div className='flex justify-center gap-x-96 mt-[120px] items-center'>
        <p className='text-6xl font-medium'>What we do</p>
        <div>
        <p className='text-lg max-w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
       <button className='bg-black text-white font-semibold px-5 py-1 mt-3 rounded-md'>See More</button>
       </div>
        </div>

        {/* our services */}
        <div className='bg-black w-full h-[550px] mt-[104px]'>
            <p className='text-white text-6xl font-medium text-center pt-9'>Services we Offer</p>
            <div className='flex gap-x-9 justify-center px-12'>
                <div className='relative'>
        <img src={interior} className='object-cover w-[500px] h-[270px] mt-36 brightness-50'/>
        <p className='absolute z-50 mt-[-150px] w-[350px] text-center text-3xl text-white font-semibold mx-[auto]'>Interior Decoration</p>
        </div>

        <div className='relative'>
            <img src={homeautomation} className='object-cover w-[500px] h-[270px] mt-24 brightness-50' />
                    <p className='absolute z-50 mt-[-150px] w-[300px] text-center text-3xl text-white font-semibold mx-[auto]'>Home Automation</p>
            </div>

            <div className='relative'>
            <img src={interior} className='object-cover w-[500px] h-[270px] mt-9 brightness-50'/>
            <p className='absolute z-50 mt-[-150px] w-[450px] text-center text-3xl text-white font-semibold mx-[auto]'>Space Management/Consultancy</p>
            </div>

            </div>
        </div>

                 {/* Our Bespoke lamps */}
                 <div className='bg-gray-300 py-12 mt-16 max-w-[1500px] mx-auto rounded-3xl'>
                <p className='text-6xl font-medium text-center'>Our bespoke lamps</p>

            <div className='flex gap-x-24 justify-center mt-9 px-4 md:px-32'>
                <img src={lamp} className='rounded-xl w-[550px] h-[400px]'/>
                <div>
                <p className='text-2xl font-semibold'>Explore our bespoke lamps</p>
                <p className='max-w-[600px] text-lg mt-4'>Discover our Amasian Bespoke Lamp Collection, where every lamp is handcrafted to blend unique materials with custom designs. Perfect for adding a touch of elegance and creativity to any space, these lamps combine functionality with artistic flair. </p>
             
                </div>
            </div>
            </div>

                {/* contact us */}
                <div className='relative'>
            <div style={contactStyle} className='mt-12'/>
                <p className='text-6xl font-medium top-10 text-white absolute z-50 left-1/2 transform -translate-x-1/2'>We'd love to hear from you!</p>
               
                <div className='top-[140px] absolute z-50 left-1/2 transform -translate-x-1/2'>

<div className='flex gap-x-10'>
                <div className='border-b-2 border-white'>
                    <p className='text-white'>Full Name</p>
                    <input className='w-[450px] px-2 py-2 opacity-50 focus:outline-none' placeholder='name' />
                    </div>

                    <div className='border-b-2 border-white'>
                    <p className='text-white'>Email</p>
                    <input className='w-[450px] px-2 py-2 opacity-50 focus:outline-none' placeholder='email' />
                    </div>

                    </div>

                    <div className='border-b-2 border-white mt-16'>
                    <p className='text-white'>Additional Information</p>
                    <textarea className='w-full px-2 py-2 opacity-50 focus:outline-none' placeholder='additional information' />
                    </div>

                    <p className='text-white text-xl mt-6'>What is your interest ?</p>

                    <div className='flex justify-center gap-x-9 mt-6'>

                        <div className='border-2 border-white rounded-full px-1 py-1 max-w-[145px]'>
                            <p className='text-white'>Interior decoration</p>
                        </div>

                        <div className='border-2 border-white rounded-full px-1 py-1 max-w-[145px]'>
                            <p className='text-white'>Home automation</p>
                        </div>

                        
                        <div className='border-2 border-white rounded-full px-1 py-1 max-w-[155px]'>
                            <p className='text-white'>Space Management</p>
                        </div>

                        <div className='border-2 border-white rounded-full px-1 py-1 max-w-[120px]'>
                            <p className='text-white'>Amasian lamps</p>
                        </div>

                        

                    </div>

                    <div className='text-center mt-12'><button className='bg-black border-2 border-white  text-white px-24 py-2 rounded-full'>Submit</button></div>
            
                </div>
            </div>

            


<div className='mt-24'></div>
<Footer />
        </div>
  )
}

export default Home