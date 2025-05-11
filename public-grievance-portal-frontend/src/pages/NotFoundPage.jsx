import React from 'react'
import { useNavigate } from 'react-router'
import { LogIn } from 'lucide-react';

function NotFoundPage() {
    const navigate = useNavigate();
    console.log("hello");
    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center gap-2'>
            <h1 className='text-red-500 text-6xl font-extrabold'>404</h1>
            <h2 className='text-4xl'>Not Found</h2>
            <button className="cursor-pointer flex gap-1 bg-button-primary px-4 py-2 text-lg font-semibold items-center bg-button-secondary text-primary-white rounded-lg" onClick={() => navigate('/login')}><LogIn className="text-primary-white" size={20} strokeWidth={3}/>LogIn</button>
        </div>
    )
}

export default NotFoundPage