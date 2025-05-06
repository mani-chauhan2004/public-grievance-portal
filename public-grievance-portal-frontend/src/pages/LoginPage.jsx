import { Landmark } from 'lucide-react'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


const LoginPage = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
        <header className="w-full h-16 bg-white rounded-md shadow-md flex items-center px-4 md:px-8 lg:px-24">
            <Landmark size={28} strokeWidth={2.5} className="text-gray-800" />
            <h2 className="ml-2 text-xl sm:text-2xl font-semibold text-gray-900 whitespace-nowrap">
                Grievance Gateway
            </h2>
        </header>
        <div className="flex items-center justify-center py-8">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900">Welcome to Grievance Gateway</h1>
                <p className="mt-2 text-md text-gray-600">Sign in to access the portal</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                <form className="space-y-6">
                    <div>
                    <label className="block text-sm font-medium text-gray-700">Role</label>
                    <select className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                        <option>Select Role</option>
                        <option>Admin</option>
                        <option>Consumer</option>
                    </select>
                    </div>

                    <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    </div>

                    <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Remember me
                    </label>
                    <a href="" className="text-indigo-600 hover:underline">Forgot password?</a>
                    </div>

                    <button
                    type="submit"
                    className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition"
                    >
                    Sign In
                    </button>
                </form>
                <hr className="mt-10 opacity-30" />
                <div className='text-center mt-4 text:sm'>
                    <p>Don't have an account?</p>
                    <br />
                    <a href="" className='hover:underline rounded-xl p-2 bg-gray-200'> Create New Account</a>
                </div>                
                </div>
            </div>
        </div>
        <footer className="text-gray-700 py-12 px-4 bg-gray-100">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8 text-sm">

                <div className="min-w-[200px]">
                <h3 className="font-semibold mb-2">Quick Links</h3>
                <ul className="space-y-1">
                    <li><a href="#" className="hover:underline">About Us</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                    <li><a href="#" className="hover:underline">FAQs</a></li>
                    <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                </ul>
                </div>

                <div className="min-w-[200px]">
                <h3 className="font-semibold mb-2">Support</h3>
                <ul className="space-y-1">
                    <li><a href="#" className="hover:underline">Help Center</a></li>
                    <li><a href="#" className="hover:underline">Track Grievance</a></li>
                    <li><a href="#" className="hover:underline">Report Issue</a></li>
                </ul>
                </div>

                <div className="min-w-[200px]">
                <h3 className="font-semibold mb-2">Contact Info</h3>
                <p>📧 xyz@gov.in</p>
                <p>📞 123456789</p>
                </div>

                <div className="min-w-[200px]">
                <h3 className="font-semibold mb-2">Connect With Us</h3>
                <div className="flex space-x-4 mt-2">
                    <a href="#"><FaFacebookF className="text-gray-600 hover:text-gray-800" /></a>
                    <a href="#"><FaTwitter className="text-gray-600 hover:text-gray-800" /></a>
                    <a href="#"><FaInstagram className="text-gray-600 hover:text-gray-800" /></a>
                </div>
                </div>
            </div>

            <div className="border-t mt-8 pt-4 text-center text-xs text-gray-500">
                © 2025 Grievance Gateway. All rights reserved.
            </div>
        </footer>
    </div>
  )
}

export default LoginPage
