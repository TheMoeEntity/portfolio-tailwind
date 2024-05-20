'use client'
import Parallax from '@/Helpers/hooks/parallax'
import React from 'react'
import { useScroll, motion } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
    const paragraph = useRef<HTMLParagraphElement>(null)
    const { scrollYProgress } = useScroll({
        target: paragraph,
        offset: ['start 0.9', 'start 0.25']
    })
    const aboutRef = useRef<HTMLDivElement>(null)
    return (
        <Parallax offset={80}>
            <div ref={aboutRef} id='about' className=' px-5 py-10 mt-10 flex flex-col gap-y-10'>
                <span className='px-5 items-center text-sm w-fit flex gap-4 py-2 border-[1px] rounded-full text-white border-[#9999]'>
                    <i className='fas fa-user'></i>
                    <span>ABOUT ME</span>
                </span>
                <span>
                    <h1 className='text-[36px] md:text-[45px] font-semibold text-white'>
                        Every great project begins with a <span className='text-[#0053cc]'>clear vision</span>
                    </h1>
                </span>
                <span>
                    <span className='h-[100vh]'></span>
                    <motion.p style={{ opacity: scrollYProgress, }} ref={paragraph} className='w-full md:w-[80%] mb-8 leading-10 text-sm text-white'>
                        Since starting my journey as a freelance web developer nearly 8 years ago, I&#39;ve engaged in remote collaborations with agencies, consulted for startups, and teamed up with talented individuals to craft digital solutions for various business needs. I thrive on challenges, driven by curiosity, and constantly honing my skills to tackle each coding problem with precision and creativity.
                    </motion.p>
                    <span className='w-[100vh]'></span>
                    <p className='w-full md:w-[80%] mb-8 leading-10 text-sm'>
                        I believe great websites and apps are like art—blending functionality and beauty to leave users spellbound. So, wield your virtual sword and join me in pushing boundaries and creating digital wonders. Welcome to my portfolio, where possibilities are limitless. Let&#39;s make magic together! ✨
                    </p>
                </span>
            </div>
        </Parallax>
    )
}

export default About