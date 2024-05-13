import React from 'react'

const Services = () => {
    return (
        <div id='services' className=' px-5 py-10 mt-10 flex flex-col gap-y-10'>
            <span className='px-5 text-sm w-fit flex gap-4 py-2 border-[1px] rounded-full text-white border-[#9999]'>
                <i className='fas fa-cogs'></i>
                <span>SERVICES</span>
            </span>
            <span>
                <h1 className='text-[45px] font-semibold text-white'>
                    My <span className='text-[#0053cc]'>Specializations</span>
                </h1>
            </span>

            <div className='flex flex-col gap-y-4'>
                <div className="w-full p-10 rounded-2xl border-[#565656] border-[1px]">
                    <div className="flex justify-between items-center">
                        <span className='text-white text-2xl'>WEBSITE DESIGN & DEVELOPMENT</span>
                        <span className='fas fa-code text-2xl'></span>
                    </div>
                    <p className='text-sm w-[80%] py-5'>
                        I architect and develop digital solutions with innovative concepts, leveraging tools like Nextjs & TypeScript.
                    </p>
                </div>
            </div>

            <div className='flex flex-col gap-y-4'>
                <div className="w-full p-10 rounded-2xl border-[#565656] border-[1px]">
                    <div className="flex justify-between items-center">
                        <span className='text-white text-2xl'>MOBILE DEVELOPMENT</span>
                        <span className='fas fa-mobile-phone text-2xl'></span>
                    </div>
                    <p className='text-sm w-[80%] py-5'>
                        I engineer mobile applications with cutting-edge features using React Native & Swift.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Services