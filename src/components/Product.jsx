import { Link } from "react-router-dom";

const Product = ({product}) => {
    const {product_title,product_image,price,category,rating,product_id} =product
    return (
        <div>
            <div className="card bg-base-100 border-2">
  <figure>
    <img className="h-72 p-3 rounded-2xl"
      src={product_image} />
  </figure>
  <div className="card-body">
    <h2 className="card-title h-16">{product_title}</h2>
    <p>Price:${price}</p> 
    <p>Category :{category}</p>
    <p>Rating :{rating}</p>
   
        <div className="card-actions justify-end">
        <Link to={`/product/${product_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;