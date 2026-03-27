import React from 'react'
import Button from '../button/Button'

export const HeroSection = () => {
    return (
        <section className="relative h-[85vh] bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage:
                    "url('https://plus.unsplash.com/premium_photo-1754337722280-18b856ca532f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6 max-w-3xl">

                <h2 className="text-4xl md:text-6xl font-bold mt-2">
                    Waterfront Living
                </h2>

                <p className="mt-4 text-lg md:text-xl text-gray-200 font-secondery">
                    Discover luxury vacation rentals and enjoy unforgettable stays near
                    beautiful lakes and natural destinations.
                </p>
                <div className="mt-6">
                    <Button children={"All Waterfront Living"} />
                </div>
            </div>
        </section>

    )
}
