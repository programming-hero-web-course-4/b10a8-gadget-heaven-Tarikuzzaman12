import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const MainLayout = () => {
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);

    const updateWishlistCount = (count) => {
        setWishlistCount(count);
    };

    // Load initial cart count from localStorage
    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCartCount(cartItems.length);

        // Load initial wishlist count from localStorage
        const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlistCount(wishlistItems.length);
    }, []);

    // Function to update cart count
    const updateCartCount = (newCount) => {
        setCartCount(newCount);
    };

    return (
        <div>
            <Navbar cartCount={cartCount} wishlistCount={wishlistCount} />
            <Outlet context={{ cartCount, updateCartCount, updateWishlistCount }} />
            <ToastContainer  
             position="top-center" 
                autoClose={2000} 
                hideProgressBar={true} 
                closeOnClick
                pauseOnHover
                draggable
                pauseOnFocusLoss
                theme="colored"></ToastContainer>
            <Footer />
        </div>
    );
};


export default MainLayout;