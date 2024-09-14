// import React,{useState, useEffect} from 'react'
// import lamp from '../assets/lamp3.jpg'
// import { FiMinus,FiPlus } from "react-icons/fi";
// import { URL } from '../url';
// import axios from 'axios';
// import { useAuth } from '../context/AuthContext';
// import { GoStar } from "react-icons/go";
// import {Link, useNavigate, useParams } from 'react-router-dom'
// import toast, { Toaster } from "react-hot-toast";
// import { AiFillAndroid } from "react-icons/ai";
// import { FaStar } from "react-icons/fa";

// const ProductDetails = () => {
//     const {user, logout} = useAuth();
//     const productId = useParams().id
//     // const { addToCart } = useContext(CartContext);
//     const navigate = useNavigate()
//     const [isLoading, setIsLoading] = useState(true)
//     const [isLoading2, setIsLoading2] = useState(false)
//     const [quantity, setQuantity] = useState(1)
//     const [title, setTitle] = useState('')
//     const [imageUrl, setImageUrl] = useState('')
//     const [description, setDescription] = useState('')
//     const [price, setPrice] = useState('')
//     const [discount, setDiscount] = useState('')
//     const [size, setSize]= useState('')
//     const [color, setColor]= useState('')
//     const [product, setProduct] = useState({});
    
//     const [rating, setRating] = useState(0);
//     const [comment, setComment] = useState('');
//     const [hover, setHover] = useState(null);
//     const [message, setMessage] = useState('');
    
//     const [first, setFirst] = useState(false)
//     const [second, setSecond] = useState(false)
//     const [third, setThird] = useState(false)
//     const [fourth, setFourth] = useState(false)
//     const [fifth, setFifth] = useState(false)


//     const handleFirst = () => {
//         setFirst(true)
//         setSecond(false)
//         setThird(false)
//         setFourth(false)
//         setFifth(false)
//         setRating(1)
//     }
//     const handleSecond = () => {
//         setSecond(true)
//         setFirst(false)
//         setThird(false)
//         setFourth(false)
//         setFifth(false)
//         setRating(2)
//     }
//     const handleThird = () => {
//         setThird(true)
//         setFirst(false)
//         setSecond(false)
//         setFourth(false)
//         setFifth(false)
//         setRating(3)
//     }
//     const handleFourth = () => {
//         setFourth(true)
//         setFirst(false)
//         setSecond(false)
//         setThird(false)
//         setFifth(false)
//         setRating(4)
//     }
//     const handleFifth = () => {
//         setFifth(true)
//         setFirst(false)
//         setSecond(false)
//         setThird(false)
//         setFourth(false)
//         setRating(5)
//     }
    
//     const toastStyles = {
//       success: {
    
//         duration: 10000,
//         iconTheme: {
//           primary: 'white',
//           secondary: '#4CAF50',
//         },
//           style: {
    
//                    background: "green",
//                    color: "whitesmoke",
//                    icon: <AiFillAndroid background-color="whitesmoke" color='green' />,
//                  },
//       },
//       error: {
//         duration: 10000,
//         style: {
//           background: '#F44336',
//           color: 'white',
//           fontWeight: 'bold',
//         },
//         iconTheme: {
//           primary: 'white',
//           secondary: '#F44336',
//         },
//       },
//     };
    
//     console.log("User details",user)
    
//     const email = user?.email;
    
//     const fname = user?.fname;
    
//     const userId = user?.id;
    
//     const handleIncrease = () => {
//          setQuantity(quantity + 1)
//     }
    
//     const handleDecrease = () => {
//         setQuantity(quantity > 1 ? quantity - 1 : 1)
//     }
    
//     const fetchProducts = async() => {
//         setIsLoading(true)
//         try {
//             const res = await axios.get(`${URL}/api/products/${productId}`)
//             console.log(res.data)
//             setTitle(res.data.title)
//             setDescription(res.data.description)
//             setImageUrl(res.data.imageUrl)
//             setPrice(res.data.price)
//             setDiscount(res.data.discount)
//             setSize(res.data.size)
//             setColor(res.data.color)
//             setProduct(res.data)
//         }
//         catch(err) {
//             console.log(err)
//         }
//         finally {
//             setIsLoading(false);
//         }
//     }
    
//     useEffect(() => {
//         fetchProducts()
//     }, [productId]);
    
//     const handleAddToCart = () => {
//         addToCart(product, quantity);
//         navigate('/cart');
//     }
    
//     const handleBuyNow = async () => {
//         setIsLoading2(true)
    
//         if (!product || !product.id || quantity <= 0) {
//             alert('Invalid product or quantity');
//             toast.error('Invalid product or quantity');
//             return;
//         }
//         try{
//             const totalPrice = product.price * quantity;
    
