"use client"

import { EllipsisVertical } from "lucide-react";
import ProfileModal from "./ProfileModal";

export default function MainData({ date, name, email, status, number, userId, userType, modalOpen,onToggleModal }) {

    return (
        <div className="grid grid-cols-4 md:grid-cols-7 gap-5 w-full text-teal-800 font-bold text-sm mt-4 md:mt-0">
            <p >
                {date}
            </p>
            <p >
                {userId}
            </p>
            <p className="text-nowrap">
                {name}
            </p>
            <p className=" truncate">
                {email}
            </p>
            <p >
                {number}
            </p>
            <p className="text-center" >
                {userType}
            </p>
            <p className="flex gap-4 items-center ">
                <span className="text-red-500">
                    {status}
                </span>
                <span className="relative">
                    <EllipsisVertical size={14} onClick={onToggleModal} className="cursor-pointer" />
                    {modalOpen && <ProfileModal />}
                </span>
            </p>

        </div>
    )
}