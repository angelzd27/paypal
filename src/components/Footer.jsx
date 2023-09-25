import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-paypal-100 pt-10 pb-20 rounded-xl font-bold shadow-[2px_-2px_1px_1px_rgba(0,0,0,0.07)]'>
            <div className='flex flex-col justify-around mx-32'>
                <div className='flex flex-row justify-start items-center text-lg'>
                    <img src="https://cdn.freebiesupply.com/logos/large/2x/paypal-logo-png-transparent.png" alt="footer-logo" height="140" width="140" />
                    <Link to="Help" className='hover:underline mx-8'>Help</Link>
                    <Link to="Help" className='hover:underline mr-8'>Contact Us</Link>
                    <Link to="Help" className='hover:underline'>Security</Link>
                </div>
                <div className='flex flex-row text-sm mt-14'>
                    <p className='text-gray-400'>©1999-2023 PayPal, Inc. All rights reserved.</p>
                    <p className='mx-8'>Privacy</p>
                    <p className='mr-8'>Cookies</p>
                    <p className='mr-8'>Legal</p>
                </div>
            </div>
        </div>
    )
}

export default Footer