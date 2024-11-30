import { Spotlight } from "@/components/ui/spotlight";
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            {/* Hero Section with Spotlight */}
            <div className="relative py-20 overflow-hidden">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="rgba(253, 224, 71, 0.25)"
                />
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
                        Have questions? We'd love to hear from you.
                    </p>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Contact Information
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Email
                                    </h3>
                                    <a 
                                        href="mailto:contact@studeliver.com"
                                        className="text-blue-600 hover:text-blue-700 transition-colors"
                                    >
                                        nb24l@fsu.edu
                                    </a>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Phone
                                    </h3>
                                    <a 
                                        href="tel:+1234567890"
                                        className="text-blue-600 hover:text-blue-700 transition-colors"
                                    >
                                        (463) 269-8730
                                    </a>
                                </div>
                                {/* <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Office
                                    </h3>
                                    <p className="text-gray-600">
                                        123 Campus Drive<br />
                                        University City, ST 12345
                                    </p>
                                </div> */}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="space-y-6">
                            <div>
                                <label 
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label 
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label 
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold
                                    hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl 
                                    hover:-translate-y-0.5 transition-all duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                            Find Us
                        </h2>
                        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10828.689111749612!2d-84.30130251547654!3d30.439108614967292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88ecf57078f21dd3%3A0x9c1b0fee7f5d86c8!2sFlorida%20State%20University!5e1!3m2!1sen!2sus!4v1732840475997!5m2!1sen!2sus" 
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
} 