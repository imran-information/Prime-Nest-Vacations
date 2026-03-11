import React from "react";
import { FaHotTub, FaSwimmer, FaUtensils, FaWifi, FaGamepad, FaTree } from "react-icons/fa";

const amenities = [
    {
        name: "Private Hot Tub",
        icon: <FaHotTub className="w-8 h-8 text-orange-500" />,
        description: "Relax and unwind in your own private hot tub after a day of adventure.",
    },
    {
        name: "Swimming & Lake Access",
        icon: <FaSwimmer className="w-8 h-8 text-blue-500" />,
        description: "Enjoy exclusive access to the lake for swimming and water fun.",
    },
    {
        name: "Fully Equipped Kitchen",
        icon: <FaUtensils className="w-8 h-8 text-green-500" />,
        description: "Cook meals easily in a modern kitchen with all necessary appliances.",
    },
    {
        name: "High-Speed WiFi",
        icon: <FaWifi className="w-8 h-8 text-purple-500" />,
        description: "Stay connected with fast and reliable internet throughout your stay.",
    },
    {
        name: "Entertainment & Game Rooms",
        icon: <FaGamepad className="w-8 h-8 text-pink-500" />,
        description: "Fun for everyone with pool tables, shuffleboard, and board games.",
    },
    {
        name: "Nature & Outdoor Spaces",
        icon: <FaTree className="w-8 h-8 text-green-700" />,
        description: "Enjoy spacious patios, fire pits, and access to natural surroundings.",
    },
];

const Amenities = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Amenities
                    </h2>
                    <p className="mt-3 text-gray-600 text-lg">
                        Our homes are designed with everything you need for a comfortable and fun stay.
                    </p>
                </div>

                {/* Amenities Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {amenities.map((amenity, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
                        >
                            {amenity.icon}
                            <h3 className="mt-4 text-xl font-semibold text-gray-900">{amenity.name}</h3>
                            <p className="mt-2 text-gray-700 text-sm">{amenity.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Amenities;