import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="text-gray-400 bg-gray-900">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col ">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    <span className="ml-3 text-xl">Afifa Khan</span>
                </a>
                <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
                    © 2024 Afifa Khan
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <Link href={""} className="text-purple-500 hover:text-gray-500 text-3xl">
                        <FaFacebook />
                    </Link>
                    <Link href={""} className="ml-3 text-purple-500  hover:text-gray-500 text-3xl">
                        <IoLogoTwitter />
                    </Link>
                    <Link href={""} className="ml-3 text-purple-500  hover:text-gray-500 text-3xl">
                        <GrInstagram />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/afifa~khan/"} className="ml-3 text-purple-500  hover:text-gray-500 text-3xl">
                        <FaLinkedin />
                    </Link>
                </span>
            </div>
        </footer>


    )
}

export default Footer