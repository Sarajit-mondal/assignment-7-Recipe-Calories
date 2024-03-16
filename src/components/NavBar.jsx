import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

const NavBar = () => {
    return (
        <nav>
            <h2>Recipe Calories</h2>
            <div>
                <ul>
                 <li><a href="#">Home</a></li>
                 <li><a href="#">Recipes</a></li>
                 <li><a href="#">About</a></li>
                 <li><a href="#">Search</a></li>
                </ul>

                <div>
                    <div>
                        <CiSearch></CiSearch>
                        <input type="text" placeholder="Search"/>
                    </div>
                    <span><FaRegUserCircle></FaRegUserCircle></span>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;