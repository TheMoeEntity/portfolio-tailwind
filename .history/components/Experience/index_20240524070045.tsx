'use client'
import { useScrollReveal, useSetIntersections } from '@/Helpers/hooks'
import React, { useEffect, useRef } from 'react'

const Experience = () => {

    const { elementsRef } = useScrollReveal(true)
    const { introRef } = useSetIntersections('experience')
    return (
        <div ref={introRef} id='experience' className=' px-5 py-10 mt-10 flex flex-col gap-y-10'>
            <div ref={(el) => { if (el) elementsRef.current.push(el); }} className='translateUp'>
                <span className='px-5 items-center text-sm w-fit flex gap-4 py-2 border-[1px] rounded-full text-white border-[#9999]'>
                    <i className='fas fa-file-alt'></i>
                    <span>RESUME</span>
                </span>
            </div>
            <div ref={(el) => { if (el) elementsRef.current.push(el); }} className='translateUp mt-10'>
                <span>
                    <h1 className='text-[36px] md:text-[45px] font-semibold text-white'>
                        My <span className='text-[#0053cc]'>Experience</span>
                    </h1>
                </span>
            </div>
            <div>
                <div className='flex flex-row gap-x-12'>
                    <div className='flex flex-col'>
                        <div className='flex flex-col justify-center items-center'>
                            <div className="w-3 h-3 rounded-full bg-[#656565] mt-1"></div>
                            <div className="bg-[#656565] h-[280px] w-[0.5px]"></div>
                        </div>
                        <div></div>
                    </div>
                    <div ref={(el) => { if (el) elementsRef.current.push(el); }} className='reveal'>
                        <div className='text-xl group-hover:text-[#0053cc] transition-colors duration-300'>2017-2022</div>
                        <div className='flex flex-col gap-y-4 mt-5'>
                            <h2 className='font-semibold text-2xl md:text-3xl text-white'>Junior Web Developer</h2>
                            <h3>ZZDIGITAL</h3>
                        </div>
                        <div className='flex flex-col gap-y-4 mt-5'>
                            <h2 className='font-semibold text-2xl md:text-3xl text-white'>Junior IOS Mobile Developer</h2>
                            <h3>ZZDIGITAL</h3>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-x-12'>
                    <div className='flex flex-col'>
                        <div className='flex flex-col justify-center items-center'>
                            <div className="w-3 h-3 rounded-full bg-[#656565] mt-1"></div>
                            <div className="bg-[#656565] h-[160px] w-[0.5px]"></div>
                        </div>
                        <div></div>
                    </div>
                    <div ref={(el) => { if (el) elementsRef.current.push(el); }} className='reveal'>
                        <div className='text-xl'>2022-present</div>
                        <div className='flex flex-col gap-y-4 mt-5'>
                            <h2 className='font-semiboold text-2xl md:text-3xl text-white'>Freelance</h2>

                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-x-12'>
                    <div className='flex flex-col'>
                        <div className='flex flex-col justify-center items-center'>
                            <div className="w-3 h-3 rounded-full bg-[#656565] mt-1"></div>
                            <div className="bg-[#656565] h-[190px] w-[0.5px]"></div>
                        </div>
                        <div></div>
                    </div>
                    <div ref={(el) => { if (el) elementsRef.current.push(el); }} className='translateUp'>
                        <div className='text-xl'>2023-2024</div>
                        <div className='flex flex-col gap-y-4 mt-5'>
                            <h2 className='font-semiboold text-2xl md:text-3xl text-white'>Lead Frontend Developer</h2>
                            <h3>PEPNOPS INC.</h3>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-x-12 mt-0'>
                    <div className='flex flex-col'>
                        <div className='flex flex-col justify-center items-center'>
                            <div className="w-3 h-3 rounded-full bg-[#656565] mt-1"></div>
                            <div className="bg-[#656565] h-[100px] w-[0.5px]"></div>
                        </div>
                        <div></div>
                    </div>
                    <div ref={(el) => { if (el) elementsRef.current.push(el); }} className='translateUp'>
                        <div className='text-xl'>2024-present</div>
                        <div className='flex flex-col gap-y-4 mt-5'>
                            <h2 className='font-semiboold text-2xl md:text-3xl text-white'>Web Developer</h2>
                            <h3>DITCOSOFT TECHNOLOGIES.</h3>
                        </div>
                    </div>
                </div>
            </div>
            <button className='px-5 items-center text-sm w-fit flex gap-4 py-2 border-[1px] rounded-full text-white border-[#9999]'>
                <i className='fas fa-file-alt'></i>
                <a href='/files/Resume-may2024.pdf' target='_blank'>View Resume</a>
            </button>
        </div>
    )
}

export default Experience