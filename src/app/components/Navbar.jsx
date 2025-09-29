import {  Bell, ChevronDown,  } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="mb-3 px-5">
            <ul className="flex bg-green-950 gap-2 py-3 px-1 items-center text-slate-300 text-sm justify-around cursor-pointer">
                <li>
                    <a>
                        Dashboard
                    </a>
                </li>
                <li>
                    <a className="active:text-yellow-300">
                        User Management
                    </a>
                </li>
                <li>
                    <a>
                        Bookings
                    </a>
                </li>
                <li>
                    <a>
                        Reports and Analytics
                    </a>
                </li>
                <li>
                    <a>
                        Payments and Payouts
                    </a>
                </li>
                <li>
                    <a>
                        Membership Plans
                    </a>
                </li>
                <li>
                    <a>
                        Services
                    </a>
                </li>
                <li className="flex gap-2 items-center p-2 justify-between">
                    <a>
                        System Management
                    </a>
                    <span >
                        <ChevronDown size={20} className="text-white" />
                    </span>
                </li>
                <li className="flex gap-5 justify-between items-center p-2">
                    <Bell size={20}/>
                    <img src="/meeenow.jpg" alt="user" className="w-8 h-8 rounded-full aspect-square object-cover"/>
                </li>
            </ul>
        </nav>
    )
}