"use client"

import {  Bell, ChevronDown,  } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathName = usePathname()
    return (
        <nav className="mb-3 px-3 md:px-5">
            <ul className="grid grid-cols-2  sm:flex bg-green-950 gap-1 md:gap-2 py-3 px-3 md:px-1 items-center text-slate-300 text-sm justify-around cursor-pointer">
                <li>
                    <Link href={"/"}>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link className={`${pathName === "/users" && "text-yellow-200 transition-all duration-500" }`} href={"/users"}>
                        User Management
                    </Link>
                </li>
                <li>
                    <Link href={""}>
                        Bookings
                    </Link>
                </li>
                <li>
                    <Link href={""}>
                        Reports and Analytics
                    </Link>
                </li>
                <li>
                    <Link href={""}>
                        Payments and Payouts
                    </Link>
                </li>
                <li>
                    <Link href={""}>
                        Membership Plans
                    </Link>
                </li>
                <li>
                    <Link href={""}>
                        Services
                    </Link>
                </li>
                <li className="flex md:gap-2 items-center md:p-2 md:justify-between">
                    <a>
                        System Management
                    </a>
                    <span >
                        <ChevronDown size={20} className="text-white" />
                    </span>
                </li>
                <li className="flex gap-1 md:gap-4 md:justify-between items-center p-2">
                    <Bell size={20} className="w-4 md:w-8"/>
                    <img src="/meeenow.jpg" alt="user" className=" w-5 h-5 md:w-8 md:h-8 rounded-full aspect-square object-cover"/>
                </li>
            </ul>
        </nav>
    )
}