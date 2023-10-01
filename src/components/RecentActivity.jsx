import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

export const RecentActivityCard = ({ name, date, amount }) => {
    var nf = new Intl.NumberFormat();
    return (
        <div className="grid grid-cols-6 mx-6 mb-5 divide-y divide-dashed">
            <div className="col-span-1 mt-1">
                <div className="bg-gray-500 flex justify-center items-center shadow-lg rounded-full h-14 w-14">
                    <FontAwesomeIcon className="text-2xl" icon={faUser} style={{ color: "#ffffff", }} />
                </div>
            </div>
            <div className="col-span-3 flex justify-between items-center">
                <div className="flex flex-col">
                    <h1 className="text-lgxl font-bold">{name}</h1>
                    <h3 className="text-sm">{date}</h3>
                    <h3 className="text-sm">Send</h3>
                </div>
            </div>
            <div className="col-span-2 flex justify-end">
                <h1 className="text-xl font-extrabold">- {nf.format(amount)}</h1>
            </div>
        </div>
    )
}

export const RecentActivityIcon = ({ name }) => {
    return (
        <div className="flex flex-col items-center mr-5">
            <div className="bg-paypal-700 flex items-center justify-center mb-3 p-5 rounded-full h-16 w-16">
                <FontAwesomeIcon className="text-3xl" icon={faUser} style={{ color: "#ffffff", }} />
            </div>
            <h4 className="text-paypal-800 font-bold hover:underline hover:cursor-pointer">{name}</h4>
        </div>
    )
}