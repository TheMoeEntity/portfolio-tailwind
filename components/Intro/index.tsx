'use client'
import React, { CSSProperties } from 'react'

const Intro = () => {
    const imageStyles: CSSProperties = {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center right',
        backgroundImage: `url('/images/profile.jpg')`,
    }
    return (
        <div id='intro' className=' px-5 py-10 flex flex-col gap-y-10'>
            <div className=" text-white top-3 left-5 rounded-[40px] border-[1px] border-[#565656]  h-[98%] px-8 py-8 flex-col gap-9 items-center flex md:hidden">
                <div className="flex justify-between items-center w-full">
                    <h1 className="font-semibold text-3xl text-white">MOE</h1>
                    <div className="flex flex-col gap-1 text-sm text-right">
                        <span className="">Web Developer</span>
                        <span className="">Fun guy</span>
                    </div>
                </div>
                <div className="w-[65%] rounded-2xl h-[190px] mx-auto" style={{ ...imageStyles }}>
                </div>
                <div className="flex flex-col gap-y-3">
                    <span className="text-xl text-center font-semibold">mosesnwigberi@gmail.com</span>
                    <span className="text-xl text-center font-semibold">Based in Lagos, Nigeria</span>
                </div>
                <div className="text-gray-400 text-center text-sm">
                    © {new Date().getFullYear()} MOE. All rights reserved.
                </div>
                <div className="flex justify-center gap-x-5">
                    <div className="w-10 h-10 rounded-full border-gray-400 border-[1px] flex justify-center items-center text-gray-400">
                        <a href=""><i className="fa-brands fa-twitter"></i></a>
                    </div>
                    <div className="w-10 h-10 rounded-full border-gray-400 border-[1px] flex justify-center items-center text-gray-400">
                        <a href=""><i className="fa-brands fa-instagram"></i></a>
                    </div>
                    <div className="w-10 h-10 rounded-full border-gray-400 border-[1px] flex justify-center items-center text-gray-400">
                        <a href=""><i className="fa-brands fa-whatsapp"></i></a>
                    </div>
                    <div className="w-10 h-10 rounded-full border-gray-400 border-[1px] flex justify-center items-center text-gray-400">
                        <a href=""><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <button onClick={() => alert('clicked me')} className="w-full rounded-full px-4 py-3 bg-[#0053CC] text-white">
                    <i className="fas fa-envelope mr-2"></i>  HIRE ME!
                </button>
            </div>
            <span className='px-5 text-sm w-fit flex gap-4 py-2 border-[1px] rounded-full text-white border-[#9999]'>
                <i className='fas fa-house'></i>
                <span>INTRODUCTION</span>
            </span>
            <span>
                <h1 className='text-[55px] font-semibold text-white'>
                    Hello! I&#39;m <span className='text-[#0053cc]'>MOE</span>, A Software Developer.
                </h1>
            </span>
            <span>
                <p>
                    I design and code beautifully simple things and i love what i do. <br />
                </p>
            </span>

            <div className='mt-40 flex gap-x-16'>
                <div className='flex flex-col gap-y-4'>
                    <span className='text-[60px] text-[#0053cc]'>
                        7+
                    </span>
                    <span>Years in the game.</span>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <span className='text-[60px] text-[#0053cc]'>
                        10+
                    </span>
                    <span>Projects completed.</span>
                </div>

            </div>
        </div>
    )
}

export default Intro