import React, { useState } from 'react';
import { Image } from '@imagekit/react';
import CustomImage from './Image'; // Assuming CustomImage is in the same directory
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='w-full h-16 md:h-20 flex items-center justify-between'>
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
                <CustomImage
                    url="/logo.png"
                    width={32}
                    height={32}
                    alt="Logo Image"
                />
                <span>devhuy</span>
            </Link>
            {/* MOBILE MENU */}
            <div className="md:hidden">
                {/* MOBILE TOGGLE BUTTON */}
                <div className="text-4xl cursor-pointer" onClick={() => setOpen(!open)}>
                    {open ? "X" : "☰"}
                </div>
                {/* MOBILE LINK LIST */}
                <div className={`w-full h-screen flex flex-col items-center absolute top-16 transition-full duration-300 ease-in-out bg-color: #e6e6ff font-medium gap-4
                    ${open ? 'right-0' : 'right-[-100%]'}`}
                >
                    <Link to="/" className='p-4'>Home</Link>
                    <Link to="/trending" className='p-4'>Trending</Link>
                    <Link to="/most-popular" className='p-4'>Most Popular</Link>
                    <Link to="/about" className='p-4'>About</Link>
                    <SignedOut>
                        <Link to="/login" className='p-4'>
                            <button className='bg-blue-700 text-white py-2 px-4 rounded-3xl'>Login 👋</button>
                        </Link>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center justify-between gap-2 lg:gap-12 font-medium">
                <Link to="/" className='p-4'>Home</Link>
                <Link to="/trending" className='p-4'>Trending</Link>
                <Link to="/most-popular" className='p-4'>Most Popular</Link>
                <Link to="/about" className='p-4'>About</Link>
                <SignedOut>
                    <Link to="/login" className='p-4'>
                        <button className='bg-blue-700 text-white py-2 px-4 rounded-3xl'>Login 👋</button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>

        </div>
    )
}

export default Navbar