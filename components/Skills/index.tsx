import React from 'react'

const Skills = () => {
    return (
        <div id='skills' className=' px-5 py-10 mt-10 flex flex-col gap-y-10'>
            <span className='px-5 text-sm w-fit flex gap-4 py-2 border-[1px] rounded-full text-white border-[#9999]'>
                <i className='fas fa-tools'></i>
                <span>MY SKILLS</span>
            </span>
            <span>
                <h1 className='text-[36px] md:text-[45px] font-semibold text-white'>
                    My <span className='text-[#0053cc]'>Advantages</span>
                </h1>
            </span>

            <div className="flex text-white flex-row gap-6 gap-y-10 md:gap-5 flex-wrap justify-center md:justify-start w-full">

                <div className="w-[155px] md:w-40  gap-y-7 flex flex-col items-center justify-center p-10 h-60 border-[#565656] border-[1px] rounded-full">
                    <i className='fa-brands fa-html5 text-3xl text-[60px]'></i>
                    <span className='text-sm'>HTML</span>
                </div>
                <div className="w-[155px] md:w-40 gap-y-7 flex flex-col items-center justify-center p-10 h-60 border-[#565656] border-[1px] rounded-full">
                    <i className='fa-brands fa-css3 text-3xl text-[60px]'></i>
                    <span className='text-sm'>CSS</span>
                </div>
                <div className="w-[155px] md:w-40  gap-y-7 flex flex-col items-center justify-center p-10 h-60 border-[#565656] border-[1px] rounded-full">
                    <i className='fa-brands fa-js text-3xl text-[60px]'></i>
                    <span className='text-sm'>JavaScript</span>
                </div>
                <div className="w-[155px] md:w-40  gap-y-7 flex flex-col items-center justify-center p-10 h-60 border-[#565656] border-[1px] rounded-full">
                    <i className='fa-brands fa-react text-3xl text-[60px]'></i>
                    <span className='text-center'>
                        React <br />
                        {/* <span>(NextJS)</span> */}
                    </span>

                </div>
                <div className="w-[155px] md:w-40  gap-y-7 flex flex-col items-center justify-center p-10 h-60 border-[#565656] border-[1px] rounded-full">
                    <i className='fa-brands fa-swift text-3xl text-[60px]'></i>
                    <span>Swift</span>
                </div>
                <div className="w-[155px] md:w-40  gap-y-7 flex flex-col items-center justify-center p-10 h-60 border-[#565656] border-[1px] rounded-full">
                    <i className='fa-brands fa-php text-3xl text-[60px]'></i>
                    <span>PHP</span>
                </div>
                <div className="w-[155px] md:w-40  gap-y-7 flex flex-col items-center justify-center p-10 h-60 border-[#565656] border-[1px] rounded-full">
                    <i className='fa-brands fa-node-js text-3xl text-[60px]'></i>
                    <span>Nodejs</span>
                </div>

            </div>

        </div>
    )
}

export default Skills