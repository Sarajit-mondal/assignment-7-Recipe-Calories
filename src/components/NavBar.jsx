import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

const NavBar = () => {
    return (
        <nav className="flex text-center gap-5 py-5  flex-col md:flex-row items-center justify-between">
            <h2>Recipe Calories</h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-20">
                <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
                 <li><a href="#">Home</a></li>
                 <li><a href="#">Recipes</a></li>
                 <li><a href="#">About</a></li>
                 <li><a href="#">Search</a></li>
                </ul>

                <div className="flex items-center gap-3 ">
                    <div className="bg-[#150B2B0D] flex items-center px-4 py-2 rounded-full  border-2">
                        <CiSearch ></CiSearch>
                        <input type="text" placeholder="Search" className="ml-1 bg-transparent placeholder:font-normal outline-none"/>
                    </div>
                    <span className="bg-green-500 p-3 rounded-full cursor-pointer"><FaRegUserCircle className="text-2xl text-[#150B2B99]"></FaRegUserCircle></span>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;