import Image from "next/image";
import Navbar from "./components/Navbar";
import SubNav from "./components/SubNav";
import FilterSearch from "./components/FilterSearch";
import UserData from "./components/UserData";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <SubNav/>
      <FilterSearch/>
      <UserData/>
    </div>
  );
}
