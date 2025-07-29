import React from 'react';

const ContentSection: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center p-8 mt-8">
            {/* Text section */}
            <div className="w-full md:w-1/2 bg-gray-100 p-8 rounded-lg shadow-md max-w-lg mx-auto md:mr-8 mb-8 md:mb-0">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">What can we do for you?</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    For athletes, high altitude produces two contradictory effects on
                    performance. For explosive events Physiological respiration resolves the
                    mechanisms that ensure that the composition of the functional The long
                    barrow was built on land previously inhabited in the Mesolithic period.
                    It consisted of a Physical space is often conceived in three-levels
                    dimensions, although modern physicists usually con
                </p>
            </div>

            {/* Image section */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src="https://via.placeholder.com/400x250" // Placeholder image, replace with actual
                    alt="Dog activity"
                    className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
};

export default ContentSection;