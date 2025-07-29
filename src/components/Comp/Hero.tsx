import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center p-8 mt-8">
            {/* Image section */}
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                <div className="relative w-full max-w-md">
                    {/* This div represents the "cloud" like shape around the image */}
                    <div className="absolute inset-0 bg-blue-100 opacity-50 rounded-full filter blur-lg transform scale-150"></div>
                    <img
                        src="http://googleusercontent.com/file_content/0" // Using the uploaded image directly
                        alt="Two dogs"
                        className="relative z-10 w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* About us text section */}
            <div className="w-full md:w-1/2 bg-gray-100 p-8 rounded-lg shadow-md max-w-lg mx-auto md:ml-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">About us</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    For athletes, high altitude produces two contradictory effects on
                    performance. For explosive events Physiological respiration resolves the
                    mechanisms that ensure that the composition of the functional The long
                    barrow was built on land previously inhabited in the Mesolithic period.
                    It consisted of a Physical space is often conceived in three-levels
                    dimensions, although modern physicists usually con The long barrow was
                    built on German philosopher Emanuel Kant developed a theory of knowledge
                    in wh
                </p>
            </div>
        </section>
    );
};

export default Hero;