
import { NavLink, useLocation } from 'react-router-dom';
import bannerImg from '../assets/banner.jpg';

const Navbar = ({ cartCount, wishlistCount }) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div className='m-6 '>
            <nav
                className={`p-4 ${ 
                    isHomePage
                        ? 'bg-purple-600 text-white rounded-t-3xl'
                        : 'text-black rounded-none'
                }`}
            >
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Gadget Heaven</h1>

<ul className="flex space-x-4">
    <NavLink 
        to="/" 
        className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-gray-300')}
    >
        Home
    </NavLink>
    <NavLink 
        to="/Statictics" 
        className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-gray-300')}
    >
        Statictics
    </NavLink>
    <NavLink 
        to="/dashboard" 
        className={({ isActive }) => (isActive ? 'text-yellow-500': 'hover:text-gray-300')}
    >
        Dashboard
    </NavLink>
</ul>

                    <div className="space-x-3 flex">
                        <i className="fa-solid fa-cart-shopping border border-gray-400 rounded-full p-2">
                            <span className="absolute -translate-y-3 bg-red-500 text-white rounded-full text-xs px-1">
                                {cartCount}
                            </span>
                        </i>
                        <i className="fa-regular fa-heart border border-gray-400 rounded-full p-2">
                            <span className="absolute -translate-y-3 bg-red-500 text-white rounded-full text-xs px-1">
                                {wishlistCount}
                            </span>
                        </i>
                    </div>
                </div>
            </nav>
            {isHomePage && (
                <section className="relative bg-purple-600 rounded-b-3xl text-white py-16">
                    {/* Hero Section */}
                    <div className="container mx-auto text-center px-4 pb-32">
                        <h2 className="text-4xl font-bold mb-4">Upgrade Your Tech Accessories</h2>
                        <p className="text-lg mb-6">
                            Explore the latest gadgets that will take your experience to the next level.
                            <br /> From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition">
                            Shop Now
                        </button>
                    </div>
                    <div className="border-2 border-white p-3 absolute bottom-[-200px] left-1/2 transform -translate-x-1/2 h-5/6 w-3/5 bg-white bg-opacity-50 rounded-3xl overflow-hidden shadow-lg">
                        <img src={bannerImg} alt="VR Headset" className="rounded-2xl w-full h-full object-cover" />
                    </div>
                </section>
            )}
            {isHomePage && <div className="h-32"></div>}
        </div>
    );
};

export default Navbar;
