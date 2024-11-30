import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="transition-transform hover:scale-105">
                    <Image
                        src="/images/studeliverlogo.png"
                        alt="Studeliver Logo"
                        width={150}
                        height={50}
                        priority
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8">
                    {[
                        ['Home', '/'],
                        ['Our Team', '/team'],
                        ['Invest', '/invest'],
                        ['Contact us', '/contact']
                    ].map(([title, url]) => (
                        <Link key={title} href={url} className="group relative">
                            <span className="text-gray-700 hover:text-blue-600 transition-colors">
                                {title}
                            </span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link href="/signup" className="relative inline-flex items-center">
                        <span className="absolute inset-0 rounded-full bg-blue-600 transition-transform group-hover:scale-105" />
                        <span className="relative bg-blue-600 text-white px-6 py-2 rounded-full shadow 
                            hover:bg-blue-700 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
                            Sign Up
                        </span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden relative">
                    <input
                        id="menu-toggle"
                        type="checkbox"
                        className="peer hidden"
                    />
                    <label
                        htmlFor="menu-toggle"
                        className="text-gray-700 cursor-pointer hover:text-blue-600 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </label>

                    {/* Mobile Nav */}
                    <nav className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-sm shadow-lg rounded-lg 
                        hidden peer-checked:flex flex-col transform origin-top-right transition-all duration-200">
                        {[
                            ['Home', '#features'],
                            ['Our Team', '#pricing'],
                            ['Invest', '#about'],
                            ['Contact us', '#contact'],
                            ['Sign Up', '/signup']
                        ].map(([title, url], index) => (
                            <Link 
                                key={title} 
                                href={url}
                                className={`px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors
                                    ${index === 4 ? 'mt-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md mx-2' : ''}`}
                            >
                                {title}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;