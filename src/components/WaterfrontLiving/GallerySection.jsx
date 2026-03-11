// src/components/GallerySection.jsx
import React from "react";

const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1501769214405-5e9f8b28c3a1?auto=format&fit=crop&w=800&q=80",
];

const GallerySection = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className="rounded-lg shadow hover:scale-105 transition-transform duration-300"
                />
            ))}
        </section>
    );
};

export default GallerySection;