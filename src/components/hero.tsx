"use client"
import React from 'react'
import Image from 'next/image';
import myImg from '../../public/assets/picture/my.jpg'
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div>
            <section className="text-gray-400 bg-gray-900">
                <div className="container mx-auto flex flex-col-reverse px-5 py-24 md:flex-row items-center">
                    <div className="w-[300px] md:w-[800px] lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="font-play sm:text-4xl text-3xl mb-7 text-purple-500">
                            <h2 className='text-white'>I am</h2>
                            <Typewriter
                                options={{
                                    strings: ['SOFTWARE ENGINEER', 'FULL STACK DEVELOPER'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <div className="w-[150px] h-[2px] bg-purple-700 mb-7"></div>
                        <p className="mb-8 leading-relaxed text-white">
                            I am Afifa Khan is a dedicated Software Developer. My journey in the tech world is driven by a deep understanding of both frontend and backend development, ensuring seamless and efficient user experiences.
                        </p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                                About Me
                            </button>
                            <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                                View CV
                            </button>
                        </div>
                    </div>
                    <div className="relative w-[300px] h-[300px]">
                        {/* Background Div */}
                        <div className="absolute top-4 left-4 w-[300px] h-[343px] bg-gray-800 rounded-2xl"></div>

                        {/* Foreground Image */}
                        <Image
                            src={myImg}
                            alt="My Picture"
                            width={300}
                            height={300}
                            className="relative z-10 rounded-2xl"
                        />
                    </div>

                </div>
            </section>


        </div>
    )
}

export default Hero