//             const res = await axios.post(`${URL}/api/purchases/create`,{
//                 quantity: quantity,
//                 productId:product.id,
//                 // price: product.price,
//                 // discount:product.discount,
//                 title: product.title,
//                 description: product.description,
//                 imageUrl: product.imageUrl,
//                 size: product.size,
//                 color: product.color,
//                 // totalPrice:totalPrice,
//                 email:email,
//                 fname:fname,
//                 userId:userId,
//                 // productId:productId
//             });
//             console.log("see purchase", res.data)
//             setIsLoading(false)
           
//             toast.success('Purchase is Successful', toastStyles.success)
    
//         } catch(error) {
//             console.error('Error creating purchase', error)
//             alert('Failed to complete purchase');
//             toast.error('Failed to complete purchase');
    
//         }
//         finally{
//             setIsLoading2(false)
//         }
//     }
    
//     const handleReview = async () => {
        
//         try{
//             const res = await axios.post(`${URL}/api/reviews/${productId}`, {
//                 userId : userId,
//                 rating,
//                 comment,
//                 productId:productId
//             });
//             console.log('review post',res.data)
//             toast.success('Review Submitted successfully!', toastStyles.success);
//             setMessage('Review Submitted successfully!');
//             setRating(0);
//             setComment('');
            
    
    
//         } catch (error) {
//             setMessage(error.res?.data?.message || 'You have to buy this product to review!');
//             toast.error(error.res?.data?.message || 'You have to buy this product to review!', toastStyles.error);
         
//         }
//     }
    
    
    


//   return (
//     <div className='bg-black'>
//             <Toaster 
//     position="top-right"
//     reverseOrder={false}
//     gutter={8}
//     toastOptions={{
//         duration:9000,
//         style:{
//             borderRadius:'8px',
//             boxShadow:'0 3px 10px rgba(0,0,0,0.1), 0 3px 3px rgba(0,0,0,0.05)'
//         }
//     }} 
//      />
//      <div className='px-4 md:px-[350px]'>
//         <div className='flex justify-center gap-x-48 pt-24'>
// <img src={imageUrl ? imageUrl : lamp} className='w-[600px] h-[450px] ' />

// <div>
// <p className='font-bold text-3xl text-white'>Luminous Arc Light</p>
// <div className='flex gap-4 mt-6'>
//       {discount ? <p className='line-through text-[#808080] font-semibold text-xl'>₦{price}</p> : <p className='font-semibold text-xl text-white'>₦{price}</p>  }

//     {!discount ? null : <p className='font-semibold text-xl text-white'>₦{discount}</p> }

//      </div>

//      <p className='text-xl mt-6'>In stock now</p>

//      <div className='flex gap-x-4 mt-6'>
//                     <button onClick={handleDecrease} className='border-2 border-white rounded-md px-6 py-2'><FiMinus color='white' /></button>
//                     <button className='border text-white font-semibold rounded-md px-3 py-2'>{quantity}</button>
//                     <button onClick={handleIncrease} className='border-2 border-white font-semibold rounded-md px-6 py-2'><FiPlus color='white' /></button>
//                 </div>

//                 <div><button onClick={handleBuyNow} className='bg-white text  px-24 py-2 mt-6'>Buy Now</button></div>


                
// <div className='p mt-12'>
//         <div className='text-xl font-bold text-white'>Make a review</div>
//         <div className='flex gap-x-4 mt-4'>

//         <div onClick={handleFirst} onChange={(e) => setRating(e.target.value)}>{first? (<FaStar color='green' size={20}/>) : (<GoStar size={20} color='white' />)}</div>
//         <div onClick={handleSecond} onChange={(e) => setRating(e.target.value)}>{second? (<FaStar color='green' size={20} />) : (<GoStar size={20} color='white' />)}</div>
//         <div onClick={handleThird} onChange={(e) => setRating(e.target.value)}>{third? (<FaStar color='green' size={20} />) : (<GoStar size={20} color='white' />)}</div>
//         <div onClick={handleFourth} onChange={(e) => setRating(e.target.value)}>{fourth? (<FaStar color='green' size={20} />) : (<GoStar size={20} color='white'/>)}</div>
//         <div onClick={handleFifth} onChange={(e) => setRating(e.target.value)}>{fifth? (<FaStar color='green' size={20}/>) : (<GoStar size={20} color='white'/>)}</div>

//         </div>
//         <textarea  onChange={(e) => setComment(e.target.value)}  className='border px-2 py-2 h-[100px] rounded-md w-[400px] text-gray-600 mt-4' placeholder='Write a comment'/>
     
