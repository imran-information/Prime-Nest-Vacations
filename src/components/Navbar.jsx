import { NavLink } from "react-router-dom";
import Button from "./button/Button";

const Navbar = () => {
    // A reusable function for navlink styling
    const navLinkClasses = ({ isActive }) =>
        `px-5 py-2 rounded-xl ${isActive ? "border border-white text-white" : "text-white"
        }`;

    return (
        <nav className="fixed top-0 z-60 py-1 px-20 w-full backdrop-blur-xs">
            <div className="flex items-center justify-between container mx-auto">
                {/* Logo */}
                <div className="w-28">
                    <NavLink to="/">
                        <img src="/Prime-Nest-Vacations.png" alt="Prime Nest Vacations" />
                    </NavLink>
                </div>

                {/* Navigation links */}
                <ul className="flex list-none gap-5 items-center text-white">
                    <li>
                        <NavLink to="/" className={navLinkClasses}>
                            Explore Stays
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/waterfront-living" className={navLinkClasses}>
                            Waterfront Living
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/our-story" className={navLinkClasses}>
                            Our Story
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/connect" className={navLinkClasses}>
                            Connect With Us
                        </NavLink>
                    </li>
                </ul>

                {/* Book Now Button */}
                <div>
                    <Button>Book Now</Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;