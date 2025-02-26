import { NavLink } from "react-router-dom";
import Details from "./Details";

const Card = ({card}) => {
    const {product_id,product_title,product_image,category,price,description,Specification,availability,rating} = card ||{};
  return (
      <div>
        
        <div className="card bg-base-100 w-96 shadow-xl ">
  <figure className="px-10 pt-10">
    <img
      src={product_image}
      alt="product"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-start ">
    <h2 className="card-title">{product_title}</h2>
    <p>Price: {price}$</p>
    <div className="card-actions">
      <NavLink to={`/Card/${product_id}`}><button className="btn rounded-full">View Details</button></NavLink>
    </div>
  </div>
</div>
</div>
    );
};

export default Card;