import React, { useEffect, useState } from 'react';
import Card from '../gadget/Card';
import product from '../../public/product.json'
import Nav from './Nav';

const Cards = () => {

    const [card, setCards] = useState([]);

    useEffect( () =>{
        fetch('/product.json')
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])



// btn section

const [filter, setFilter] = useState(['All']); 

const handleFilter = (categories) => {
    if (categories === 'All') {
        setFilter(['All']);
    } else {
        setFilter(categories.split(',')); 
    }
};

const filteredProducts = filter.includes('All')
    ? card 
    : card.filter(product => filter.includes(product.category)); 












    
    return (
        
        <div>
            <div><Nav></Nav></div>
            <div className='mt-80 mb-10'>
            <div className='text-center text-2xl font-bold'><h1>Explore Cutting-Edge Gadgets</h1></div>
            <div className='lg:flex justify-between pt-8'>
                
            <div className='shadow-2xl ml-10 w-56 h-[400px] pl-11 pt-5 pb-5 rounded-lg'>
            
                <button onClick={() => handleFilter('All')} className='w-32 h-10 bg-[#F2F2F3] rounded-full '>All Product</button><br/><br/>
                <button onClick={() => handleFilter('Computers')} className='w-32 h-10 bg-[#F2F2F3] rounded-full'>Laptops</button><br/><br/>
                <button onClick={() => handleFilter('Chargers,Power Banks,Audio')} className='w-32 h-10 bg-[#F2F2F3] rounded-full'>Accessories</button><br/><br/>
                <button onClick={() => handleFilter('Smart Watches')} className='w-32 h-10 bg-[#F2F2F3] rounded-full'>Smart Watches</button><br/><br/>
                <button onClick={() => handleFilter('')} className='w-32 h-10 bg-[#F2F2F3] rounded-full'>MacBook</button><br/><br/>
                <button onClick={() => handleFilter('Phones')} className='w-32 h-10 bg-[#F2F2F3] rounded-full'>Iphone</button><br/><br/>
            
            </div>
        <div  className="lg:grid grid-cols-3 mr-10 gap-4">
            {
                filteredProducts.map(card => <Card card={card} key={card.product_id}></Card>)
            }
        </div>
        
        </div>
        </div>
        </div>
    );
};

export default Cards;