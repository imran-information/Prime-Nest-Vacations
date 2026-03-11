import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-white">
                        Prime Nest Vacations
                    </h2>

                    <p className="mt-4 text-gray-400">
                        Experience luxury vacation homes near beautiful lakes and natural
                        destinations. Your perfect getaway starts here.
                    </p>

                    <div className="flex gap-4 mt-6">
                        <a className="bg-gray-800 p-3 rounded-full hover:bg-primary transition">
                            <FaFacebookF />
                        </a>
                        <a className="bg-gray-800 p-3 rounded-full hover:bg-primary transition">
                            <FaInstagram />
                        </a>
                        <a className="bg-gray-800 p-3 rounded-full hover:bg-primary transition">
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">
                        Quick Links
                    </h3>

                    <ul className="space-y-2">
                        <li><a className="hover:text-white">Home</a></li>
                        <li><a className="hover:text-white">Rentals</a></li>
                        <li><a className="hover:text-white">Amenities</a></li>
                        <li><a className="hover:text-white">Location</a></li>
                        <li><a className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Locations */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">
                        Popular Locations
                    </h3>

                    <ul className="space-y-2">
                        <li>PK Lake</li>
                        <li>Cedar Creek Lake</li>
                        <li>Colorado</li>
                        <li>Texas Lakes</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">
                        Contact Us
                    </h3>

                    <p>Email: info@primenestvacations.com</p>
                    <p className="mt-2">Phone: +1 817-688-3383</p>
                    <p className="mt-2">Texas, United States</p>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} Prime Nest Vacations. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;