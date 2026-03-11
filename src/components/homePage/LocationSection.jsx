import React from "react";

const LocationSection = () => {
    return (
        <section className="py-16 bg-gray-50 space-y-24">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
                {/* Left Image */}
                <div className="lg:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                        alt="Possum Kingdom Lake"
                        className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                    />
                </div>

                {/* Right Text */}
                <div className="lg:w-1/2">
                    <h2 className="text-4xl font-bold text-gray-900">The Perfect Location</h2>
                    <p className="mt-4 text-gray-700 text-lg">
                        Escape to the natural beauty of Possum Kingdom Lake in Texas with <span className="font-semibold">Prime Nest Vacations</span>.
                        Explore sprawling state parks, crystal-clear waters, and endless opportunities to connect with nature.
                    </p>
                    <p className="mt-4 text-gray-700 text-lg">
                        Enjoy hiking trails for all skill levels, marinas for water sports, and peaceful camping options. After a long day of exploring, return to the comfort and luxury of your vacation rental home.
                    </p>
                    <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                        Explore Possum Kingdom Lake
                    </button>
                </div>
            </div>

            {/* Second Section: Text Left, Image Right */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row-reverse items-center gap-10">
                {/* Right Image */}
                <div className="lg:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6"
                        alt="Outdoor Activities"
                        className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                    />
                </div>

                {/* Left Text */}
                <div className="lg:w-1/2">
                    <h2 className="text-4xl font-bold text-gray-900">Nature’s Playground</h2>
                    <p className="mt-4 text-gray-700 text-lg">
                        Adventure awaits for every guest! From kayaking and paddleboarding to fishing and lakeside picnics, there’s something for everyone.
                    </p>
                    <p className="mt-4 text-gray-700 text-lg">
                        Discover family-friendly activities, serene spots for relaxation, and endless outdoor fun. Make every day of your vacation an unforgettable experience.
                    </p>
                    <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition">
                        Discover Outdoor Activities
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;