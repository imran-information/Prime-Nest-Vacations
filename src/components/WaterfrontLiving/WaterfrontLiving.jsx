export default function WaterfrontLiving() {
    return (
        <div className="font-sans text-gray-900">

            {/* HERO */}
            <section className="relative h-[70vh] flex items-center justify-center text-center text-white">
                <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                    alt="Waterfront"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative z-10 max-w-2xl px-4">
                    <h1 className="text-4xl md:text-5xl font-semibold mb-4">
                        Waterfront Living
                    </h1>
                    <p className="text-lg text-gray-200">
                        Wake up to serene lake views, unwind in luxury homes, and enjoy the perfect blend of nature and comfort.
                    </p>
                </div>
            </section>

            {/* INTRO */}
            <section className="py-16 px-6 max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-4">
                    Luxury by the Water
                </h2>
                <p className="text-gray-600">
                    At Prime Nest Vacations, our waterfront homes are designed to deliver a truly relaxing escape.
                    Enjoy private docks, panoramic lake views, and thoughtfully designed interiors that make every stay unforgettable.
                </p>
            </section>

            {/* FEATURES */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-10">
                        Waterfront Experience
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="p-6 border bg-white hover:shadow-md transition">
                            <h3 className="text-xl font-medium mb-2">
                                Private Lake Access
                            </h3>
                            <p className="text-gray-600">
                                Step outside and enjoy direct access to the water from your rental home.
                            </p>
                        </div>

                        <div className="p-6 border bg-white hover:shadow-md transition">
                            <h3 className="text-xl font-medium mb-2">
                                Sunrise & Sunset Views
                            </h3>
                            <p className="text-gray-600">
                                Experience breathtaking views right from your patio or balcony.
                            </p>
                        </div>

                        <div className="p-6 border bg-white hover:shadow-md transition">
                            <h3 className="text-xl font-medium mb-2">
                                Luxury Outdoor Spaces
                            </h3>
                            <p className="text-gray-600">
                                Enjoy fire pits, decks, and outdoor lounges perfect for relaxation.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* PROPERTY HIGHLIGHTS */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-10">
                    Designed for Comfort
                </h2>

                <div className="grid md:grid-cols-2 gap-10 items-center">

                    <img
                        src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
                        alt="Interior"
                        className="rounded-lg shadow-md hover:scale-105 transition duration-300"
                    />

                    <div>
                        <h3 className="text-2xl font-medium mb-4">
                            Modern Interiors
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Our homes feature spacious layouts, premium furnishings, and fully equipped kitchens for a seamless stay.
                        </p>

                        <h3 className="text-2xl font-medium mb-4">
                            Relaxation Meets Style
                        </h3>
                        <p className="text-gray-600">
                            From cozy living spaces to elegant bedrooms, every detail is curated for comfort and relaxation.
                        </p>
                    </div>

                </div>
            </section>

            {/* ACTIVITIES */}
            <section className="py-16 px-6 bg-black text-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-10">
                        Life on the Water
                    </h2>

                    <div className="grid md:grid-cols-4 gap-6 text-gray-300">

                        <div>
                            <h4 className="text-lg font-medium text-white">Boating</h4>
                            <p>Explore the lake with easy access to boats and marinas.</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-medium text-white">Fishing</h4>
                            <p>Enjoy peaceful fishing right from your private dock.</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-medium text-white">Swimming</h4>
                            <p>Cool off in the refreshing lake waters during warm days.</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-medium text-white">Kayaking</h4>
                            <p>Glide through calm waters and explore hidden spots.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 text-center bg-gray-100">
                <h2 className="text-3xl font-semibold mb-4">
                    Ready for Your Waterfront Escape?
                </h2>
                <p className="text-gray-600 mb-6">
                    Discover luxury homes with stunning lake views and unforgettable experiences.
                </p>

                <a
                    href="/rentals"
                    className="inline-block border border-black px-6 py-3 hover:bg-black hover:text-white transition"
                >
                    Browse Waterfront Rentals
                </a>
            </section>

        </div>
    );
}