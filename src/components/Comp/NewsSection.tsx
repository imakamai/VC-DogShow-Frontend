import React from 'react';

const NewsSection: React.FC = () => {
    return (
        <section className="flex justify-center p-8 mt-8">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-lg mx-auto w-full">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">News</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    For athletes, high altitude produces two contradictory
                    effects on performance. For explosive events
                </p>
            </div>
        </section>
    );
};

export default NewsSection;