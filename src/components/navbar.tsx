import Link from 'next/link'
import React from 'react'
import { IoMdDownload } from "react-icons/io";

const Navbar = () => {
    return (
        <div className='z-50 sticky top-0'>
            <header className="text-gray-400 bg-gray-900 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <div>
                            <span className="ml-3 text-xl">Portfolio</span>
                        </div>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={'/'} className="mr-5 text-purple-500">HOME</Link>
                        <Link href={'#about'} className="mr-5 hover:text-purple-500">ABOUT</Link>
                        <Link href={'#skills'} className="mr-5 hover:text-purple-500">SKILLS</Link>
                        <Link href={'#project'} className="mr-5 hover:text-purple-500">PROJECTS</Link>
                        <Link href={"#contact"} className="mr-5 hover:text-purple-500">CONTACT</Link>
                    </nav>
                    <a href="/public/assets/cv/My CV.pdf">
                        <button className="inline-flex items-center border-2 border-purple-500 py-1 px-3 focus:outline-none hover:bg-purple-500 hover:text-white rounded text-base mt-4 md:mt-0">Download CV
                        <IoMdDownload className='text-xl ml-2 text-white'/>
                        </button>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default Navbar