//         <div className='mt-2'><button onClick={handleReview} className='bg-white text rounded-md px-4 py-1'>Send Review</button></div>
//         {message && <p className='text-green-600'>{message}</p>}


//         </div>
        

//                 </div>
//                 </div>

//                 <p className='font-semibold text-xl mt-9 px-4 '>Description</p>
//                 <p className='font-normal text-xl mt-9 px-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

//                 </div>
//         </div>
//   )
// }

// export default ProductDetails



import React, { useState, useEffect } from 'react'
import lamp from '../assets/lamp3.jpg'
import { FiMinus, FiPlus } from "react-icons/fi";
import { URL } from '../url';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { GoStar } from "react-icons/go";
import { Link, useNavigate, useParams } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast";
import { AiFillAndroid } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import Footer from '../components/Footer';

const ProductDetails = () => {
    const {user, logout} = useAuth();
    const productId = useParams().id
    // const { addToCart } = useContext(CartContext);
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const [isLoading2, setIsLoading2] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [title, setTitle] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [discount, setDiscount] = useState('')
    const [size, setSize]= useState('')
    const [color, setColor]= useState('')
    const [product, setProduct] = useState({});
    
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [hover, setHover] = useState(null);
    const [message, setMessage] = useState('');
    
    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    const [fourth, setFourth] = useState(false)
    const [fifth, setFifth] = useState(false)
    
    
    const handleFirst = () => {
        setFirst(true)
        setSecond(false)
        setThird(false)
        setFourth(false)
        setFifth(false)
        setRating(1)
    }
    const handleSecond = () => {
        setSecond(true)
        setFirst(false)
        setThird(false)
        setFourth(false)
        setFifth(false)
        setRating(2)
    }
    const handleThird = () => {
        setThird(true)
        setFirst(false)
        setSecond(false)
        setFourth(false)
        setFifth(false)
        setRating(3)
    }
    const handleFourth = () => {
        setFourth(true)
        setFirst(false)
        setSecond(false)
        setThird(false)
        setFifth(false)
        setRating(4)
    }
    const handleFifth = () => {
        setFifth(true)
        setFirst(false)
        setSecond(false)
        setThird(false)
        setFourth(false)
        setRating(5)
    }
    
    const toastStyles = {
      success: {
    
        duration: 10000,
        iconTheme: {
          primary: 'white',
          secondary: '#4CAF50',
        },
          style: {
    
                   background: "green",
                   color: "whitesmoke",
                   icon: <AiFillAndroid background-color="whitesmoke" color='green' />,
                 },
      },
      error: {
        duration: 10000,
        style: {
          background: '#F44336',
          color: 'white',
          fontWeight: 'bold',
        },
        iconTheme: {
          primary: 'white',
          secondary: '#F44336',
        },
      },
    };
    
    console.log("User details",user)
    
    const email = user?.email;
    
    const fname = user?.fname;
    
    const userId = user?.id;
    
    const handleIncrease = () => {
         setQuantity(quantity + 1)
    }
    
    const handleDecrease = () => {
        setQuantity(quantity > 1 ? quantity - 1 : 1)
    }
    
    const fetchProducts = async() => {
        setIsLoading(true)
        try {
            const res = await axios.get(`${URL}/api/products/${productId}`)
            console.log(res.data)
            setTitle(res.data.title)
            setDescription(res.data.description)
            setImageUrl(res.data.imageUrl)
            setPrice(res.data.price)
            setDiscount(res.data.discount)
            setSize(res.data.size)
            setColor(res.data.color)
            setProduct(res.data)
        }
        catch(err) {
            console.log(err)
        }
        finally {
            setIsLoading(false);
        }
    }
    
    useEffect(() => {
        fetchProducts()
    }, [productId]);
    
    const handleAddToCart = () => {
        addToCart(product, quantity);
        navigate('/cart');
    }
    
    const handleBuyNow = async () => {
        setIsLoading2(true)
    
        if (!product || !product.id || quantity <= 0) {
            alert('Invalid product or quantity');
            toast.error('Invalid product or quantity');
            return;
        }
        try{
            const totalPrice = product.price * quantity;
    
            const res = await axios.post(`${URL}/api/purchases/create`,{
                quantity: quantity,
                productId:product.id,
                // price: product.price,
                // discount:product.discount,
                title: product.title,
                description: product.description,
                imageUrl: product.imageUrl,
                size: product.size,
                color: product.color,
                // totalPrice:totalPrice,
                email:email,
                fname:fname,
                userId:userId,
                // productId:productId
            });
            console.log("see purchase", res.data)
            setIsLoading(false)
           
            toast.success('Purchase is Successful', toastStyles.success)
    
        } catch(error) {
            console.error('Error creating purchase', error)
            alert('Failed to complete purchase');
            toast.error('Failed to complete purchase');
    
        }
        finally{
            setIsLoading2(false)
        }
    }
    
    const handleReview = async () => {
        
        try{
            const res = await axios.post(`${URL}/api/reviews/${productId}`, {
                userId : userId,
                rating,
                comment,
                productId:productId
            });
            console.log('review post',res.data)
            toast.success('Review Submitted successfully!', toastStyles.success);
            setMessage('Review Submitted successfully!');
            setRating(0);
            setComment('');
            
    
    
        } catch (error) {
            setMessage(error.res?.data?.message || 'You have to buy this product to review!');
            toast.error(error.res?.data?.message || 'You have to buy this product to review!', toastStyles.error);
         
        }
    }
    

    return (
        <div className='bg-black min-h-screen'>
            <Toaster 
                position="top-right"
                reverseOrder={false}
                gutter={8}
                toastOptions={{
                    duration: 9000,
                    style: {
                        borderRadius: '8px',
                        boxShadow: '0 3px 10px rgba(0,0,0,0.1), 0 3px 3px rgba(0,0,0,0.05)'
                    }
                }} 
            />
            <div className='px-4 md:px-8 lg:px-[350px]'>
                <div className='flex flex-col md:flex-row justify-center md:gap-x-8 lg:gap-x-48 pt-12 md:pt-24'>
                    <img src={imageUrl ? imageUrl : lamp} className='w-full md:w-[400px] lg:w-[600px] h-auto md:h-[350px] lg:h-[450px] object-cover' alt="Product" />

                    <div className='mt-6 md:mt-0'>
                        <p className='font-bold text-2xl md:text-3xl text-white'>{title || "Luminous Arc Light"}</p>
                        <div className='flex gap-4 mt-4 md:mt-6'>
                            {discount ? <p className='line-through text-[#808080] font-semibold text-lg md:text-xl'>₦{price}</p> : <p className='font-semibold text-lg md:text-xl text-white'>₦{price}</p>}
                            {!discount ? null : <p className='font-semibold text-lg md:text-xl text-white'>₦{discount}</p>}
                        </div>

                        <p className='text-lg md:text-xl mt-4 md:mt-6 text-white'>In stock now</p>

                        <div className='flex gap-x-4 mt-4 md:mt-6'>
                            <button onClick={handleDecrease} className='border-2 border-white rounded-md px-4 md:px-6 py-2'><FiMinus color='white' /></button>
                            <button className='border text-white font-semibold rounded-md px-3 py-2'>{quantity}</button>
                            <button onClick={handleIncrease} className='border-2 border-white font-semibold rounded-md px-4 md:px-6 py-2'><FiPlus color='white' /></button>
                        </div>

                        <div><button onClick={handleBuyNow} className='bg-white text px-12 md:px-24 py-2 mt-4 md:mt-6 w-full md:w-auto'>Buy Now</button></div>

                        <div className='mt-8 md:mt-12'>
                            <div className='text-xl font-bold text-white'>Make a review</div>
                            <div className='flex gap-x-2 md:gap-x-4 mt-4'>
                                <div onClick={handleFirst}>{first ? (<FaStar color='green' size={20}/>) : (<GoStar size={20} color='white' />)}</div>
                                <div onClick={handleSecond}>{second ? (<FaStar color='green' size={20} />) : (<GoStar size={20} color='white' />)}</div>
                                <div onClick={handleThird}>{third ? (<FaStar color='green' size={20} />) : (<GoStar size={20} color='white' />)}</div>
                                <div onClick={handleFourth}>{fourth ? (<FaStar color='green' size={20} />) : (<GoStar size={20} color='white'/>)}</div>
                                <div onClick={handleFifth}>{fifth ? (<FaStar color='green' size={20}/>) : (<GoStar size={20} color='white'/>)}</div>
                            </div>
                            <textarea onChange={(e) => setComment(e.target.value)} className='border px-2 py-2 h-[100px] rounded-md w-full md:w-[400px] text-gray-600 mt-4' placeholder='Write a comment'/>
                    
                            <div className='mt-2'><button onClick={handleReview} className='bg-white text rounded-md px-4 py-1 w-full md:w-auto'>Send Review</button></div>
                            {message && <p className='text-green-600'>{message}</p>}
                        </div>
                    </div>
                </div>

                <div className='mt-8 md:mt-12'>
                    <p className='font-semibold text-xl text-white'>Description</p>
                    <p className='font-normal text-lg mt-4 text-white'>{description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetails

