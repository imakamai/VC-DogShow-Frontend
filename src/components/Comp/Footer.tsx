import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white p-8 mt-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                {/* Add contact details here if needed */}
                <p className="text-gray-400">
                    Feel free to reach out to us for any inquiries.
                </p>
            </div>
        </footer>
    );
};

export default Footer;