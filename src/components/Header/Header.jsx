import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (

        <nav>


            <div onClick={() => setOpen(!open)} className='md:hidden'>
                {open === true ?
                    <XMarkIcon className='h-6 w-6 text-purple-500' />
                    :
                    <Bars3Icon className='h-6 w-6 text-purple-500' />
                }

            </div>

            <div className={`md:flex md:static absolute md:justify-center text-left ${open ? 'top-6' : '-top-48'}`}>

                <div className='md:flex grid md:gap-10 md:bg-black md:text-white md:items-center font-bold md:w-full md:justify-center'>


                    <Link className='hover:bg-green-400 md:p-2 rounded duration-700' to='/'><img className='md:w-12 md:static  w-10' src="https://cdn.freebiesupply.com/images/large/2x/apple-logo-white.png" alt="" /></Link>


                    <Link className='hover:bg-green-400 md:p-2 rounded duration-700' to='/'>Home</Link>

                    <Link className='hover:bg-green-400 md:p-2 rounded duration-700' to='/teachers'>Teacher</Link>

                    <Link className='hover:bg-green-400 md:p-2 rounded duration-700' to='/exam'>Students</Link>

                    <Link className='hover:bg-green-400 md:p-2 rounded duration-700' to='/selected'>Selected Student</Link>

                    <Link className='hover:bg-green-400 md:p-2 rounded duration-700' to='/about'>About</Link>

                </div>

            </div>
        </nav>

    );
};

export default Header;