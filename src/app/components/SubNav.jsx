import { Upload } from "lucide-react";

export default function SubNav() {
    return (
        <div className="flex items-center justify-around mb-3">
            <div className="ml-40">
            </div>
            <div className=" bg-green-950 p-5 text-slate-300 text-sm font-light mx-auto">
                <ul className="flex items-center justify-around gap-3">
                    <li className="px-3">
                        <a>
                            Customers
                        </a>
                    </li>
                    <li className="px-3">
                        <a>
                            Service Providers
                        </a>
                    </li>
                    <li className="px-3">
                        <a>
                            Approval Status
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex w-40 gap-3 items-center justify-center p-3 shadow-lg bg-white text-slate-900 rounded-md mr-3 ">
                <Upload size={20} />
                <p>
                    Import/Export
                </p>
            </div>
        </div>
    )
}