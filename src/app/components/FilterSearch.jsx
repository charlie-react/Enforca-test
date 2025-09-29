import { Filter, FilterIcon, ListFilter, Search } from "lucide-react";

export default function FilterSearch(){
return(
    <div className="mx-auto flex gap-2 text-sm items-center justify-center mb-3">
       <div className="relative">
         <Search size={15} className="absolute left-3  top-3 inset-y-0 flex items-center"/>
        <input placeholder="Search" type="text" className="p-2 w-100 rounded-md border-2 focus:outline-none pl-8 border-gray-300"/>
       </div>
        <div className="flex gap-2 p-2 border-2 border-gray-300 rounded-md">
            <ListFilter size={20} className="font-bold"/>
            Filters
        </div>
    </div>
)
}