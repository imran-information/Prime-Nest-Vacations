import ExploreRentals from './ExploreRentals';

const Banner = () => {
    return (
        <>
            <section className="relative h-[85vh] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="relative z-10 text-center text-white px-6 max-w-3xl">

                    <h2 className="text-4xl md:text-6xl font-bold mt-2">
                        Prime Nest Vacations
                    </h2>

                    <p className="mt-4 text-lg md:text-xl text-gray-200 font-secondery">
                        Discover luxury vacation rentals and enjoy unforgettable stays near
                        beautiful lakes and natural destinations.
                    </p>
                </div>
            </section>
            <div className="mt-[-15%]">
                <ExploreRentals />
            </div>
        </>
    );
};
export default Banner;
