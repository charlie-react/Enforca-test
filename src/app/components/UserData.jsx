"use client"

import { useState } from "react";
import { headers } from "../../../headers";
import { users } from "../../../usersData";
import MainData from "./MainData";

import Pagination from "./Pagination";

export default function UserData() {

    const [currentPage, setCurrentPage] = useState(1)
    const usersPerPage = 15
    const startIndex = (currentPage - 1) * usersPerPage
    const endIndex = startIndex + usersPerPage
    const currentUsers = users.slice(startIndex, endIndex)
    const totalPages = Math.ceil(users.length / usersPerPage)
    return (
        <div className="flex flex-col px-3">
            {headers.map(({ id, icon: Icon, date, name, userId, userType, phone, email, status }) => (
                <div key={id} className="grid gap-3 grid-cols-7 bg-green-700 text-white p-4 text-sm font-semibold">
                    <h3 >{date} {Icon && <Icon className="inline-block" size={16} />}</h3>
                    <h3 className="flex items-center gap-2">{userId} {Icon && <Icon className="inline-block" size={16} />}</h3>
                    <h3 className="flex items-center gap-2" >{name} {Icon && <Icon className="inline-block" size={16} />}</h3>
                    <h3 className="flex items-center gap-2">{email} {Icon && <Icon className="inline-block" size={16} />}</h3>
                    <h3 className="flex items-center gap-2" >{phone} {Icon && <Icon className="inline-block" size={16} />}</h3>
                    <h3 className="justify-center flex items-center gap-2">{userType} {Icon && <Icon className="inline-block" size={16} />}</h3>
                    <h3 className="flex items-center gap-2">{status} {Icon && <Icon className="inline-block" size={16} />}</h3>
                </div>
            ))}
            <div className="flex flex-1 flex-col gap-5 p-4 justify-center items-center shadow-lg">
                {currentUsers.map(({ id, dateSubmitted, name, userId, userType, phoneNumber, status, email }) => (
                    <MainData key={id} date={dateSubmitted} name={name} number={phoneNumber} userId={userId} userType={userType} status={status} email={email} />
                ))}
                <div className="flex justify-around gap-5 mt-4 w-full">

                    <div className="flex gap-2 mt-6">
                        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
                        {/* {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-1 py-1 cursor-pointer font-semibold ${currentPage === i + 1 ? " text-green-500" : "text-teal-800"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))} */}
                    </div>

                </div>
            </div>

        </div>
    )
}