import { EllipsisVertical } from "lucide-react";

export default function MainData({date,name,email,status,number,userId,userType}) {
    return (
        <div className="grid grid-cols-7 gap-5 w-full text-teal-800 font-bold text-sm">
            <p >
                {date}
            </p>
            <p >
                {userId}
            </p>
            <p className="text-nowrap">
                {name}
            </p>
            <p>
               {email}
            </p>
            <p >
                {number}
            </p>
            <p className="text-center" >
                {userType}
            </p>
            <p className="flex gap-4 items-center">
               <span className="text-red-500">
                 {status}
               </span>
               <EllipsisVertical size={14}/>
            </p>
            
        </div>
    )
}