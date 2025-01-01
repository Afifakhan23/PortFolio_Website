import React from 'react'
import Image from "next/image";
import myImg from '../../public/assets/picture/my.jpg'
const About = () => {
    return (
        <div id="about">
            <section className="text-gray-400 bg-gray-900">
                <div className="container px-5 py-20 mx-auto flex flex-wrap">
                    <div className="flex flex-col text-center w-full mb-6">
                        <h2 className='title-font sm:text-4xl text-3xl font-medium text-white'><span className='text-purple-500'>About</span> me</h2>
                    </div>
                    <div className="flex flex-wrap">
                        <Image
                            className="md:w-full lg:w-1/4 object-cover object-center rounded-lg md:mt-0 mt-2"
                            src={myImg}
                            alt="step"
                        />
                        <div className="lg:w-3/5 md:w-1/2 md:pl-10 md:py-6">
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <p className="leading-relaxed">
                                        I am Afifa Khan is a dedicated Software Developer. My journey in the tech world is driven by a deep understanding of both frontend and backend development, ensuring seamless and efficient user experiences.
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle cx={12} cy={5} r={3} />
                                        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <p className="leading-relaxed">
                                        EDUCATION : Intermediate Abdullah Govt Girls Collage
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                        <circle cx={12} cy={7} r={4} />
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <p className="leading-relaxed">
                                        With a solid foundation in HTML, CSS, and JavaScript, I create visually stunning and user-friendly interfaces. On the backend, my expertise in Node.js, Express.js, and Python enables me to develop powerful, scalable server-side solutions.
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                        <path d="M22 4L12 14.01l-3-3" />
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <p className="leading-relaxed">
                                        My goal is to contribute to innovative projects that push the boundaries of what is possible on the web.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default About