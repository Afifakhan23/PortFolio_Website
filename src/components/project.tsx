import React from 'react'
import Image from 'next/image'
import myProject from "../../public/assets/picture/Currency Converter Thumbnaul.png"
const Project = () => {
    return (
        <div id="project">
            <section className="text-gray-400 bg-gray-900">
                <div className="container px-5 py-20 mx-auto">
                    <h2 className='title-font text-center sm:text-4xl text-3xl mb-6 font-medium text-white'>MY <span className='text-purple-500'>PROJECTS</span> </h2>
                    <div className='mt-5 w-[1200px] flex justify-evenly items-start'>
                        <Image src={'/assets/picture/eCommerce.png'} width={400} height={300} alt='pic' className='' />
                        <div>
                            <h2 className='text-2xl text-white'>Hackathon E-Commerce Website</h2>
                            <p className='w-60'>I made a Responsive Resume Builder using HTML, CSS and Javascript.</p>
                            <div className='w-60 flex justify-between'>
                                <button className="mt-5 border-2 border-black text-white px-6 py-2 rounded-full hover:bg-black hover:text-white">Github</button>
                                <button className="mt-5 border-2 border-black text-white px-6 py-2 rounded-full hover:bg-black hover:text-white">Deploy</button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 w-[1200px] flex justify-evenly items-start'>
                        <Image src={'/assets/picture/resumeBuilder.png'} width={400} height={300} alt='pic' className='rounded-lg' />
                        <div>
                            <h2 className='text-2xl text-white'>Responsive Resume Builder</h2>
                            <p className='w-60'>I made a Responsive Resume Builder using HTML, CSS and Javascript.</p>
                            <div className='w-60 flex justify-between'>
                                <button className="mt-5 border-2 border-black text-white px-6 py-2 rounded-full hover:bg-black hover:text-white">Github</button>
                                <button className="mt-5 border-2 border-black text-white px-6 py-2 rounded-full hover:bg-black hover:text-white">Deploy</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section >

        </div >
    )
}

export default Project