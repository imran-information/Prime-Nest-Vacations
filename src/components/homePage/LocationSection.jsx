import React from "react";
import Button from "../button/Button";

const LocationSection = () => {
    return (
        <section className="bg-gray-50">

            {/* Section 1 */}
            <div className="px-6 lg:px-0 flex flex-col lg:flex-row items-center">

                {/* Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop"
                        alt="Possum Kingdom Lake"
                        className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
                    />
                </div>

                {/* Text */}
                <div className="w-full lg:w-1/2 px-0 lg:px-16 xl:px-24 py-10 lg:py-0">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                        The Perfect Location
                    </h2>

                    <p className="mt-4 text-gray-700 text-base sm:text-lg">
                        Escape to the natural beauty of Possum Kingdom Lake in Texas with{" "}
                        <span className="font-semibold">Prime Nest Vacations</span>.
                        Explore sprawling state parks, crystal-clear waters, and endless opportunities to connect with nature.
                    </p>

                    <p className="mt-4 text-gray-700 text-base sm:text-lg">
                        Enjoy hiking trails for all skill levels, marinas for water sports, and peaceful camping options.
                        After a long day of exploring, return to the comfort and luxury of your vacation rental home.
                    </p>

                    <div className="pt-6">
                        <Button>Explore Possum Kingdom Lake</Button>
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <div className="px-6 lg:px-0 flex flex-col lg:flex-row-reverse items-center">

                {/* Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1600&auto=format&fit=crop"
                        alt="Outdoor Activities"
                        className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
                    />
                </div>

                {/* Text */}
                <div className="w-full lg:w-1/2 px-0 lg:px-16 xl:px-24 py-10 lg:py-0">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                        Nature’s Playground
                    </h2>

                    <p className="mt-4 text-gray-700 text-base sm:text-lg">
                        Adventure awaits for every guest! From kayaking and paddleboarding to fishing and lakeside picnics,
                        there’s something for everyone.
                    </p>

                    <p className="mt-4 text-gray-700 text-base sm:text-lg">
                        Discover family-friendly activities, serene spots for relaxation, and endless outdoor fun.
                        Make every day of your vacation an unforgettable experience.
                    </p>

                    <div className="pt-6">
                        <Button>Discover Outdoor Activities</Button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default LocationSection;