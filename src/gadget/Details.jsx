import React from 'react';
import Cards from '../components/Cards';
import Card from './Card';
import { FaRegHeart } from "react-icons/fa";
import { useLoaderData, useParams } from 'react-router-dom';    
import { addToStoredReadList } from '../components/Utility/utility';

const Details = () => {
  const { product_id } = useParams();
    const data = useLoaderData();
    const id = parseInt(product_id);
    console.log(data)

    const card = data.find(card => product_id === card.product_id);
    
    const { product_image,product_title,category,price,description,Specification,availability,rating} = card;
   

    const handleMarkAsRead = (id) => {
      addToStoredReadList(id);
    };

    const handleMarkAsWish =(id) => {
      addToStoredWishList(id);
    };

    return (
        <div className='relative mb-64'>
            <div className='bg-[#9538E2] text-center text-white h-96 mt-5 pt-8'>
                <h2 className='font-bold text-2xl '>Product Details</h2>
                <br />
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className='absolute  -bottom-56 right-20 left-96'>
            <div className=" bg-white shadow-2xl w-[700px] h-[380px] flex gap-8 pt-8 rounded-2xl pr-4">
              <div>
                <img className='w-96 h-64 pl-8 rounded' src={product_image} alt={product_title} />
              </div>
              <div>
                <h1 className='font-bold'>{product_title}</h1>
                <p className='font-bold'>Price: ${price}</p>
                <p className='bg-lime-200 rounded-full w-20 pl-3 border-solid border-x-green-500'> In Stock{availability}</p>
                <p>{description}</p>
                <p className='font-bold'>Specification: <br />{Specification}</p>
                <p className='font-bold'>Rating ⭐ </p>
                <div>
                <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
     />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  defaultChecked/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <span className='shadow-xl bg-slate-200 rounded-full ml-5'> {rating}</span>
</div>
                </div>
                <div className='flex items-center gap-2'>
                <button onClick={() => handleMarkAsRead(product_id)} className="btn btn-wide bg-[#9538E2] rounded-full text-white">Add To Card 
                  
                  
                <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>


                  </button> 
                  <button onClick={() => handleMarkAsWish(product_id)} className='shadow-2xl pl-1 bg-slate-200 w-7 h-7 rounded-full'><FaRegHeart></FaRegHeart></button>
                </div>
              </div>
            </div>
            </div>
        </div>
    );
};

export default Details;