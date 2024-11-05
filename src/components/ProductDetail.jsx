import React from 'react';
import { useLoaderData, useParams, useOutletContext } from 'react-router-dom';
import Heading from './Heading';
import { toast } from 'react-toastify';

const ProductDetail = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const { updateCartCount, updateWishlistCount } = useOutletContext(); // Update this line

    const product = data.find(item => item.product_id === parseInt(id));

    if (!product) {
        return <p>Product not found.</p>;
    }

    const handleAddToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const isProductInCart = cartItems.some(item => item.product_id === product.product_id);

        if (!isProductInCart) {
            cartItems.push(product);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            updateCartCount(cartItems.length);
            toast.success("Product added to the cart!");
        } else {
            toast.warning("Product already in the cart!");
        }
    };


    const handleAddToWishlist = () => {
        const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
        if (!wishlistItems.some(item => item.product_id === product.product_id)) {
            wishlistItems.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
            updateWishlistCount(wishlistItems.length);
            toast('Product added tio the WishList')
        }
        else {
            toast.warning("Product already in wishlist!")
        }
    };


    const { product_title, product_image, price, description, Specification, availability, rating } = product;

    return (
        <div>
            <div className='bg-[#9538E2] h-96 relative'>
                <Heading
                    title="Product Details"
                    subtitle={`Explore the latest gadgets that will take your experience to the next level.\nFrom smart devices to the coolest accessories, we have it all!`}
                />
            </div>
            <div className="hero bg-white h-min w-10/12 mx-auto flex flex-col lg:flex-row items-start p-6 gap-6 absolute bottom-[-200px] left-1/2 transform -translate-x-1/2 rounded-3xl">
                <img
                    src={product_image}
                    className="w-1/3 h-[440px] rounded-lg object-cover"
                    alt={product_title}
                />
                <div className="flex flex-col justify-start max-w-lg gap-[10px]">
                    <h1 className="text-[28px] font-semibold">{product_title}</h1>
                    <p className='text-[20px] font-semibold'>Price: ${price}</p>
                    <p className='h-12'><span className='font-bold'>Details: </span>{description}</p>
                    {availability && (
                        <p className="px-2 py-0.5 border rounded-full bg-[#EAF5E6] text-[#47A724] text-[10px] inline-flex items-center justify-center font-medium h-6 w-14">
                            In Stock
                        </p>
                    )}
                    <p className='font-bold mt-2'>Specification:</p>
                    <ol className="list-decimal pl-5 mt-2">
                        {Specification.map((spec, index) => (
                            <li key={index}>{spec}</li>
                        ))}
                    </ol>
                    <p><span className='font-bold'>Rating: </span>{rating}</p>
                    <div className="rating block">
                        {[...Array(5)].map((_, index) => (
                            <input key={index} type="radio" name="rating" className="mask mask-star-2 bg-[#F9C004]" />
                        ))}
                    </div>

                    <div className='flex items-center gap-4'>
                        <button onClick={handleAddToCart} className='h-12 w-36 rounded-[32px] bg-purple-500 text-white'>
                            Add To Cart <i className="fa-solid fa-cart-shopping ml-2"></i>
                        </button>
                        <p>
                            <i onClick={handleAddToWishlist} className="fa-regular fa-heart border border-gray-400 rounded-full p-2 cursor-pointer"></i>
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-base-200 h-80'></div>
        </div>
    );
};

export default ProductDetail;
