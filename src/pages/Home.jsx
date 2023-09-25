import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEllipsisVertical,
  faEllipsis,
  faClockRotateLeft,
  faBuildingColumns,
  faFileInvoice,
  faMagnifyingGlass,
  faUser
} from "@fortawesome/free-solid-svg-icons"

const Home = () => {
  return (
    <div className='grid grid-cols-2 mx-28'>
      <div className="flex flex-col">
        <div className='bg-paypal-100 shadow-lg rounded-xl h-min mt-14'>
          <div className="flex flex-row justify-between items-center mx-6 my-7">
            <span className="text-xl text-paypal-800 font-extrabold hover:underline hover:cursor-pointer">New payments recived</span>
            <FontAwesomeIcon className="hover:cursor-pointer text-2xl" icon={faEllipsisVertical} style={{ color: "#4d4d4d", }} />
          </div>
          <div className="mx-6 mb-14 flex flex-col">
            <span className="text-5xl font-extrabold mb-3">
              $1,780,000.00
            </span>
            <span className="text-sm font-semibold text-gray-800">
              Automatic transfers to your bank start at 12 AM CT.
            </span>
          </div>
          <div className="mx-7 flex justify-start items-center mb-3">
            <FontAwesomeIcon className="text-2xl mr-6" icon={faClockRotateLeft} style={{ color: "#031435", }} />
            <span className="text-lg font-bold">You're all set up for automatic transfers.</span>
          </div>
          <p className="ml-20 mb-10 text-xl font-extrabold text-paypal-400">More Info</p>
        </div>

        <div className='bg-paypal-100 shadow-lg rounded-xl h-min mt-8 mb-10'>
          <div className="flex flex-row justify-between items-center mx-6 my-5">
            <span className="text-xl font-bold">Recent activity</span>
          </div>

          <div className="grid grid-cols-6 mx-6 mb-5 divide-y divide-dashed">
            <div className="col-span-1 mt-1">
              <div className="bg-gray-500 flex justify-center items-center shadow-lg rounded-full h-14 w-14">
                <FontAwesomeIcon className="text-2xl" icon={faUser} style={{ color: "#ffffff", }} />
              </div>
            </div>
            <div className="col-span-3 flex justify-between items-center">
              <div className="flex flex-col">
                <h1 className="text-lgxl font-bold">angelzd27</h1>
                <h3 className="text-sm">21 Sep</h3>
                <h3 className="text-sm">Send</h3>
              </div>
            </div>
            <div className="col-span-2 flex justify-end">
              <h1 className="text-xl font-extrabold">-2,000.00</h1>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-paypal-100 w-full ml-10 mb-10">
        {/* buttons */}
        <div className="flex flex-row justify-evenly items-center my-14">
          <button className="bg-[#ffd140] text-paypal-600 rounded-3xl p-2 w-56 h-14 text-xl font-extrabold">Send</button>
          <button className="bg-[#ffd140] text-paypal-600 rounded-3xl p-2 w-56 h-14 text-xl font-extrabold">Request</button>
        </div>
        {/* card,bank or invoice */}
        <div className="hover:cursor-pointer flex flex-row justify-around items-center mt-7">
          <div className="flex flex-col">
            <div className="bg-paypal-200 flex items-center justify-center mb-3 p-5 rounded-full">
              <FontAwesomeIcon className="text-3xl" icon={faBuildingColumns} style={{ color: "#003087", }} />
            </div>
            <span className="text-paypal-800 text-sm font-bold">Add Card <br />or Bank</span>
          </div>
          <div className="hover:cursor-pointer flex flex-col">
            <div className="bg-paypal-200 flex items-center justify-center mb-3 p-5 rounded-full">
              <FontAwesomeIcon className="text-3xl" icon={faFileInvoice} style={{ color: "#003087", }} />
            </div>
            <span className="text-paypal-800 text-sm font-bold">Create an <br />invoice</span>
          </div>
          <div className="hover:cursor-pointer flex flex-col">
            <div className="bg-paypal-200 flex items-center justify-center mb-3 p-5 rounded-full w-16">
              <FontAwesomeIcon className="text-3xl" icon={faEllipsisVertical} style={{ color: "#003087", }} />
            </div>
            <span className="text-paypal-800 text-sm font-bold"><br /><br /></span>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mx-10 mt-16">
          <h3 className=" font-extrabold text-xl">Send Again</h3>
          <FontAwesomeIcon className="hover:cursor-pointer text-2xl" icon={faEllipsisVertical} style={{ color: "#4d4d4d", }} />
        </div>
        <div className="flex flex-row mx-10 mt-7">
          <div className="flex flex-col items-center mr-5">
            <div className="bg-paypal-700 flex items-center justify-center mb-3 p-5 rounded-full h-16 w-16">
              <FontAwesomeIcon className="text-3xl" icon={faUser} style={{ color: "#ffffff", }} />
            </div>
            <h4 className="text-paypal-800 font-bold hover:underline hover:cursor-pointer">Angel</h4>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-paypal-700 flex items-center justify-center mb-3 p-5 rounded-full h-16 w-16">
              <FontAwesomeIcon className="text-3xl" icon={faMagnifyingGlass} style={{ color: "#ffffff", }} />
            </div>
            <h4 className="text-paypal-800 font-bold hover:underline hover:cursor-pointer">Search</h4>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mx-10 mt-16 mb-8">
          <h3 className=" font-extrabold text-xl">Bank and cards</h3>
          <FontAwesomeIcon className="hover:cursor-pointer text-2xl" icon={faEllipsisVertical} style={{ color: "#4d4d4d", }} />
        </div>
        <div className="flex flex-row mx-9">
          <div className="bg-gray-100 w-20 h-14 flex justify-center items-center">
            {/* <FontAwesomeIcon className="text-lg" icon={faBuildingColumns} style={{ color: "#4d4d4d", }} /> */}
            <img src="https://regalcreds.com/wp-content/uploads/2023/07/Picsart_23-09-11_01-29-59-493-1000x667.webp" alt="card" />
          </div>
          <div className="flex flex-col ml-5 mb-3">
            <h1 className="text-lg font-extrabold">AMERICAN EXPRESS</h1>
            <h3 className="flex items-center">Credit <FontAwesomeIcon className="text-2xl ml-2" icon={faEllipsis} />0010</h3>
          </div>
        </div>
        
        <div className="flex flex-row mx-9">
          <div className="bg-gray-100 w-20 h-14 flex justify-center items-center">
            {/* <FontAwesomeIcon className="text-lg" icon={faBuildingColumns} style={{ color: "#4d4d4d", }} /> */}
            <img src="https://i.pinimg.com/736x/d1/78/5b/d1785b93edf360589ab25411833df1fa--card-companies-black-card.jpg" alt="card" height="70" width="70"/>
          </div>
          <div className="flex flex-col ml-5 mb-3">
            <h1 className="text-lg font-extrabold">DUBAI FIRST</h1>
            <h3 className="flex items-center">Credit <FontAwesomeIcon className="text-2xl ml-2" icon={faEllipsis} />5600</h3>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home