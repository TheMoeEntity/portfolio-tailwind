import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className=' px-5 py-10 mt-10 flex flex-col gap-y-10'>
            <span className='px-5 items-center text-sm w-fit flex gap-4 py-2 border-[1px] rounded-full text-white border-[#9999]'>
                <i className='fas fa-envelope'></i>
                <span>CONTACT</span>
            </span>
            <span>
                <h1 className='text-[45px] font-semibold text-white'>
                    Let&#39;s Work <span className='text-[#0053cc]'>Together</span>
                </h1>
            </span>
            <span className='text-2xl text-white'>mosesnwigberi@gmail.com</span>
            <div>
                <form action="" className='w-full flex flex-col gap-7 pb-10'>
                    <div className='flex flex-col gap-8 md:flex-row justify-between'>
                        <div className='md:w-[48%] flex flex-col gap-1'>
                            <label htmlFor="" className='text-xl text-white'>Full name <span className='text-red-700'>*</span></label>
                            <input type="text" className=' py-2 bg-transparent' placeholder='Enter your full name' required />
                        </div>
                        <div className='md:w-[48%] flex flex-col gap-1'>
                            <label htmlFor="" className='text-xl text-white'>Email <span className='text-red-700'>*</span></label>
                            <input type="text" className=' py-2 bg-transparent' placeholder='Enter your email address' required />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 justify-between">
                        <div className='md:w-[48%] flex flex-col gap-1'>
                            <label htmlFor="" className='text-xl text-white'>Phone</label>
                            <input type="number" className=' py-2 bg-transparent' placeholder='Enter your phone number' required />
                        </div>
                        <div className='md:w-[48%] flex flex-col gap-1'>
                            <label htmlFor="" className='text-xl text-white'>Subject <span className='text-red-700'>*</span></label>
                            <select
                                // onChange={e => { setSelectedProduct((e.target as HTMLSelectElement).value) }}
                                className=" bg-transparent outline-none"
                                style={{ width: "80%", padding: '10px 0px', color: 'gray' }}
                            >
                                <option>Web Development</option>
                                <option>Mobile Development</option>
                                <option>Collaboration</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                    <div className='md:w-[48%] flex flex-col gap-1'>
                        <label htmlFor="" className='text-xl text-white'>Message <span className='text-red-700'>*</span></label>
                        <textarea
                            className='bg-transparent py-4 px-2 border-none outline-none'
                            placeholder="Talk to me!"
                            name=""
                            id=""
                            cols={30}

                        ></textarea>
                    </div>
                    <div className='mt-5'>
                        <button className='rounded-full bg-[#0053cc] text-white px-12 py-4'>SEND MESSAGE</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact