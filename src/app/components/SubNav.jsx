import { Upload } from "lucide-react";

export default function SubNav() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-around mb-3">
            <div className="sm:ml-40">
            </div>
            <div className=" bg-green-950 text-slate-300 text-sm font-light md:mx-auto flex items-center justify-around gap-3 ">

                <p className="px-2 md:px-3 py-4">

                    Customers

                </p>
                <p className="px-2 md:px-3  py-4">

                    Service Providers

                </p>

                <p className="px-2 md:px-3  py-4 flex gap-1 bg-green-500 justify-center items-center" >

                    <span>
                        Approval Status
                    </span>

                    <span className="rounded-full bg-red-700 w-6 h-6 text-center py-1 text-xs text-white  ">
                        2
                    </span>
                </p>


            </div>
            <div className="flex w-40 gap-3 items-center justify-center p-3 shadow-lg bg-white text-slate-700 rounded-md md:mr-3 cursor-pointer mt-3 mb-3 md:mb-0 md:mt-0 ">
                <Upload size={20} />
                <p>
                    Import/Export
                </p>
            </div>
        </div>
    )
}