import React, { useEffect, useState } from 'react'
import LampCard from '../components/LampCard'
import { Link } from 'react-router-dom'
import { URL } from '../url';
import axios from 'axios';
import Footer from '../components/Footer';

const Lamps = () => {
    const [products, setProduct] = useState([])

    const fetchProducts = async () => {
        try {
            const res = await axios.get(`${URL}/api/products`)
            console.log(res.data);
            setProduct(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className='bg-black min-h-screen px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col lg:flex-row justify-between items-center pt-12 space-y-6 lg:space-y-0 lg:space-x-8'>
                <div className='text-center lg:text-left'>
                    <h1 className='text-3xl sm:text-4xl font-semibold text-white uppercase'>Pendant Lamps</h1>
                    <p className='text-lg sm:text-xl max-w-2xl mt-4 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='w-full lg:w-auto'>
                    <input className='w-full lg:w-[400px] rounded-xl border border-black py-2 px-6 focus:outline-none' placeholder='Search . . .' />
                </div>
            </div>

            <div className='mt-12'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {products?.map(d => (
                        <Link key={d.id} to={`/productdetails/${d.id}`}>
                            <LampCard title={d.title} imageUrl={d?.imageUrl} price={d.price} discount={d?.discount} description={d.description} />
                        </Link>
                    ))}
                </div>
            </div>

            <div className='mb-12'></div>
            <Footer/>
        </div>
    )
}

export default Lamps