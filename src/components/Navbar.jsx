import { BiArrowToRight } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";


const Navbar = () => {
    return (
        <nav className="fixed top-0 z-10 py-5 px-20 w-full backdrop-blur-xs">
            <div className="flex items-center justify-between ">
                <div className="flex list-none gap-5 items-center ">
                    <h3 className="text-4xl">HomeQuest</h3>
                    <li className="border px-3 py-1 rounded-full ms-10">
                        <a href="">Projects</a>
                    </li>
                    <li>
                        <a href="">Services</a>
                    </li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Testimonials</a></li>
                </div>
                <div className="flex items-center gap-5">
                    <p>+88 01868-634721</p>
                     
                    <div className="group relative transition-all duration-300">
                        <div className="flex items-center border rounded-full p-2 w-10 group-hover:w-40 transition-all duration-300 overflow-hidden bg-white">
                            <IoIosSearch className="text-gray-600" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="ml-2 bg-transparent outline-none w-full text-sm text-black hidden group-hover:block"
                            />
                        </div>
                    </div>


                    <button className="flex items-center gap-2 bg-amber-300 px-4 py-2 cursor-pointer hover:bg-amber-400 rounded-full">Get a Quote <BiArrowToRight /></button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;