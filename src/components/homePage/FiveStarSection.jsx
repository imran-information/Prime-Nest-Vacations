import React from "react";
import Button from "../button/Button";

const FiveStarSection = () => {
    return (
        <section
            className="relative py-32 bg-fixed bg-center bg-cover"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
            }}
        >
            <div className="absolute inset-0 bg-black/70"></div> {/* dark overlay for text */}

            <div className="relative max-w-6/12 mx-auto px-6 flex justify-center text-center items-center gap-10 text-white">
                {/* Text */}
                <div className="">
                    <h3 className="text-sm uppercase text-gray-300">
                        5-Star Accommodations
                    </h3>

                    <h2 className="text-4xl font-bold mt-2">
                        One of a Kind Experience
                    </h2>

                    <p className="mt-4 text-gray-200">
                        Our vacation homes are designed to provide a luxurious and relaxing
                        experience. Spacious interiors, modern amenities, and stunning lake
                        views make every stay unforgettable.
                    </p> 
                    <div className="mt-6">
                        <Button>See All Rentals</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FiveStarSection;