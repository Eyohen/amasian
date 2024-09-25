import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

const AdminLogin = () => {
  const [authtoggle, setAuthToggle] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://your-api-endpoint.com/api/submit', formData);
      console.log(response.data);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('Error submitting form');
    }
  };

  return (
    <div className="bg-black py-8 md:py-[320px] flex justify-center items-center min-h-screen font-['Libre_Baskerville',serif]">
      <div className='w-full max-w-[450px] md:max-w-[600px] bg-white px-6 md:px-16 py-8 rounded-2xl shadow-xl'>
        <form onSubmit={handleSubmit}>
          <h1 className='font-bold text-2xl pt-3'>Sign In</h1>
          <p className='text-gray-600 mb-6'>Please fill in your information</p>

          <div className='mb-6'>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input 
              className='border py-2 px-3 w-full rounded-md' 
              type="email" 
              id="email"
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className='mb-6'>
            <div className='flex justify-between mb-2'>
              <label htmlFor="password">Password</label>
              <span className='underline text-black cursor-pointer'>Forgot your password?</span>
            </div>
            <div className="relative">
              <input 
                className="border rounded-lg w-full py-2 px-3 pr-10 leading-tight hover:border-green-600 font-mono" 
                type={isPasswordVisible ? "text" : "password"} 
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button 
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? <RiEyeLine size={20} /> : <RiEyeOffLine size={20} />}
              </button>
            </div>
          </div>

          <div className='mt-8'>
            <Link to='/dashboard' className='block w-full'>
              <button className='bg-black py-2 px-4 w-full text-white shadow-xl rounded-md' type="submit">
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;