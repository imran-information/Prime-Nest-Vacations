import React from "react";
import Button from "../button/Button";

const WaterActivities = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className=" lg:px-0 px-6 flex flex-col lg:flex-row items-center">
                {/* Left Image */}
                <div className="lg:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                        alt="Possum Kingdom Lake"
                        className="w-full h-[600px] object-cover"
                    />
                </div>

                {/* Right Text */}
                <div className="lg:w-1/2 pl-20 pr-36">
                    <h2 className="text-4xl font-bold text-primary">The Perfect Location</h2>
                    <p className="mt-4 text-gray-700 text-lg">
                        Escape to the natural beauty of Possum Kingdom Lake in Texas with <span className="font-semibold">Prime Nest Vacations</span>.
                        Explore sprawling state parks, crystal-clear waters, and endless opportunities to connect with nature.
                    </p>
                    <p className="mt-4 text-gray-700 text-lg">
                        Enjoy hiking trails for all skill levels, marinas for water sports, and peaceful camping options. After a long day of exploring, return to the comfort and luxury of your vacation rental home.
                    </p>
                    <div className="pt-6">
                        <Button>Explore Possum Kingdom Lake</Button>
                    </div>
                </div>
            </div>

            {/* Second Section: Text Left, Image Right */}
            <div className=" lg:px-0 px-6 flex flex-col lg:flex-row-reverse items-center">
                {/* Right Image */}
                <div className="lg:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6"
                        alt="Outdoor Activities"
                        className="w-full h-[600px] object-cover"
                    />
                </div>

                {/* Left Text */}
                <div className="lg:w-1/2 pl-48 pr-28">
                    <h2 className="text-4xl font-bold text-gray-900">Nature’s Playground</h2>
                    <p className="mt-4 text-gray-700 text-lg">
                        Adventure awaits for every guest! From kayaking and paddleboarding to fishing and lakeside picnics, there’s something for everyone.
                    </p>
                    <p className="mt-4 text-gray-700 text-lg">
                        Discover family-friendly activities, serene spots for relaxation, and endless outdoor fun. Make every day of your vacation an unforgettable experience.
                    </p>
                    <div className="pt-6">
                        <Button>Discover Outdoor Activities</Button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default WaterActivities;