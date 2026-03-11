import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const rentals = [
    {
        name: "West Side Rentals",
        image:
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    },
    {
        name: "Juniper Ridge Rentals",
        image:
            "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    },
    {
        name: "Retreat PK Rentals",
        image:
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    },
    {
        name: "Gaines Bend Rentals",
        image:
            "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    {
        name: "North East Side Rentals",
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
        name: "Sportsman’s World Rentals",
        image:
            "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
    },
];

const ExploreRentals = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-6">

                {/* Slider */}
                <Swiper
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {rentals.map((rental, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-2xl overflow-hidden transition">

                                <img
                                    src={rental.image}
                                    alt={rental.name}
                                    className="w-full h-56 object-cover"
                                />

                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-semibold text-gray-800 font-secondery">
                                        {rental.name}
                                    </h3>

                                    <button className="mt-4 bg-primary hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition ">
                                        View Community Rentals
                                    </button>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section >
    );
};

export default ExploreRentals;