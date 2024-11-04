import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const Categories = ({ categories }) => {
    const { category } = useParams(); 

    return (
        <div className='gap-2 flex-col flex border-2 w-60 items-center h-96 '>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `btn ${!category ? 'bg-blue-500 text-white' : ''}`
                }
            >
                <button className="">All Products</button>
            </NavLink>
            {categories.map(category => (
                <NavLink
                    to={`/category/${category.category}`}
                    key={category.id}
                    className={({ isActive }) =>
                        `btn ${isActive ? 'bg-blue-500 text-white' : ''}`
                    }
                >
                    <button className="">{category.category}</button>
                </NavLink>
            ))}
        </div>
    );
};

export default Categories;
