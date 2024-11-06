import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const AnnouncementBanner = () => {
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <div>
            {/* Announcement Banner */}
            {isVisible && (
                <div className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white p-4 flex justify-between items-center z-50 shadow-lg rounded-b-lg">
                    <Helmet>
                        <title>Gadget Heaven | Announcement-Banner</title>
                    </Helmet>
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-bell text-2xl"></i>
                        <p className="text-lg font-semibold">Special Offer! Get 20% off on your first purchase!</p>
                    </div>
                    <button onClick={handleClose} className="text-white font-bold px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300">
                        Get Offer
                    </button>
                </div>
            )}

            {/* About Us Section */}
            <section className="my-12 px-6 py-8 bg-gradient-to-r from-indigo-400 to-pink-300 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold text-center text-purple-800">About Us</h2>
                <p className="mt-4 text-lg text-center max-w-3xl mx-auto text-white">
                    Welcome to Gadget Heaven! We are a passionate team dedicated to offering cutting-edge tech gadgets at unbeatable prices. 
                    Whether you're looking for the newest smartphone, laptop, or accessories, we have it all. 
                    Founded in [Year], we are committed to providing our customers with the best products and exceptional service.
                </p>

                <h3 className="text-2xl font-semibold text-center mt-6 text-purple-800">Our Mission</h3>
                <p className="mt-2 text-lg text-center max-w-2xl mx-auto text-white">
                    Our mission is to make the latest technology accessible to everyone. We aim to offer innovative solutions for tech enthusiasts 
                    while ensuring a seamless shopping experience. Every product is carefully selected to meet our high standards for quality.
                </p>

                <h3 className="text-2xl font-semibold text-center mt-6 text-purple-800">Our Values</h3>
                <ul className="mt-4 text-lg text-center max-w-2xl mx-auto list-disc pl-6 text-white">
                    <li>Customer Satisfaction: We strive to exceed customer expectations with every interaction.</li>
                    <li>Innovation: We continuously adapt to the latest trends to bring the best products to our customers.</li>
                    <li>Integrity: We believe in transparency, honesty, and treating everyone with respect.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-center mt-6 text-purple-800">Meet Our Team</h3>
                <p className="mt-2 text-lg text-center max-w-2xl mx-auto text-white">
                    Our team consists of passionate tech enthusiasts who are committed to bringing you the best in technology. 
                    From product selection to customer service, our team works tirelessly to ensure your satisfaction.
                </p>
            </section>

            {/* Blog Section */}
            <section className="my-12 px-6 py-8 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-purple-900">From Our Blog</h2>
                <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-4 shadow-lg rounded-lg hover:scale-105 transition duration-300">
                        <h3 className="text-xl font-semibold text-purple-700">How to Choose the Best Laptop</h3>
                        <p className="mt-2 text-gray-600">Choosing a laptop can be tough with so many options available. Here’s a guide to help you pick the right one...</p>
                    </div>
                    <div className="bg-white p-4 shadow-lg rounded-lg hover:scale-105 transition duration-300">
                        <h3 className="text-xl font-semibold text-purple-700">Top Gadgets for 2024</h3>
                        <p className="mt-2 text-gray-600">We’ve rounded up the top gadgets to keep an eye on this year. Check out the best tech innovations...</p>
                    </div>
                    <div className="bg-white p-4 shadow-lg rounded-lg hover:scale-105 transition duration-300">
                        <h3 className="text-xl font-semibold text-purple-700">Maximize Your Tech Experience</h3>
                        <p className="mt-2 text-gray-600">Learn tips and tricks to get the most out of your gadgets. Enhance your productivity and enjoyment with these simple hacks...</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AnnouncementBanner;
