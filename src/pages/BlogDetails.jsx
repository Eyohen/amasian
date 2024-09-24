import React, { useState, useEffect } from 'react'
import umbrella from '../assets/Hero.jpg'
import { useNavigate, useParams } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { URL } from '../url';
import axios from 'axios';

const BlogDetails = () => {
    const postId = useParams().id
    const [title, setTitle] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [text, setText] = useState('')
    const [heading, setHeading] = useState('')
    const [createdAt, setCreatedAt] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const fetchPosts = async() => {
        setIsLoading(true)
        try {
            const res = await axios.get(`${URL}/api/posts/${postId}`)
            setTitle(res.data.title)
            setImageUrl(res.data.imageUrl)
            setText(res.data.text)
            setHeading(res.data.heading)
            setCreatedAt(res.data.createdAt)
        }
        catch(err) {
            console.log(err)
        }
        finally {
            setIsLoading(false)
        }
    }
    
    useEffect(() => {
        fetchPosts()
    }, [postId]);

    return (
        <div className="bg-black min-h-screen text-white">
            <div className="fixed inset-0 bg-black z-[-1]"></div>
            <div className="max-w-4xl mx-auto px-4 py-12">
                <p onClick={() => navigate(-1)} className='flex items-center gap-x-2 cursor-pointer mb-8'>
                    Home <MdOutlineKeyboardArrowRight /> Blog details
                </p>

                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <p className='text-sm'>{new Date(createdAt).toDateString()}</p>
                        <h1 className='font-semibold text-2xl md:text-3xl mt-3'>{title}</h1>
                        <p className='italic mt-2'>{heading}</p>
                        <div className='mt-8'>
                            <img 
                                src={imageUrl || umbrella} 
                                alt={title}
                                className='w-full h-auto max-h-[450px] object-cover' 
                            />
                        </div>
                        <div className='mt-6 space-y-4'>
                            <p>{text}</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default BlogDetails