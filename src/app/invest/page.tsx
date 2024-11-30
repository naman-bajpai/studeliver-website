import Link from 'next/link';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
export default function InvestPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            {/* Hero Section */}
            <div className="relative py-20 bg-gradient-to-b from-blue-50 to-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
                        Invest in the Future of
                        <span className="text-blue-600 block">Campus Food Delivery</span>
                    </h1>
                    <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
                        Join us in revolutionizing how students access food on campus
                    </p>
                </div>
            </div>

            {/* Investment Highlights */}
            <div className="py-16 container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Market Opportunity",
                            description: "Targeting 20M+ college students across the United States with a $50B+ addressable market"
                        },
                        {
                            title: "Traction",
                            description: "Growing user base with strong retention and expanding campus presence"
                        },
                        {
                            title: "Innovation",
                            description: "Proprietary technology optimized for campus delivery logistics"
                        }
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-50 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Ready to Join Our Journey?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        Connect with us to learn more about investment opportunities and how 
                        you can be part of revolutionizing campus food delivery.
                    </p>
                    <Link 
                        href="mailto:nb24l@fsu.edu" 
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full 
                            font-semibold hover:bg-blue-700 transition-colors shadow-lg 
                            hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Contact Our Investment Team
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
} 