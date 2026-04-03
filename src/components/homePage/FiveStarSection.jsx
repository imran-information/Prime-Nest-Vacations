import React from "react";
import Button from "../button/Button";

const FiveStarSection = () => {
    return (
        <section
            className="relative py-24 sm:py-32 bg-fixed bg-center bg-cover"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center text-center text-white gap-6">

                <h3 className="text-sm sm:text-base uppercase text-gray-300 tracking-wide">
                    5-Star Accommodations
                </h3>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
                    One of a Kind Experience
                </h2>

                <p className="mt-4 text-gray-200 text-base sm:text-lg">
                    Our vacation homes are designed to provide a luxurious and relaxing
                    experience. Spacious interiors, modern amenities, and stunning lake
                    views make every stay unforgettable.
                </p>

                <div className="mt-6">
                    <Button>See All Rentals</Button>
                </div>

            </div>
        </section>
    );
};

export default FiveStarSection;