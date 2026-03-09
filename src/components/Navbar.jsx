const Navbar = () => {
    return (
        <nav className="fixed top-0 z-60 py-1 px-20 w-full backdrop-blur-xs">
            <div className="flex items-center justify-between container mx-auto">
                <div className="w-28">
                    <a href="/">
                        <img src="/Prime-Nest-Vacations.png" alt="" srcset="" />
                    </a>
                </div>
                <div className="flex list-none gap-5 items-center text-white">
                    <li className="border border-[#406fb8] bg-[#406fb8] px-3 py-1 rounded-full ms-10">
                        <a href="/">Explore Stays</a>
                    </li>
                    <li className="">
                        <a href="">Waterfront Living</a>
                    </li>
                    <li><a href="">Our Story</a></li>
                    <li><a href="">Connect With Us</a></li>
                </div>
                <div className="">
                    <button className="flex items-center gap-2 bg-[#406fb8] px-4 py-2 cursor-pointer hover:bg-[#2c65c2] text-white rounded-full">Book Now</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;