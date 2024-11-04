import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const data = useLoaderData();  
    
  
    const product = data.find(item => item.product_id === parseInt(id));

    if (!product) {
        return <p>Product not found.</p>;
    }

    const { product_title, product_image, price, category, rating, description, Specification } = product;

    return (
        <div className="card bg-base-100 shadow-xl p-6">
            <figure>
                <img className="h-72 p-3 rounded-2xl" src={product_image} alt={product_title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: ${price}</p>
                <p>Category: {category}</p>
                <p>Rating: {rating}</p>
                <p>Description: {description}</p>
                <p>Specifications:</p>
                <ul>
                    {Specification.map((spec, index) => (
                        <li key={index}>{spec}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductDetail;
