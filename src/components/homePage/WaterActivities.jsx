import React from "react";
import Button from "../button/Button";

const WaterActivities = () => {
    return (
        <section className="bg-gray-50">

            {/* Section 1 */}
            <div className="px-6 pt-20 lg:pt-0 lg:px-0 flex flex-col lg:flex-row items-center">

                {/* Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1600&auto=format&fit=crop"
                        alt="Possum Kingdom Lake"
                        className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
                    />
                </div>

                {/* Text */}
                <div className="w-full lg:w-1/2 px-0 lg:px-16 xl:px-24 py-10 lg:py-0">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                        Where Luxury Meets Nature
                    </h2>

                    <p className="mt-4 text-gray-700 text-base sm:text-lg">
                        Experience the perfect balance of comfort and природ beauty at Possum Kingdom Lake. With breathtaking waterfront views and serene surroundings, this is more than just a stay — it’s a lifestyle escape.
                    </p>

                    <p className="mt-4 text-gray-700 text-base sm:text-lg">
                        Whether you’re seeking quiet relaxation or outdoor adventure, every moment here feels elevated and unforgettable.
                    </p>

                    <div className="pt-6">
                        <Button>Discover Your Escape</Button>
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <div className="px-6 lg:px-0 flex flex-col lg:flex-row-reverse items-center">

                {/* Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1600&auto=format&fit=crop"
                        alt="Outdoor Activities"
                        className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
                    />
                </div>

                {/* Text */}
                <div className="w-full lg:w-1/2 px-0 lg:px-16 xl:px-24 py-10 lg:py-0">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                        Endless Outdoor Moments
                    </h2>

                    <p className="mt-4 text-gray-700 text-base sm:text-lg">
                        From sunrise paddles to sunset picnics, every day brings a new adventure. Enjoy kayaking, fishing, hiking, or simply soaking in the peaceful lakeside atmosphere.
                    </p>

                    <p className="mt-4 text-gray-700 text-base sm:text-lg">
                        Perfect for families, couples, and solo travelers looking to reconnect with nature in style.
                    </p>

                    <div className="pt-6">
                        <Button>Explore Experiences</Button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default WaterActivities;