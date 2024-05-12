'use client'
import Link from "next/link";
import { CSSProperties, useState } from 'react'

const Header = () => {
    const [open, setAnim] = useState<boolean>(false);
    const imageStyles: CSSProperties = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url('/images/moe_profilej.jpg')`,
    }
    return (
        <div className='flex h-[100px] flex-row justify-end items-center py-5 md:px-20 px-5 w-full'>
            <div className="fixed text-white top-3 left-5 rounded-[40px] border-[1px] border-[#565656] w-[28%] h-[95%] px-8 py-8 flex flex-col gap-12 items-center">
                <div className="flex justify-between items-center w-full">
                    <h1 className="font-semibold text-3xl text-white">MOE</h1>
                    <div className="flex flex-col gap-1 text-sm text-right">
                        <span className="">Web Developer</span>
                        <span className="">Fun guy</span>
                    </div>
                </div>
                <div className="w-[75%] rounded-2xl h-[150px] mx-auto" style={{ ...imageStyles }}>
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
                <button className="w-full rounded-full px-4 py-3 bg-[#0053CC] text-white">
                    <i className="fas fa-envelope mr-2"></i>  HIRE ME!
                </button>
            </div>
            <button className="text-2xl hover:text-[#0053CC] hover:border-[#0053CC] transition-colors duration-300 mt-12 w-12 h-12 flex justify-center items-center rounded-full border-[0.5px] p-3 text-white" onClick={() => setAnim(true)}>
                <i className="fa-solid fa-bars"></i>
            </button>
            <div className="fixed top-1/2 gap-y-5 px-4 py-5 -translate-y-1/2 right-16 rounded-full border-gray-400 border-[1px] flex flex-col items-center justify-center">
                <div className="flex justify-center items-center text-gray-400">
                    <button><i className="fas fa-house"></i></button>
                </div>
                <div className="flex justify-center items-center text-gray-400">
                    <button><i className="fas fa-user"></i></button>
                </div>
                <div className="flex justify-center items-center text-gray-400">
                    <button><i className="fas fa-file-alt"></i></button>
                </div>
                <div className="flex justify-center items-center text-gray-400">
                    <button><i className="fas fa-briefcase"></i></button>
                </div>
                <div className="flex justify-center items-center text-gray-400">
                    <button><i className="fas fa-cogs"></i></button>
                </div>
                <div className="flex justify-center items-center text-gray-400">
                    <button><i className="fas fa-envelope"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Header