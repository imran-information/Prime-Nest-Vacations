import Button from "./button/Button";

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
                    <li className="border border-white text-white px-5 py-2 rounded-xl ms-10">
                        <a href="/">Explore Stays</a>
                    </li>
                    <li className="">
                        <a href="">Waterfront Living</a>
                    </li>
                    <li><a href="">Our Story</a></li>
                    <li><a href="">Connect With Us</a></li>
                </div>
                <div className="">
                    <Button>Book Now</Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;