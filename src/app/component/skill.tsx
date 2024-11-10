import React from 'react'
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";


const Skill = () => {
    return (
        <div id="skills">
            <section className="text-gray-400 bg-gray-900">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20 ">
                    <h2 className='title-font text-center sm:text-4xl text-3xl mb-6 font-medium text-white'>MY <span className='text-purple-500'>Skills</span> </h2>
                        <h2 className="text-white">
                        My diverse skill set, showcases my expertise and commitment to delivering high-quality results.
                        </h2>
                    </div>
                    <div className="flex flex-wrap -m-4 -mt-[5rem]">
                        {/* Skill 1 */}
                        <div className="p-4 w-full md:w-1/3 ">
                            <div className="flex rounded-lg h-full bg-purple-500 hover:bg-purple-300 p-8 flex-col shadow-xl shadow-gray-300">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#dd4132ff] text-white flex-shrink-0">
                                    <IoLogoHtml5 className="font-bold text-xl" />

                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">
                                        HTML
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="relative h-1 w-full bg-gray-300 rounded-xl ">
                                        <div className="absolute bg-[#023047] h-1 w-[100%]"></div>
                                    </div>
                                    <p className=" font-bold text-[#dd4132ff] text-right">100%</p>
                                </div>
                            </div>
                        </div>
                        {/* Skill 2 */}
                        <div className="p-4 w-full md:w-1/3 ">
                            <div className="flex rounded-lg h-full bg-purple-500 hover:bg-purple-300 p-8 flex-col shadow-xl shadow-gray-400">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#dd4132ff] text-white flex-shrink-0">
                                    <IoLogoCss3 className="font-bold text-xl" />

                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">
                                        CSS
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="relative h-1 w-full bg-gray-300 rounded-xl ">
                                        <div className="absolute bg-[#023047] h-1 w-[85%]"></div>
                                    </div>
                                    <p className=" font-bold text-[#dd4132ff] text-right">85%</p>
                                </div>
                            </div>
                        </div>
                        {/* Skill 3 */}
                        <div className="p-4 w-full md:w-1/3 ">
                            <div className="flex rounded-lg h-full bg-purple-500 hover:bg-purple-300 p-8 flex-col shadow-xl shadow-gray-300">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#dd4132ff] text-white flex-shrink-0">
                                    <SiJavascript className="font-bold text-xl" />

                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">
                                        Javascript
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="relative h-1 w-full bg-gray-300 rounded-xl ">
                                        <div className="absolute bg-[#023047] h-1 w-[90%]"></div>
                                    </div>
                                    <p className=" font-bold text-[#dd4132ff] text-right">90%</p>
                                </div>
                            </div>
                        </div>
                        {/* Skill 4 */}
                        <div className="p-4 w-full md:w-1/3 ">
                            <div className="flex rounded-lg h-full bg-purple-500 hover:bg-purple-300 p-8 flex-col shadow-xl shadow-gray-300">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#dd4132ff] text-white flex-shrink-0">
                                    <SiTypescript className="font-bold text-xl" />

                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">
                                        typescript
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="relative h-1 w-full bg-gray-300 rounded-xl ">
                                        <div className="absolute bg-[#023047] h-1 w-[90%]"></div>
                                    </div>
                                    <p className=" font-bold text-[#dd4132ff] text-right">90%</p>
                                </div>
                            </div>
                        </div>
                        {/* Skill 5 */}
                        <div className="p-4 w-full md:w-1/3 ">
                            <div className="flex rounded-lg h-full bg-purple-500 hover:bg-purple-300 p-8 flex-col shadow-xl shadow-gray-300">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#dd4132ff] text-white flex-shrink-0">
                                    <SiNextdotjs className="font-bold text-xl" />

                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">
                                        Next.js
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="relative h-1 w-full bg-gray-300 rounded-xl ">
                                        <div className="absolute bg-[#023047] h-1 w-[90%]"></div>
                                    </div>
                                    <p className=" font-bold text-[#dd4132ff] text-right">90%</p>
                                </div>
                            </div>
                        </div>
                        {/* Skill 6 */}
                        <div className="p-4 w-full md:w-1/3 ">
                            <div className="flex rounded-lg h-full bg-purple-500 hover:bg-purple-300 p-8 flex-col shadow-xl shadow-gray-300">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#dd4132ff] text-white flex-shrink-0">
                                    <SiTailwindcss className="font-bold text-xl" />

                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">
                                        tailwindcss
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="relative h-1 w-full bg-gray-300 rounded-xl ">
                                        <div className="absolute bg-[#023047] h-1 w-[85%]"></div>
                                    </div>
                                    <p className=" font-bold text-[#dd4132ff] text-right">85%</p>
                                </div>
                            </div>
                        </div>
                        {/* Skill 7 */}
                        <div className="p-4 w-full md:w-1/3 ">
                            <div className="flex rounded-lg h-full bg-purple-500 hover:bg-purple-300 p-8 flex-col shadow-xl shadow-gray-300">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#dd4132ff] text-white flex-shrink-0">
                                    <FaNode className="font-bold text-xl" />

                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">
                                        nodejs
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="relative h-1 w-full bg-gray-300 rounded-xl ">
                                        <div className="absolute bg-[#023047] h-1 w-[75%]"></div>
                                    </div>
                                    <p className=" font-bold text-[#dd4132ff] text-right">75%</p>
                                </div>
                            </div>
                        </div>
                        {/* Skill 8 */}
                        <div className="p-4 w-full md:w-1/3 ">
                            <div className="flex rounded-lg h-full bg-purple-500 hover:bg-purple-300 p-8 flex-col shadow-xl shadow-gray-300">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#dd4132ff] text-white flex-shrink-0">
                                    <SiMysql className="font-bold text-xl" />

                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">
                                        MySQL
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="relative h-1 w-full bg-gray-300 rounded-xl ">
                                        <div className="absolute bg-[#023047] h-1 w-[90%]"></div>
                                    </div>
                                    <p className=" font-bold text-[#dd4132ff] text-right">90%</p>
                                </div>
                            </div>
                        </div>
                        {/* Skill 9 */}
                        <div className="p-4 w-full md:w-1/3 ">
                            <div className="flex rounded-lg h-full bg-purple-500 hover:bg-purple-300 p-8 flex-col shadow-xl shadow-gray-300">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#dd4132ff] text-white flex-shrink-0">
                                    <FaGitAlt className="font-bold text-xl" />

                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">
                                        Version control
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="relative h-1 w-full bg-gray-300 rounded-xl ">
                                        <div className="absolute bg-[#023047] h-1 w-[95%]"></div>
                                    </div>
                                    <p className=" font-bold text-[#dd4132ff] text-right">95%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Skill