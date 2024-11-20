import React from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-white font-roboto">
            <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-6xl">
                <div className="p-8 w-full md:w-1/2">
                    <h1 className="text-3xl font-bold mb-2">Login</h1>
                    <p className="text-gray-600 mb-6">See your growth and get support!</p>
                    <button className="w-full flex items-center justify-center border border-gray-300 rounded-2xl py-3 mb-6">
                        <FontAwesomeIcon icon={faGoogle} className="text-xl mr-2 " />
                        <span>Sign in with Google</span>
                    </button>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email*</label>
                            <input className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-stone-200" id="email" placeholder="Enter your email" type="email" />
                        </div>
                        <div className="mb-4 ">
                            <label className="block text-gray-700 font-medium mb-2 " htmlFor="password">Password*</label>
                            <input className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-stone-200" id="password" placeholder="minimum 8 characters" type="password" />
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <input className="mr-2" id="remember" type="checkbox" />
                                <label className="text-gray-700" htmlFor="remember">Remember me</label>
                            </div>
                            <a className="text-blue-600" href="#">Forgot password?</a>
                        </div>
                        <button className="w-full bg-blue-900 text-white py-3 rounded-3xl">Login</button>
                    </form>
                    <p className="mt-6 text-center text-gray-600">Not registered yet? <a className="text-blue-600" href="#">Create a new account</a></p>
                </div>
                <div className="w-full md:w-1/2">
                    <img alt="Illustration of people working with data and charts" className="rounded-b-lg md:rounded-r-lg md:rounded-bl-none" src="https://storage.googleapis.com/a1aa/image/BTtIdflmnfpUFEl8t5MfpepeQjYnIiUNWySCfAY5ta8mXIO8E.jpg" />
                </div>
            </div>
        </div>
    );
};

export default Login;