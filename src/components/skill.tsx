'use client'
import * as React from "react"
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const Skill = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive:[
      {
        breakpoint:1540,
        settings:{
          slidesToShow: 6,
        },
      },
      {
        breakpoint:1240,
        settings:{
          slidesToShow: 5,
        },
      },
      {
        breakpoint:600,
        settings:{
          slidesToShow: 4,
        },
      },
      {
        breakpoint:480,
        settings:{
          slidesToShow: 2,
        },
      },
    ]
  };
    return (
      <>
      <div className="flex flex-col justify-evenly items-center bg-gray-900 text-white">
      <div className="flex flex-col text-center w-full mb-6">
                        <h2 className='title-font sm:text-4xl text-3xl font-medium text-white'><span className='text-purple-500'>About</span> me</h2>
                    </div>
      <Slider className="w-[1200px]" {...settings}>
        <div className="p-[10px]">
      <div className="h-[150px] rounded-[10px] bg-gray-800 flex flex-col justify-evenly items-center border-transparent border-2 hover:border-purple-700 transform transition duration-500 hover:scale-110">
        <Image src={'/assets/picture/html.png'} alt="pic" width={90} height={90}/>
        <h2>HTML</h2>
        </div>
      </div>
      <div className="p-[10px]">
      <div className="h-[150px] rounded-[10px] bg-gray-800 flex flex-col justify-evenly items-center border-transparent border-2 hover:border-purple-700 transform transition duration-500 hover:scale-110">
      <Image src={'/assets/picture/css.png'} alt="pic" width={50} height={50}/>
        <h2>CSS</h2>
        </div>
      </div>
      <div className="p-[10px]">
      <div className="h-[150px] rounded-[10px] bg-gray-800 flex flex-col justify-evenly items-center border-transparent border-2 hover:border-purple-700 transform transition duration-500 hover:scale-110">
      <Image src={'/assets/picture/javascript.png'} alt="pic" width={50} height={50}/>

        <h2>Javascript</h2>
        </div>
      </div>
      <div className="p-[10px]">
      <div className="h-[150px] rounded-[10px] bg-gray-800 flex flex-col justify-evenly items-center border-transparent border-2 hover:border-purple-700 transform transition duration-500 hover:scale-110">
      <Image src={'/assets/picture/typescript.png'} alt="pic" width={50} height={50}/>
        <h2>typescript</h2>
        </div>
      </div>
      <div className="p-[10px]">
      <div className="h-[150px] rounded-[10px] bg-gray-800 flex flex-col justify-evenly items-center border-transparent border-2 hover:border-purple-700 transform transition duration-500 hover:scale-110">
      <Image src={'/assets/picture/react.png'} alt="pic" width={60} height={60}/>
        <h2>React</h2>
        </div>
      </div>
      <div className="p-[10px]">
      <div className="h-[150px] rounded-[10px] bg-gray-800 flex flex-col justify-evenly items-center border-transparent border-2 hover:border-purple-700 transform transition duration-500 hover:scale-110">
      <Image src={'/assets/picture/nextjs.png'} alt="pic" width={60} height={60}/>
        <h2>NextJs</h2>
        </div>
      </div>
      <div className="p-[10px]">
      <div className="h-[150px] rounded-[10px] bg-gray-800 flex flex-col justify-evenly items-center border-transparent border-2 hover:border-purple-700 transform transition duration-500 hover:scale-110">
      <Image src={'/assets/picture/tailwindcss.png'} alt="pic" width={60} height={60}/>
        <h2>TailwindCSS</h2>
        </div>
      </div>
      <div className="p-[10px]">
      <div className="h-[150px] rounded-[10px] bg-gray-800 flex flex-col justify-evenly items-center border-transparent border-2 hover:border-purple-700 transform transition duration-500 hover:scale-110">
      <Image src={'/assets/picture/mysql.png'} alt="pic" width={60} height={60}/>
        <h2>mySQL</h2>
        </div>
      </div>
      <div className="p-[10px]">
      <div className="h-[150px] rounded-[10px] bg-gray-800 flex flex-col justify-evenly items-center border-transparent border-2 hover:border-purple-700 transform transition duration-500 hover:scale-110">
      <Image src={'/assets/picture/figma.png'} alt="pic" width={80} height={80}/>
        <h2>Figma</h2>
        </div>
      </div>
    </Slider>
    </div>
    </>
    )
}

export default Skill