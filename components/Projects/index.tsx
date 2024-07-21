'use client'
import Image from 'next/image'
import React from 'react'
import zstinger from '../../public/images/zstinger.png'
import dove from '../../public/images/dovehospital.png'
import nosrati from '../../public/images/nosrati.png'
import farzad from '../../public/images/farzad2.png'
import pepnops from '../../public/images/PEPNOPS1.png'
import { useSetIntersections } from '@/Helpers/hooks'

const Projects = () => {
    const { introRef } = useSetIntersections('portfolio')
    return (
        <div ref={introRef} id='portfolio' className=' px-5 py-10 mt-10 flex flex-col gap-y-10'>
            <span className='px-5 items-center text-sm w-fit flex gap-4 py-2 border-[1px] rounded-full text-white border-[#9999]'>
                <i className='fas fa-brief-case'></i>
                <span>PORTFOLIO</span>
            </span>
            <span>
                <h1 className='text-[36px] md:text-[45px] font-semibold text-white'>
                    Featured <span className='text-[#0053cc]'>Projects</span>
                </h1>
            </span>
            <div className="mt-5 flex flex-col gap-20 md:px-3">
                <div className='flex flex-col gap-y-7'>
                    <div className="w-full relative">
                        <div className="absolute top-0 left-0 w-full h-full bg-[#1f1f1f8f] z-10"></div>
                        <Image
                            src={pepnops}
                            alt="Project Image for PEPNOPS inc"
                            quality={100}
                            sizes={'100vw'}
                            className="object-cover w-full h-auto rounded-xl xl:rounded-3xl"
                        />
                    </div>
                    <h2 className='text-2xl text-white hover:underline underline-offset-4'>PEPNOPS Inc </h2>
                </div>
                <div className='flex flex-col gap-y-7'>
                    <div className="w-full relative">
                        <div className="absolute top-0 left-0 w-full h-full bg-[#1f1f1f8f] z-10"></div>
                        <Image
                            src={farzad}
                            alt="Spinning text"
                            quality={100}
                            sizes={'100vw'}
                            className="object-cover w-full h-auto rounded-xl xl:rounded-3xl"
                        />
                    </div>
                    <h2 className='text-2xl text-white hover:underline underline-offset-4'>{"Farzad's Blog"}</h2>
                </div>
                <div className='flex flex-col gap-y-7'>
                    <div className="w-full relative">
                        <div className="absolute top-0 left-0 w-full h-full bg-[#1f1f1f8f] z-10"></div>
                        <Image
                            src={zstinger}
                            alt="Spinning text"
                            quality={100}
                            sizes={'100vw'}
                            className="object-cover w-full h-auto rounded-xl xl:rounded-3xl"
                        />
                    </div>
                    <div className='flex justify-between'>
                        <h2 className='text-2xl text-white hover:underline underline-offset-4'>ZStinger Inspections- Patent pending</h2>
                    </div>
                </div>
                <div className='flex flex-col gap-y-7'>
                    <div className="w-full relative">
                        <div className="absolute top-0 left-0 w-full h-full bg-[#1f1f1f8f] z-10"></div>
                        <Image
                            src={dove}
                            alt="Spinning text"
                            quality={100}
                            sizes={'100vw'}
                            className="object-cover w-full h-auto rounded-xl xl:rounded-3xl"
                        />
                    </div>
                    <h2 className='text-2xl text-white hover:underline underline-offset-4'>Dove Hospital</h2>
                </div>
                <div className='flex flex-col gap-y-7'>
                    <div className="w-full relative">
                        <div className="absolute top-0 left-0 w-full h-full bg-[#1f1f1f8f] z-10"></div>
                        <Image
                            src={nosrati}
                            alt="Spinning text"
                            quality={100}
                            sizes={'100vw'}
                            className="object-cover w-full h-auto rounded-xl xl:rounded-3xl"
                        />
                    </div>
                    <a href="" className=' w-fit'><h2 className='text-2xl text-white hover:underline underline-offset-4'>Nosrati Law </h2></a>
                </div>
            </div>
        </div>
    )
}

export default Projects