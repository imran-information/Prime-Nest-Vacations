import React from "react";
import Button from "../button/Button";

const LuxuryVacation = () => {
    return (
        <section className="py-20 bg-primary">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">

                {/* Left Image */}
                <div className="lg:w-1/2 ">
                    <img
                        src="https://i.ibb.co.com/k6Xg4w6W/lake.jpg"
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

                    <p className="mt-4 text-gray-200 text-lg">
                        Whether it’s a family reunion, a friends’ weekend, or a peaceful retreat, our properties offer the perfect combination of privacy, style, and fun.
                    </p>
                    <div className="pt-6">
                        <Button type="secondary" className={"text-white  border-white hover:bg-white" }>Browse Available Homes</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LuxuryVacation;