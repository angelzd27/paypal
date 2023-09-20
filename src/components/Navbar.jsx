import React, { useState } from 'react';
import { bell, setting } from '../assets'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    const [navLinks] = useState([
        { to: '/home', label: 'Home' },
        { to: '/send-and-request', label: 'Send and Request' },
        { to: '/wallet', label: 'Wallet' },
        { to: '/activity', label: 'Activity' },
        { to: '/help', label: 'Help' },
    ]);

    return (
        <div className='bg-paypal-600'>
            <div className='flex flex-row justify-between mx-20 py-6'>
                <div className='flex flex-row justify-center items-center'>
                    <Link to='/'>
                        <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-monotone-transparent.svg" alt="paypal logo" height="33" width="33" className='mr-8' />
                    </Link>
                    {navLinks.map((link) => (
                        <Link key={link.to} to={link.to} className={`rounded-3xl p-4 text-paypal-200 font-semibold ${location.pathname === link.to ? 'bg-paypal-500' : 'hover:text-paypal-300'}`}>
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className='flex flex-row justify-evenly items-center'>
                    <img src={bell} alt="notifications" className="w-6 h-5 mr-5" />
                    <img src={setting} alt="notifications" className="w-6 h-5 mr-5" />
                    <span className='text-paypal-300 font-semibold'>LOG OUT</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;