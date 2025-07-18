import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-gray-100">
            <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                    Welcome to the official Dog Show website!
                </h1>
                <p className="text-lg text-gray-600">
                    Register your pet and become part of our dog show community.
                </p>
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition">
                    Register Dog
                </button>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
                <img
                    src="/dog-hero.png"
                    alt="Dog"
                    className="w-full max-w-md mx-auto"
                />
            </div>
        </section>
    );
};

export default Hero;
