'use client';

import Link from 'next/link'
import React, { useState } from 'react'

type Props = {}

function Navbar({}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='text-white fixed mt-28 w-full flex justify-center'> {/* Added flex and justify-center */}
            <div className='rounded-2xl font-bold shadow-custom-spread bg-white backdrop-blur-md bg-opacity-10 px-6 lg:px-16 py-3 w-full lg:w-[900px]'> {/* Added w-full and lg:w-[900px] */}
                {/* Desktop Menu */}
                <div className='hidden lg:flex justify-between items-center gap-16'>
                    <Link href="#">Home</Link>
                    <Link href="#about">About</Link>
                    <Link href="#agenda">Agenda</Link>
                    <Link href="#speakers">Speakers</Link>
                    <Link href="#faq">FAQ</Link>
                    <Link href="#contact">Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className='lg:hidden flex justify-between items-center'>
                    <Link href="#" className='text-xl'>Home</Link>
                    <button
                        onClick={toggleMenu}
                        className='text-white focus:outline-none'
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Items */}
                {isOpen && (
                    <div className='lg:hidden pt-4 pb-2 space-y-3'>
                        <Link href="#about" className='block'>About</Link>
                        <Link href="#about" className='block'>Agenda</Link>
                        <Link href="#speakers" className='block'>Speakers</Link>
                        <Link href="#FAQ" className='block'>FAQ</Link>
                        <Link href="#contact" className='block'>Contact</Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar