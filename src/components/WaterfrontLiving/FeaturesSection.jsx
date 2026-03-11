// src/components/FeaturesSection.jsx
import React from "react";

const features = [
    {
        title: "Scenic Views",
        description: "Wake up to stunning water views every morning.",
        image: "https://images.unsplash.com/photo-1698345522116-c7c730de4196?q=80&w=2152&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Private Docks",
        description: "Enjoy exclusive access to private docks and boating.",
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Luxury Amenities",
        description: "Top-notch facilities including pools, gyms, and lounges.",
        image: "https://images.unsplash.com/photo-1501769214405-5e9f8b28c3a1?auto=format&fit=crop&w=800&q=80",
    },
];

const FeaturesSection = () => {
    return (
        <section className="container mx-auto my-20">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                    >
                        <img className="w-full h-[300px]" src={feature.image} alt="" srcset="" />
                        <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;