// src/components/GallerySection.jsx
import { useState } from "react";

const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1773994788136-64d0896159e6?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1722480417258-62f2fe681219?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1757025662913-f5241f0754c6?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1766393195967-bb27203ba333?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1722480417317-9e9371240ac2?q=80&w=1529&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1763402085235-51f7b9c7690f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1768548752146-a3d21814fd80?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1772127822607-2343696cf82e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];


const GallerySection = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="container mx-auto px-4 my-20">
            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-0 pb-10 flex flex-col justify-center items-center text-center gap-6 text-white">

                {/* Text */}
                <div className="mt-0 sm:mt-10">
                    <h3 className="text-sm sm:text-base uppercase text-black tracking-wide">
                        5-Star Accommodations
                    </h3>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-primary">
                        One of a Kind Experience
                    </h2>

                    <p className="mt-4 text-black text-base sm:text-lg">
                        Our vacation homes are designed to provide a luxurious and relaxing
                        experience. Spacious interiors, modern amenities, and stunning lake
                        views make every stay unforgettable.
                    </p>
                </div>

            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-lg cursor-pointer"
                        onClick={() => setSelectedImage(src)}
                    >
                        <img
                            src={src}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-[300px] object-cover transition-transform duration-500 hover:scale-110"
                        />
                    </div>
                ))}
            </div>

            {/* MODAL */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)} // 👉 CLICK OUTSIDE CLOSE
                >

                    {/* CLOSE BUTTON */}
                    <button
                        className="absolute top-5 right-5 text-white text-3xl z-50"
                        onClick={() => setSelectedImage(null)}
                    >
                        ✕
                    </button>

                    {/* IMAGE (STOP CLOSE WHEN CLICK IMAGE) */}
                    <img
                        src={selectedImage}
                        alt="Zoomed"
                        className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
                        onClick={(e) => e.stopPropagation()} // 👉 prevent close when clicking image
                    />

                </div>
            )}
        </section>
    );
};
export default GallerySection;