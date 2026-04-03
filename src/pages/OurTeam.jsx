import React from "react";

const teamMembers = [
    {
        name: "Imran Hossain",
        role: "Frontend Developer",
        project: "Vacation Rental Website",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Rahim Uddin",
        role: "UI/UX Designer",
        project: "Luxury UI Design",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
        name: "Karim Ahmed",
        role: "Backend Developer",
        project: "Booking System",
        image: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
        name: "Sadia Khan",
        role: "Project Manager",
        project: "Full Project Management",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
];

const OurTeam = () => {
    return (
        <div className="font-sans text-gray-900">

            {/* HERO */}
            <section className="bg-black text-white text-center py-48 px-6">
                <h1 className="text-4xl md:text-5xl font-semibold mb-4">
                    Meet Our Team
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto">
                    A group of passionate students working together to build modern, user-friendly digital experiences.
                </p>
            </section>

            {/* ABOUT TEAM */}
            <section className="py-16 px-6 max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-4">
                    Who We Are
                </h2>
                <p className="text-gray-600">
                    We are a dedicated team of students collaborating on real-world projects. Our goal is to design and develop modern solutions while gaining hands-on experience in web development, UI/UX design, and project management.
                </p>
            </section>

            {/* TEAM MEMBERS */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-10">
                        Our Members
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white border rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                                />

                                <h3 className="text-lg font-semibold">
                                    {member.name}
                                </h3>

                                <p className="text-sm text-gray-500 mb-2">
                                    {member.role}
                                </p>

                                <p className="text-gray-600 text-sm">
                                    {member.project}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* PROJECT SECTION */}
            <section className="py-16 px-6 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-6">
                    Our Project
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Our main project focuses on building a modern vacation rental platform.
                    We worked on UI design, frontend development, and backend integration
                    to create a seamless booking experience.
                </p>
            </section>

            {/* SKILLS */}
            <section className="py-16 px-6 bg-black text-white">
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-3xl font-semibold mb-10">
                        Our Skills
                    </h2>

                    <div className="grid md:grid-cols-4 gap-6 text-gray-300">

                        <div>
                            <h4 className="text-white font-medium">Frontend</h4>
                            <p>React, Tailwind CSS</p>
                        </div>

                        <div>
                            <h4 className="text-white font-medium">Backend</h4>
                            <p>Node.js, APIs</p>
                        </div>

                        <div>
                            <h4 className="text-white font-medium">Design</h4>
                            <p>Figma, UI/UX</p>
                        </div>

                        <div>
                            <h4 className="text-white font-medium">Management</h4>
                            <p>Planning & Coordination</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 text-center bg-gray-100">
                <h2 className="text-3xl font-semibold mb-4">
                    Want to Work With Us?
                </h2>
                <p className="text-gray-600 mb-6">
                    We are always open to collaboration and new opportunities.
                </p>

                <button className="border border-black px-6 py-3 hover:bg-black hover:text-white transition">
                    Contact Us
                </button>
            </section>

        </div>
    );
};

export default OurTeam;