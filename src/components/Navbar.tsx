"use client"


import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Navbar() {

    const [currentDateTime, setCurrentDateTime] = useState('');
    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date()
                ; const options: Intl.DateTimeFormatOptions = {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: false
                }
            setCurrentDateTime(now.toLocaleDateString('en-US', options) +
                '' +
                now.toLocaleTimeString('en-US', { hour12: false })
            );
        }



        updateDateTime();
        const interValId = setInterval(updateDateTime, 1000);
        return () => clearInterval(interValId)

    }, [])





    return (
        <header className=' text-white body-font shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 ' >
            <div className='container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center'>

                <div className='flex-1 text-white'>
                    <span>{currentDateTime}</span>

                </div>
                <nav className=' md:ml-auto flex flex-wrap items-center text-white justify-center'>
                    <Link href={"https://localhost:3000/"} className='mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105 '>
                        {""}
                        Home{""}
                    </Link>

                </nav>




                <nav className='md:ml-auto flex flex-wrap items-center text-white justify-center'>
                    <Link href={"https://localhost:3000/"} className='mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105 '>
                        {""}
                        About{""}
                    </Link>

                </nav>




                <nav className='md:ml-auto flex flex-wrap items-center text-white justify-center'>
                    <Link href={"https://localhost:3000/"} className='mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105 '>
                        {""}
                        Contact{""}
                    </Link>

                </nav>
                 <Link href={'https:www.instagram.com/codecraftali'}>
                <button className='inline-flex items-center bg-blue-700 border-0 py-1 px-3 focus:outline-none hover:bg-pink-700 rounded text-white mt-4 md:mt-0 transition-colors duration-300'>

                    Instagram

                    <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        className='w-4 h-4 ml-1'
                        viewBox='0 0 24 24'>

                        <path d='MS 12h14M12 5l7 7-7 7' />
                    </svg>

                </button>
                </Link>


            </div>
        </header>
    )


}

