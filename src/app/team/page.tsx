import Image from 'next/image';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Suspense } from 'react';

// Loading skeleton for team member
const TeamMemberSkeleton = () => (
    <div className="flex flex-col md:flex-row items-center gap-8 animate-pulse">
        <div className="w-64 h-64 bg-gray-200 rounded-2xl"></div>
        <div className="flex-1">
            <div className="h-8 bg-gray-200 rounded w-48 mb-2"></div>
            <div className="h-6 bg-gray-200 rounded w-32 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
        </div>
    </div>
);

// Team member component
const TeamMember = ({ 
    image, 
    name, 
    role, 
    education 
}: { 
    image: string; 
    name: string; 
    role: string; 
    education: string;
}) => (
    <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-64 h-64 relative rounded-2xl overflow-hidden shadow-xl">
            <Image
                src={image}
                alt={name}
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 256px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshGxsdIR0hHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
        </div>
        <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {name}
            </h2>
            <p className="text-blue-600 font-semibold mb-4">
                {role}
            </p>
            <p className="text-gray-600 leading-relaxed">
                {education}
            </p>
        </div>
    </div>
);

export default function TeamPage() {
    const teamMembers = [
        {
            name: "Naman Bajpai",
            role: "Founder & CEO",
            education: "Bachelors in Computer Science @ Florida State University",
            image: "/images/naman.jpg"
        },
        {
            name: "Abhinivesh Bajpai",
            role: "Founding Engineer & Marketing Lead",
            education: "Bachelors in Chemical Engineering @ Indian Institute of Technology, Delhi",
            image: "/images/abhinivesh.jpg"
        },
        {
            name: "Linga Reddy Gudisha",
            role: "AWS Lead & Product Manager",
            education: "Masters in Computer Science @ Florida State University",
            image: "/images/linga.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />  
            {/* Hero Section */}
            <div className="relative py-20 bg-gradient-to-b from-blue-50 to-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
                        Meet Our Team
                    </h1>
                    <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
                        Passionate students building the future of campus food delivery
                    </p>
                </div>
            </div>

            {/* Team Section */}
            <div className="py-16 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div key={member.name} className={index > 0 ? "mt-10" : ""}>
                            <Suspense fallback={<TeamMemberSkeleton />}>
                                <TeamMember {...member} />
                            </Suspense>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
} 