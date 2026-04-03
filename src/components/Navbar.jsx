import { NavLink } from "react-router-dom";
import { useState } from "react";
import Button from "./button/Button";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // NavLink styling
    const navLinkClasses = ({ isActive }) =>
        `px-5 py-2 rounded-xl ${isActive ? "border border-white text-white" : "text-white"
        }`;

    return (
        <nav className="fixed top-0 z-50 py-2 px-6 md:px-10 lg:px-20 w-full backdrop-blur-xl">
            <div className="flex items-center justify-between container mx-auto">

                {/* Logo */}
                <div className="w-24 md:w-28">
                    <NavLink to="/">
                        <img src="/Prime-Nest-Vacations.png" alt="Prime Nest Vacations" />
                    </NavLink>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex list-none gap-5 items-center text-white">
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
                        <NavLink to="/our-team" className={navLinkClasses}>
                            Our Team
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/connect" className={navLinkClasses}>
                            Connect With Us
                        </NavLink>
                    </li>
                </ul>

                {/* Book Now (Desktop) */}
                <div className="hidden md:block">
                    <Button>Book Now</Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white text-2xl transition"
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown (Smooth Slide) */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-black/90 backdrop-blur-lg rounded-2xl p-6 mx-4">
                    <ul className="flex flex-col gap-4 text-white text-center">

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
                            <NavLink to="/our-team" className={navLinkClasses}>
                                Our Team
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/connect" className={navLinkClasses}>
                                Connect With Us
                            </NavLink>
                        </li>

                        <li className="pt-4">
                            <Button>Book Now</Button>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;