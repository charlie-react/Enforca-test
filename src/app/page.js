import Link from "next/link";
import FilterSearch from "./components/FilterSearch";
import Navbar from "./components/Navbar";
import SubNav from "./components/SubNav";
import UserData from "./components/UserData";



export default function Home() {
  return (
    
      <div className="flex flex-col gap-4 mx-auto w-120 justify-center shadow-md p-12 rounded-3xl bg-teal-400 text-slate-700 items-center text-center mt-8 ">
        <span className="">
          This is the Home Page
        </span>
        <Link href={"/users"} className="mt-5">
          Click <span className="border-1 border-teal-500 rounded-sm shadow-xs p-3 italic">
            User Management
          </span> to go to user page..
        </Link>
      </div>
  
  );
}
