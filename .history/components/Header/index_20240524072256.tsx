'use client'
import { SectionContext } from "@/Helpers/context";
import { useScrollTop } from "@/Helpers/hooks";
import Link from "next/link";
import { CSSProperties, useContext, useEffect, useState } from 'react'

const Header = () => {
    const { section,setSection } = useContext(SectionContext)
    const scrollAction = ()=> {
        setSection('home')
        scrollTop()
    }
    const { scrollTop } = useScrollTop();
    const [open, setAnim] = useState<boolean>(false);
    const imageStyles: CSSProperties = {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center right',
        backgroundImage: `url('/images/profile.jpg')`,
    }
    const [sidebar, setSideBar] = useState<boolean>(false)
    const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
            setPrevScrollPos(currentScrollPos);
            setVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);
    return (
        <div className='flex absolute flex-row justify-end items-center py-5 md:px-20 px-2 w-full'>
            <div className="fixed text-white top-3 left-5 rounded-[40px] border-[1px] border-[#565656] w-[28%] h-[98%] px-8 py-8 flex-col gap-9 items-center hidden xl:flex">
                <div className="flex justify-between items-center w-full">
                    <h1 className="font-semibold text-3xl text-white">MOE</h1>
                    <div className="flex flex-col gap-1 text-sm text-right">
                        <span className="">Web Developer</span>
                        <span className="">{'&'} Fun guy</span>
                    </div>
                </div>
                <div className="w-[65%] rounded-2xl h-[190px] mx-auto" style={{ ...imageStyles }}>
                </div>
                <div className="flex flex-col gap-y-3">
                    <span className="text-xl text-center font-semibold">moses.nwigberi@ditcosoft.com</span>
                    <span className="text-xl text-center font-semibold">Based in Lagos, Nigeria</span>
                </div>
                <div className="text-gray-400 text-center text-sm">
                    © {new Date().getFullYear()} MOE. All rights reserved.
                </div>
                <div className="flex justify-center gap-x-5">
                    <div className="w-10 h-10 rounded-full border-gray-400 border-[1px] flex justify-center items-center text-gray-400 transition-all duration-700 hover:border-[#0053cc] hover:scale-110 hover:text-[#0053cc]">
                        <a href="https://x.com/NMoses_" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                    <div className="w-10 h-10 rounded-full border-gray-400 border-[1px] flex justify-center items-center text-gray-400 transition-all duration-700 hover:border-[#0053cc] hover:scale-110 hover:text-[#0053cc]">
                        <a href="https://linkedin.com/in/nwigberi-moses" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                    <div className="w-10 h-10 rounded-full border-gray-400 border-[1px] flex justify-center items-center text-gray-400 transition-all duration-700 hover:border-[#0053cc] hover:scale-110 hover:text-[#0053cc]">
                        <a href="https://wa.me/+2348075489362" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
                    </div>
                    <div className="w-10 h-10 rounded-full border-gray-400 border-[1px] flex justify-center items-center text-gray-400 transition-all duration-700 hover:border-[#0053cc] hover:scale-110 hover:text-[#0053cc]">
                        <a href="https://github.com/TheMoeEntity" target="_blank"><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <a href="mailto:moses.nwigberi@ditcosoft.com" className="w-full md:max-w-[600px] text-center rounded-full px-4 py-3 bg-[#0053CC] text-white">
                    <i className="fas fa-envelope mr-2"></i>  HIRE ME
                </a>
            </div>
            <button className="right-[13px] lg:-right-[15px] z-50 text-2xl bg-[#1f1f1f] hover:text-[#0053CC] hover:border-[#0053CC] transition-colors duration-300 mt-12 w-12 h-12 fixed md:fixed lg:relative flex justify-center items-center rounded-full border-[1px] border-[#4E4E4E] p-3 text-white" onClick={() => setSideBar(true)}>
                <i className="fa-solid fa-bars"></i>
            </button>
            <div className={"fixed shadow-xl bg-[#1F1F1F] z-[50] top-1/2 gap-y-5 px-4 py-5 right-3 md:right-16 rounded-full border-[#575757] border-[1px] flex flex-col items-center justify-center duration-500 transition-all " + (visible ? 'opacity-100 -translate-y-1/2 ' : 'opacity-0 -translate-y-[100px]')}>
                <div className={`flex duration-300 transition-colors justify-center items-center  ${section === 'home' ? 'text-[#0053cc]' : 'text-[#999999]'}`}>
                    <a href="/"><i className="fas fa-house"></i></a>
                </div>
                <div className={`flex duration-300 transition-colors justify-center items-center  ${section === 'about' ? 'text-[#0053cc]' : 'text-[#999999]'}`}>
                    <a href="/#about"><i className="fas fa-user"></i></a>
                </div>
                <div className={`flex duration-300 transition-colors justify-center items-center  ${section === 'experience' ? 'text-[#0053cc]' : 'text-[#999999]'}`}>
                    <a href="/#experience"><i className="fas fa-file-alt"></i></a>
                </div>
                <div className={`flex duration-300 transition-colors justify-center items-center  ${section === 'services' ? 'text-[#0053cc]' : 'text-[#999999]'}`}>
                    <a href="#services"><i className="fas fa-cogs"></i></a>
                </div>
                <div className={`flex duration-300 transition-colors justify-center items-center  ${section === 'skills' ? 'text-[#0053cc]' : 'text-[#999999]'}`}>
                    <a href="/#skills"><i className="fas fa-code"></i></a>
                </div>
                <div className={`flex duration-300 transition-colors justify-center items-center  ${section === 'portfolio' ? 'text-[#0053cc]' : 'text-[#999999]'}`}>
                    <a href="/#portfolio"><i className="fas fa-briefcase"></i></a>
                </div>
                <div className={`flex duration-300 transition-colors justify-center items-center  ${section === 'contact' ? 'text-[#0053cc]' : 'text-[#999999]'}`}>
                    <a href="/#contact"><i className="fas fa-envelope"></i></a>
                </div>
                <button onClick={() => scrollAction()} className="flex justify-center items-center text-gray-400">
                    <i className="fas fa-angle-up"></i>
                </button>
            </div>
            <div onClick={() => setSideBar(false)} className={`w-full h-full fixed top-0 transition-opacity duration-500 left-0 bg-[#3A3A3A] ${sidebar ? 'opacity-50 z-10' : 'opacity-0 -z-10'}`}></div>
            <div className={`fixed text-sm top-0 z-[55] right-0 w-[80%] md:w-[60%] lg:w-[30%] bg-[#191919] h-full py-10 gap-y-16 px-10 duration-500 transition-transform flex flex-col justify-center items-center ${sidebar ? 'translate-x-0' : 'translate-x-[100%]'}`}>
                <span className="text-white"><b>MENU</b></span>
                <div className="flex justify-center items-center text-gray-400">
                    <button><i className="fas fa-house w-2 h-2 mr-4"></i> spanHome</button>
                </div>
                <div className="flex justify-center items-center text-gray-400">
                    <button><i className="fas fa-user w-2 h-2 mr-4"></i>About</button>
                </div>
                <div className="flex justify-center items-center text-gray-400">
                    <button><i className="fas fa-file-alt w-2 h-2 mr-4"></i>Resume</button>
                </div>
                <div className="flex justify-center items-center text-gray-400">
                    <button><i className="fas fa-briefcase w-2 h-2 mr-4"></i>Portfolio</button>
                </div>
                <div className="flex justify-center items-center text-gray-400">
                    <button><i className="fas fa-cogs w-2 h-2 mr-4"></i>Services</button>
                </div>
                <div className="flex justify-center items-center text-gray-400">
                    <button><i className="fas fa-envelope w-2 h-2 mr-4"></i>Contact</button>
                </div>
            </div>
        </div>
    )
}

export default Header