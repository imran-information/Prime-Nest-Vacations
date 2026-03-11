const activities = [
    {
        name: "Hiking Trails",
        description: "Explore scenic trails for beginners and seasoned hikers alike.",
        image: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
    },
    {
        name: "Kayaking & Paddleboarding",
        description: "Enjoy the calm waters with kayaks and paddleboards available for all guests.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
        name: "Fishing & Boating",
        description: "Cast a line or take a boat out for a perfect lakeside adventure.",
        image: "https://img.freepik.com/free-photo/man-with-oldie-fishing-from-rowboat_329181-19854.jpg?t=st=1773090750~exp=1773094350~hmac=ecf54aee5c18c8f2c8ef712cfee6bb147a9e8eb392e5a18b953a0f50f4eaf620&w=1480",
    },
    {
        name: "Camping & Picnic Spots",
        description: "Relax under the stars or enjoy a family picnic surrounded by nature.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
];

const NaturesPlayground = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                {/* Section Title */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl font-bold text-primary">
                        Nature’s Playground
                    </h2>
                    <p className="mt-3 text-gray-600 text-lg">
                        Adventure and relaxation await at Possum Kingdom Lake. Discover outdoor activities for all ages and interests.
                    </p>
                </div>

                {/* Activities Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {activities.map((activity, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                            <img
                                src={activity.image}
                                alt={activity.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {activity.name}
                                </h3>
                                <p className="mt-2 text-gray-700 text-sm">
                                    {activity.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NaturesPlayground;