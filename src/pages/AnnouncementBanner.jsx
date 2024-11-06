import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
const AnnouncementBanner = () => {
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();


    const handleClose = () => {
        setIsVisible(false);
        navigate('/'); // 
    };

    return (
        isVisible && (
            <div className="w-full bg-yellow-600 text-white p-4 flex justify-between items-center z-50 shadow-lg">
                <Helmet>
                    <title>Gadget Heaven | Announcement-Banner</title>
                </Helmet>
                <div className="flex items-center space-x-2">
                    <i className="fas fa-bell"></i>
                    <p className="text-lg">Special Offer! Get 20% off on your first purchase!</p>
                </div>
                <button onClick={handleClose} className="text-white font-bold px-4 py-1 rounded-full bg-red-500 hover:bg-red-700">
                    Get Offer
                </button>
            </div>
        )
    );
};

export default AnnouncementBanner;
