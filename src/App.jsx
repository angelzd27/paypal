import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SendRequest from "./pages/SendRequest"
import Wallet from "./pages/Wallet"
import Activity from "./pages/Activity"
import Help from "./pages/Help"

function App() {
  return (
    <>
      <div className="bg-paypal-200">
        <div className="fixed w-full pb-16">
          <Navbar />
        </div>
        <div className="pt-24">
          <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/send-and-request' element={<SendRequest />} />
            <Route path='/wallet' element={<Wallet />} />
            <Route path='/activity' element={<Activity />} />
            <Route path='/help' element={<Help />} />
          </Routes>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
