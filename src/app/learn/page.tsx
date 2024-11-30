"use client";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export default function LaunchPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-100 scroll-smooth">
            <Navbar />

            {/* Hero Section */}
            <div
                className="h-[50rem] w-full relative flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(/images/fsu.jpg)` }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-20 flex flex-col items-center space-y-6 px-6 text-center">
                    <p className="text-2xl sm:text-6xl font-bold text-white">
                        Coming to FSU this Spring!
                    </p>
                    <button
                        onClick={() => {
                            const targetSection = document.getElementById("about-section");
                            if (targetSection) targetSection.scrollIntoView({ behavior: "smooth" });
                        }}
                        aria-label="Learn more about Peer to Peer Delivery"
                        className="px-8 py-4 bg-blue-600 text-white rounded-full text-lg shadow-md transition-all duration-300 hover:bg-white hover:text-blue-600 hover:shadow-lg"
                    >
                        Read More
                    </button>
                </div>
            </div>

            {/* Main Content Section */}
            <div id="about-section" className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-10">
                        Studeliver: Launching This Spring at Florida State University
                    </h1>
                    <div className="grid gap-12 md:grid-cols-2">
                        <div className="space-y-8 text-gray-800">
                            <p>
                                This spring marks a major milestone for <strong>Studeliver</strong> as we officially launch at Florida State University (FSU). 
                                As a proud Seminole myself, I couldn’t be more thrilled to bring a student-focused delivery platform to my campus—a platform 
                                designed to make food delivery faster, more affordable, and uniquely tailored to college life.
                            </p>
                            <h2 className="text-2xl font-semibold text-blue-500">
                                What is Studeliver?
                            </h2>
                            <p>
                                Studeliver is a peer-to-peer food delivery app created specifically for students. Whether you’re in a dorm, studying late at the 
                                library, or hanging out at an apartment off-campus, we’re here to make food delivery easy and accessible.
                            </p>
                        </div>
                        <div className="rounded-lg shadow-md bg-white p-6">
                            <h2 className="text-xl font-semibold text-blue-600 mb-4">
                                Key Features of Studeliver
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-4">
                                    <span className="text-blue-600">✔️</span>
                                    <p>
                                        <strong>Affordability:</strong> Food at the same prices as in person, with lower delivery fees.
                                    </p>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <span className="text-blue-600">✔️</span>
                                    <p>
                                        <strong>Speed and Convenience:</strong> Faster deliveries from student drivers who know the campus.
                                    </p>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <span className="text-blue-600">✔️</span>
                                    <p>
                                        <strong>Eco-Friendly:</strong> Deliveries using bicycles, scooters, and walkers.
                                    </p>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <span className="text-blue-600">✔️</span>
                                    <p>
                                        <strong>Employment for Students:</strong> Flexible on-campus job opportunities.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
