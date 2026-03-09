import React from "react";

const LuxuryVacation = () => {
    return (
        <section className="py-20 bg-primary">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">

                {/* Left Image */}
                <div className="lg:w-1/2 ">
                    <img
                        src="/src/assets/lake.jpg"
                        alt="Prime Nest Luxury Home"
                        className="w-full rounded-xl object-cover"
                    />
                </div>

                {/* Right Content */}
                <div className="lg:w-1/2">
                    <h2 className="text-4xl font-bold text-white">
                        Experience True Comfort
                    </h2>

                    <p className="mt-4 text-gray-200 text-lg font-secondery">
                        At <span className="font-semibold">Prime Nest Vacations</span>, we provide luxury homes designed for memorable getaways.
                        From modern interiors to serene lakeside views, every home is built to make your stay exceptional.
                    </p>

                    <button className="mt-8 bg-white hover:bg-primary text-primary hover:text-white border hover:border px-6 py-3 rounded-lg font-semibold transition">
                        Browse Available Homes
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LuxuryVacation;