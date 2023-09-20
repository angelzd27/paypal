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
        <Navbar />

          <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/send-and-request' element={<SendRequest />} />
            <Route path='/wallet' element={<Wallet />} />
            <Route path='/activity' element={<Activity />} />
            <Route path='/help' element={<Help />} />
          </Routes>

        <Footer />
      </div>
    </>
  )
}

export default App
