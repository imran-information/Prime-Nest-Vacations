import React from "react";

const ConnectWithUs = () => {
    return (
        <div className="font-sans text-gray-900">

            {/* HERO */}
            <section className="relative bg-black text-white text-center py-56 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>

                <div className="relative z-10">
                    <h1 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
                        Let’s Connect
                    </h1>
                    <p className="text-gray-300 max-w-xl mx-auto text-lg">
                        Whether you're planning your next escape or just have a question,
                        our team is ready to assist you every step of the way.
                    </p>
                </div>
            </section>

            {/* CONTACT INFO */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-10 text-center">

                    {[
                        {
                            title: "Email",
                            value: "info@primenestvacations.com"
                        },
                        {
                            title: "Phone",
                            value: "+1 817-688-3383"
                        },
                        {
                            title: "Location",
                            value: "Texas, United States"
                        }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="p-8 border rounded-2xl hover:shadow-xl transition duration-300 hover:-translate-y-2"
                        >
                            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                            <p className="text-gray-500">{item.value}</p>
                        </div>
                    ))}

                </div>
            </section>

            {/* CONTACT FORM */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-3xl mx-auto">

                    <h2 className="text-4xl font-semibold text-center mb-10">
                        Send a Message
                    </h2>

                    <form className="grid gap-6">

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="border p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="border p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />

                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            className="border p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-black text-white py-4 rounded-lg tracking-wide hover:opacity-80 transition"
                        >
                            Send Message
                        </button>

                    </form>
                </div>
            </section>

            {/* SOCIAL */}
            <section className="py-20 px-6 text-center">
                <h2 className="text-3xl font-semibold mb-8">
                    Stay Connected
                </h2>

                <div className="flex justify-center gap-10 text-lg">

                    <a href="#" className="relative group">
                        Facebook
                        <span className="block h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition"></span>
                    </a>

                    <a href="#" className="relative group">
                        Instagram
                        <span className="block h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition"></span>
                    </a>

                    <a href="#" className="relative group">
                        Twitter
                        <span className="block h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition"></span>
                    </a>

                </div>
            </section>

            {/* MAP */}
            <section className="h-[400px] grayscale">
                <iframe
                    title="location"
                    src="https://maps.google.com/maps?q=Texas&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                ></iframe>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 text-center bg-black text-white">
                <h2 className="text-4xl font-semibold mb-4">
                    Ready for Your Getaway?
                </h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                    Discover luxury stays designed for unforgettable experiences.
                </p>

                <a
                    href="/rentals"
                    className="inline-block border border-white px-8 py-3 hover:bg-white hover:text-black transition"
                >
                    Browse Rentals
                </a>
            </section>

        </div>
    );
};

export default ConnectWithUs;