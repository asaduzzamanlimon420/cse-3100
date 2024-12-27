import React from 'react';
import './aboutUs.css';
export default function AboutUs() {

    return (
        <div className="max-w-7xl mx-auto">
            <header className="text-center py-12">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg">Welcome to Purr Haven – Where Every Cat Finds a Loving Home!</p>
            </header>
            <section className="pt-16 pb-12">
                <h2 className="text-3xl font-semibold mb-4 text-center relative">
                    Our Mission
                    <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2"></span>
                </h2>
                <p className="text-lg leading-8">
                    At Purr Haven, our mission is to rescue, nurture, and find forever homes for cats in need.
                    We believe every cat deserves a chance at a happy and healthy life, surrounded by love and care.
                </p>
            </section>
            <section className="pt-16 pb-12">
                <h2 className="text-3xl font-semibold mb-4 text-center relative">
                    Meet the Team
                    <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2"></span>
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="team-member lg:text-right text-center">
                        <h3 className="text-2xl font-bold border-b-2 border-gray-400 pb-2">Asaduzzaman Limon</h3>
                        <p className="text-lg">Limon leads our rescue operations, ensuring every cat receives the care they deserve.</p>
                        <p className="text-gray-400">adilarian420@gmail.com</p>
                        <p className="text-lg">
                            <strong>Facebook:</strong>
                            <a href="https://www.facebook.com/zaman.limon.5/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">
                                Asaduzzaman Limon
                            </a>
                        </p>
                    </div>
                </div>
            </section>
            <section className="pt-16 pb-12">
                <h2 className="text-3xl font-semibold mb-4 text-center relative">
                    Our Core Values
                    <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2"></span>
                </h2>
                <ul className="list-disc list-inside text-lg leading-8">
                    <li><strong>Compassion:</strong> Every cat deserves love, respect, and care.</li>
                    <li><strong>Dedication:</strong> We are committed to rescuing and rehoming cats in need.</li>
                    <li><strong>Community:</strong> Building a strong network of cat lovers to support our mission.</li>
                    <li><strong>Integrity:</strong> Operating with honesty, transparency, and respect in all we do.</li>
                </ul>
            </section>
        </div>
    );
    
}