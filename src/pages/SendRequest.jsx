import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faUser, faFileInvoice, faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { success } from "../assets"

const SendRequest = () => {
  const [select, setSelect] = useState(1)
  const [amount, setAmount] = useState("0.00")
  const [username, setUsername] = useState("angel")
  let component

  switch (select) {
    case 1:
      component = <SearchComponent setSelect={setSelect} />
      break
    case 2:
      component = <AmountComponent setSelect={setSelect} amount={amount} setAmount={setAmount} username={username} />
      break
    case 3:
      component = <CheckComponent setSelect={setSelect} amount={amount} username={username} />
      break
    default:
      break
  }

  return (
    <>
      {component}
    </>

  )
}

const SearchComponent = ({ setSelect }) => {
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
          <button className='bg-paypal-700 text-white text-xl font-extrabold w-min p-3 px-8 rounded-3xl mt-8 mb-10' onClick={() => {
            scrollToTop()
            setSelect(2)
          }}>
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

const AmountComponent = ({ setSelect, amount, setAmount, username }) => {
  

  return (
    <div className='flex flex-col justify-center items-center my-14'>
      <div className='flex flex-col justify-start items-center border border-gray-300 rounded-xl w-[43%] h-min'>
        <div className='flex flex-row items-center mt-16'>
          <FontAwesomeIcon className="text-6xl" icon={faUser} style={{ color: "#003087", }} />
          <div className='flex flex-col ml-10'>
            <h1 className='text-3xl font-extrabold'>{username}</h1>
            <h3 className='text-lg font-bold'>TikTok username: @{username}</h3>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center mt-10'>
          <h1 className='text-4xl font-extrabold'>$ {amount}</h1>
          <button className='bg-gray-200 rounded-full font-extrabold mt-5 w-min py-1 px-3'>USD</button>
        </div>
        <input className='my-5 w-[90%] h-24 font-bold text-gray-500 bg-transparent' type="text" placeholder="What's this for?" />
      </div>
      <div className='flex flex-row my-10'>
        <h3 className='font-semibold mr-1'>For more information please read our</h3>
        <h3 className='text-paypal-400 font-semibold hover:underline'>user agreement.</h3>
      </div>
      <button className='bg-paypal-700 text-white text-xl font-extrabold rounded-3xl w-96 h-12' onClick={() => {
        scrollToTop()
        setSelect(3)
      }}>Next</button>
      <button className='text-paypal-400 hover:text-paypal-500 hover:underline text-xl font-extrabold mt-5' onClick={() => {
        setSelect(1)
      }}>Cancel</button>
    </div>
  )
}

const CheckComponent = ({ setSelect, amount, username }) => {
  return (
    <div className='flex flex-col justify-center items-center my-8'>
      <div className='flex flex-col justify-start items-center shadow-sm bg-paypal-100 rounded-xl w-[43%] h-min'>
        <video className='mt-5 w-60 h-60' autoPlay muted>
          <source src={success} type='video/mp4' />
        </video>
        <h3 className='font-bold text-gray-500 mb-12 mt-5'>You've sent {amount} USD to {username}</h3>
        <button className='bg-paypal-700 text-white text-lg font-extrabold rounded-3xl w-96 h-12' onClick={() => {
        scrollToTop()
        setSelect(1)
      }}>Send More Money</button>
      <button className='text-paypal-400 hover:text-paypal-500 hover:underline text-lg font-extrabold mt-5 mb-10' onClick={() => {
        setSelect(1)
      }}>Go to summary</button>
      </div>
    </div>
  )
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "instant"
  });
};

export default SendRequest