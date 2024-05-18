'use client'
import React, { FormEvent, useState } from 'react'
import emailjs from 'emailjs-com'
import Spinner from '../Spinner'
import toast from 'react-hot-toast';
import { Helpers } from '@/Helpers';

const Contact = () => {
    const [subject, setSubject] = useState('--Choose--')
    const [loading, setLoading] = useState(false)
    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const target = e.target as HTMLFormElement
        const data = {
            fullName: (target[0] as HTMLInputElement).value,
            email: (target[1] as HTMLInputElement).value,
            phone: (target[2] as HTMLInputElement).value,
            subject,
            message: (target[4] as HTMLTextAreaElement).value
        }
        if (data.fullName.trim() == '') {
            toast.error("Your full name is required")
            return
        } else if (!Helpers.validateEmail(data.email)) {
            toast.error("Your email is invalid")
        } else if (data.email.trim() == '') {
            toast.error("Your email is required")
            return
        } else if (data.subject == '--Choose--') {
            toast.error("Please choose a subject")
            return
        } else if (data.message.trim() == '') {
            toast.error("Your message to me cannot be empty. Talk to me!")
            return
        }
        setLoading(true)
        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            {
                full_name: data.fullName,
                email: data.email,
                message: data.message,
                phone: data.phone,
                subject: data.subject
            },
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
        ).then(() => {
            toast.success("Your message has been sent successfully. I would get back to you as soon as possible")
        }).catch(() => {
            toast.error("Something went wrong sending your message. Please try again.")
        }).finally(() => {
            setLoading(false)
            target.reset()
        })
    }
    return (
        <div id='contact' className=' px-5 py-10 mt-10 flex flex-col gap-y-10'>
            {
                loading && (<Spinner />)
            }
            <span className='px-5 items-center text-sm w-fit flex gap-4 py-2 border-[1px] rounded-full text-white border-[#9999]'>
                <i className='fas fa-envelope'></i>
                <span>CONTACT</span>
            </span>
            <span>
                <h1 className='text-[36px] md:text-[45px] font-semibold text-white'>
                    Let&#39;s Work <span className='text-[#0053cc]'>Together</span>
                </h1>
            </span>
            <span className='text-2xl text-white'>moses.nwigberi@ditcosoft.com</span>
            <div>
                <form onSubmit={e => submitForm(e)} className='w-full flex flex-col gap-7 pb-10'>
                    <div className='flex flex-col gap-8 md:flex-row justify-between'>
                        <div className='md:w-[48%] flex flex-col gap-1'>
                            <label htmlFor="" className='text-xl text-white'>Full name <span className='text-red-700'>*</span></label>
                            <input type="text" className=' py-2 bg-transparent outline-none' placeholder='Enter your full name' />
                        </div>
                        <div className='md:w-[48%] flex flex-col gap-1'>
                            <label htmlFor="" className='text-xl text-white'>Email <span className='text-red-700'>*</span></label>
                            <input type="text" className=' py-2 bg-transparent outline-none' placeholder='Enter your email address' />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 justify-between">
                        <div className='md:w-[48%] flex flex-col gap-1'>
                            <label htmlFor="" className='text-xl text-white'>Phone</label>
                            <input type="number" className=' py-2 bg-transparent outline-none' placeholder='Enter your phone number' />
                        </div>
                        <div className='md:w-[48%] flex flex-col gap-1'>
                            <label htmlFor="" className='text-xl text-white'>Subject <span className='text-red-700'>*</span></label>
                            <select
                                onChange={e => { setSubject((e.target as HTMLSelectElement).value) }}
                                className=" bg-transparent outline-none"
                                style={{ width: "80%", padding: '10px 0px', color: 'gray' }}
                            >
                                <option>--Choose--</option>
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
                    {
                        loading && (
                            <div className={"items-center justify-center " + (true ? 'flex' : 'hidden')}>
                                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                            </div>
                        )
                    }
                </form>
            </div>
        </div>
    )
}

export default Contact