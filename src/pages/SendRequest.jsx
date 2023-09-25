import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faUser, faFileInvoice, faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons"

const SendRequest = () => {
  const [navLinks] = useState([
    { to: '/home', label: 'Send' },
    { to: '/send-and-request', label: 'Request' },
    { to: '/wallet', label: 'Contacts' },
    { to: '/activity', label: 'More' }
  ]);

  return (
    <div className='bg-paypal-200 relative z-0'>
      <div className='shadow-md mb-10'>
        <div className='flex flex-row justify-between ml-48 py-6 '>
          <div className='flex flex-row justify-center items-center text-xl'>
            {navLinks.map((link) => (
              <Link key={link.to} className={`rounded-3xl p-4 text-black font-semibold mr-6 cursor-pointer hover:border-solid border-2 border-white hover:border-paypal-500 ${link.label === "Send" ? 'shadow-[0px_0px_7px_2px_rgba(0,0,0,0.1)] text-paypal-700 font-extrabold' : ''}`}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className='flex flex-row mx-44'>
        <div className='flex flex-col'>
          <h1 className='text-3xl font-bold text-paypal-800'>Send payment to</h1>
          <div className="relative text-xl mt-10">
            <input
              type="text"
              className="pl-16 pr-4 py-5 w-[680px] border-solid border border-black hover:border-paypal-400 rounded-full"
              placeholder="TikTok Username, Name, Email or Mobile"
            />
            <div className="absolute inset-y-0 left-0 pl-7 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#000000", }} />
            </div>
          </div>
          <button className='bg-paypal-700 text-white text-xl font-extrabold w-min p-3 px-8 rounded-3xl mt-8 mb-10'>
            Next
          </button>
          <div className="flex flex-col items-start mr-5 mb-10">
            <div className="bg-paypal-700 flex items-center justify-center mb-3 p-5 rounded-full h-16 w-16">
              <FontAwesomeIcon className="text-3xl" icon={faUser} style={{ color: "#ffffff", }} />
            </div>
            <h4 className="text-paypal-800 font-bold hover:underline hover:cursor-pointer">Angel</h4>
          </div>
        </div>
        <div className='flex flex-col ml-20 gap-8'>
          <h1 className='text-3xl font-extrabold'>More ways to send</h1>
          <div className='flex flex-row justify-center items-start hover:cursor-pointer'>
            <FontAwesomeIcon className="text-3xl" icon={faFileInvoice} style={{ color: "#003087", }} />
            <div className='flex flex-col ml-8'>
              <h2 className='text-xl font-extrabold'>Send an invoice</h2>
              <h3 className='text-sm'>Customize, track, and send invoices.</h3>
            </div>
          </div>
          <div className='flex flex-row justify-center items-start hover:cursor-pointer'>
            <FontAwesomeIcon className="text-3xl" icon={faHeartCircleCheck} style={{ color: "#003087", }} />
            <div className='flex flex-col ml-6'>
              <h2 className='text-xl font-extrabold'>Send and receive donations</h2>
              <h3 className='text-sm'>Find support and help others now.</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SendRequest