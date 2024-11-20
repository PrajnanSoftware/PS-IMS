// src/RegistrationForm.jsx  
import React from 'react';

const RegistrationForm = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-white font-roboto">
            <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-6xl">
                <div className="w-full md:w-1/2">
                    <img alt="Illustration of people working with data and charts" className="rounded-b-lg md:rounded-r-lg md:rounded-bl-none" src="https://storage.googleapis.com/a1aa/image/BTtIdflmnfpUFEl8t5MfpepeQjYnIiUNWySCfAY5ta8mXIO8E.jpg" />
                </div>
                <div className="p-8 w-full md:w-1/2">
                    <div className="mb-4">
                        <h1 className="text-2xl font-semibold text-gray-800">Register</h1>
                        <p className="text-sm text-gray-600 font-semibold">Manage all your inventory efficiently</p>
                        <p className="text-sm text-gray-600">Let's get you all set up...</p>
                    </div>
                    <form>
                        <div className="flex space-x-4 mb-4">
                            <div className="w-1/2">
                                <label className="block text-sm text-gray-600">First name</label>
                                <input type="text" placeholder="Enter your name" className="w-full px-4 py-2 border rounded-lg text-sm text-gray-600 bg-stone-200" />
                            </div>
                            <div className="w-1/2">
                                <label className="block text-sm text-gray-600">Last name</label>
                                <input type="text" placeholder="minimum 8 characters" className="w-full px-4 py-2 border rounded-lg text-sm text-gray-600 bg-stone-200" />
                            </div>
                        </div>
                        <div className="flex space-x-4 mb-4">
                            <div className="w-1/2">
                                <label className="block text-sm text-gray-600">Email</label>
                                <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-lg text-sm text-gray-600 bg-stone-200" />
                            </div>
                            <div className="w-1/2">
                                <label className="block text-sm text-gray-600">Phone no.</label>
                                <input type="text" placeholder="minimum 8 characters" className="w-full px-4 py-2 border rounded-lg text-sm text-gray-600 bg-stone-200" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm text-gray-600">Password</label>
                            <input type="password" placeholder="Enter your password" className="w-full px-4 py-2 border rounded-lg text-sm text-gray-600 bg-stone-200" />
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" className="mr-2" />
                            <label className="text-sm text-gray-600">I agree to all terms, <a href="#" className="text-blue-600">privacy policies</a>, and fees</label>
                        </div>
                        <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded-full">Sign up</button>
                    </form>
                    <p className="text-sm text-gray-600 mt-4">Already have an account? <a href="#" className="text-blue-600">Log in</a></p>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;