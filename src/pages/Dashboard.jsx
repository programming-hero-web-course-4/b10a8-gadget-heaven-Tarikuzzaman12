import React, { useState, useEffect } from 'react';
import Heading from '../components/Heading';

const Dashboard = () => {
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [activeView, setActiveView] = useState('cart'); // State to manage active view

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(savedCart);

        const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlistItems(savedWishlist);
    }, []);

    return (
        <div>
            <Heading
                title='Dashboard'
                subtitle={(
                    <>
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />
                        the coolest accessories, we have it all!
                    </>
                )}
            >
                <div>
                    <button 
                        className={`w-[170px] h-[52px] border rounded-[32px] ${activeView === 'cart' ? 'bg-white text-black' : 'border-white text-white'} mr-4 mt-6`} 
                        onClick={() => setActiveView('cart')}
                    >
                        Cart
                    </button>
                    <button 
                        className={`w-[170px] h-[52px] border rounded-[32px] ${activeView === 'wishlist' ? 'bg-white text-black' : 'border-white text-white'}`} 
                        onClick={() => setActiveView('wishlist')}
                    >
                        Wishlist
                    </button>
                </div>
            </Heading>

            {/* Display based on active view */}
            <div className="mt-10 mx-auto w-11/12">
             
            <div className="mt-10 mx-auto w-11/12">
                {activeView === 'cart' ? (
                    <div>
                           <div className='flex justify-between items-center mb-10'>
                    <div>
                        <h2 className="text-2xl font-bold">Cart</h2>
                    </div>
                    <div className='flex items-center gap-10 font-bold'>
                        <h2 className='text-2xl'>Total cost:</h2>
                        <button className=" btn border-2 border-purple-600 text-purple-600 rounded-3xl">Sort by price <i class="fa-solid fa-sliders transform rotate-90"></i>
                        </button>
                        <button className="btn bg-purple-600 text-white rounded-3xl">Purchase</button>
                    </div>
                </div>

                        {cartItems.length === 0 ? (
                            <p>No items in the cart.</p>
                        ) : (
                            <ul>
                                {cartItems.map((item) => (
                                    <div key={item.product_id} className="flex justify-between border p-4 mb-2 rounded-lg">
                                        <div className='flex gap-10'>
                                            <img src={item.product_image} alt={item.product_title} className="w-52 h-32 rounded-lg object-cover" />
                                            <div className='flex flex-col justify-evenly'>
                                                <h3 className='font-semibold text-2xl'>{item.product_title}</h3>
                                                <p className='text-gray-400'>{item.description}</p>
                                                <p className='font-semibold text-xl'>Price: ${item.price}</p>
                                            </div>
                                        </div>
                                        <i className="fa-regular fa-circle-xmark text-red-500 text-3xl"></i>
                                    </div>
                                ))}
                            </ul>
                        )}
                    </div>
                ) : (
                    <div>
                        <h2 className="text-2xl font-bold mb-10">Wishlist</h2>
                        {wishlistItems.length === 0 ? (
                            <p>No items in the wishlist.</p>
                        ) : (
                            <ul>
                                {wishlistItems.map((item) => (
                                    <div key={item.product_id} className="flex justify-between border p-4 mb-2 rounded-lg">
                                        <div className='flex gap-10'>
                                            <img src={item.product_image} alt={item.product_title} className="w-72 h-48 rounded-lg object-cover" />
                                            <div className='flex flex-col justify-evenly'>
                                                <h3 className='font-semibold text-2xl'>{item.product_title}</h3>
                                                <p className='text-gray-400'>{item.description}</p>
                                                <p className='font-semibold text-xl'>Price: ${item.price}</p>
                                                <button className="btn w-32 bg-purple-600 text-white rounded-3xl">Add to Cart</button>
                                            </div>
                                        </div>
                                        <i className="fa-regular fa-circle-xmark text-red-500 text-3xl"></i>
                                    </div>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </div>
        </div>
    );
};

export default Dashboard;
