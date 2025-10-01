import FilterSearch from "../components/FilterSearch";
import Navbar from "../components/Navbar";
import SubNav from "../components/SubNav";
import UserData from "../components/UserData";


export default function UsersPage() {
    return (
        <div>
            <SubNav />
            <FilterSearch />
            <UserData />
        </div>
    )
}