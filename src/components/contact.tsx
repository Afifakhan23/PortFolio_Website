"use client"
import React from 'react'
import { MdContactMail } from "react-icons/md";
import {useState} from "react";

const Contact = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e:any) => {
        setInputValue(e.target.value);
    };

  const handleAlert = () => {
    {
        inputValue?
        alert(`Dear ${inputValue}! your message has been delivered`)
        :alert("Please write something")

    }
  };
    return (
        <div id='contact'>
            <section className="text-gray-400 bg-gray-900 body-font relative">
                <div className="container px-4 py-20 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-8 relative">
                        <MdContactMail className="text-9xl" />
                        <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                    ADDRESS
                                </h2>
                                <p className="mt-1">
                                    Photo booth tattooed prism, portland taiyaki hoodie neutra
                                    typewriter
                                </p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                    EMAIL
                                </h2>
                                <a className="text-purple-400 leading-relaxed">example@email.com</a>
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                    PHONE
                                </h2>
                                <p className="leading-relaxed">123-456-7890</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                            Contact
                        </h2>
                        <p className="leading-relaxed mb-5">
                            If you have any Query Feel Free to Contact
                        </p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                                Name
                            </label>
                            <input
                                value={inputValue}
                                onChange={handleInputChange} 
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-purple-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-purple-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-purple-500 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                defaultValue={""}
                            />
                        </div>
                        <button className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg" onClick={handleAlert} >
                            Send Message
                        </button>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Contact