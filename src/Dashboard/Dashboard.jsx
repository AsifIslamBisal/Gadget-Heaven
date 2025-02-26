import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredReadList, getStoredWishList } from '../components/Utility/utility';
import Card from '../gadget/Card';

const Dashboard = () => {
    const [viewMode, setViewMode] = useState('cart'); 
    const [cartList, setCartList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [sort, setSort] = useState('');
    const allProduct = useLoaderData();

    useEffect(() => {
        // Cart list kora hoise
        const storedCartList = getStoredReadList();
        const cartProducts = allProduct.filter(product => storedCartList.includes(product.product_id));
        setCartList(cartProducts);

        // Wishlist list kora hoise
        const storedWishList = getStoredWishList();
        const wishProducts = allProduct.filter(product => storedWishList.includes(product.product_id));
        setWishList(wishProducts);
    }, [allProduct]);

    const handleSort = (SortType) => {
        setSort(SortType);
        if (SortType === 'price') {
            const sortedList = [...(viewMode === 'cart' ? cartList : wishList)].sort((a, b) => b.price - a.price);
            viewMode === 'cart' ? setCartList(sortedList) : setWishList(sortedList);
        }
    };

    return (
        <div className='mb-72'>
            <div className='bg-[#9538E2] text-center text-white h-72 mt-5 pt-8'>
                <h2 className='font-bold text-2xl '>Dashboard</h2>
                <br />
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <br />
                <div className='space-x-5'>
                    
                    <button
                        onClick={() => setViewMode('cart')}
                        className={`btn rounded-full w-32 ${viewMode === 'cart' ? 'bg-white text-[#9538E2] border-[#9538E2]' : 'bg-[#9538E2] text-white'}`}>
                        Cart
                    </button>
                    <button
                        onClick={() => setViewMode('wishlist')}
                        className={`btn rounded-full w-32 ${viewMode === 'wishlist' ? 'bg-white text-[#9538E2] border-[#9538E2]' : 'bg-[#9538E2] text-white'}`}>
                        Wishlist
                    </button>
                </div>
            </div>

            <div className='flex justify-around pt-6 items-center'>
                <div>
                    <h4 className='font-bold text-xl'>{viewMode === 'cart' ? 'Cart' : 'Wishlist'}</h4>
                </div>
                <div className='lg:flex space-x-5'>
                    <p className='font-bold pt-3 text-xl'>
                        Total cost: <span>${viewMode === 'cart' ? cartList.reduce((sum, item) => sum + item.price, 0) : wishList.reduce((sum, item) => sum + item.price, 0)}</span>
                    </p>
                    <button
                        onClick={() => handleSort('price')}
                        className="btn btn-outline btn-[#9435E2] rounded-full text-[#9538E2]">
                        Sort by Price
                    </button>
                    <button className="btn text-white bg-[#9435E2] rounded-full">Purchase</button>
                </div>
            </div>

            
            <div className='ml-20 space-y-5'>
                {
                    // (viewMode === 'cart' ? cartList : wishList).map(card => <Card key={card.product_id} card={card}></Card>)
                    (viewMode === 'cart' ? cartList : wishList).map(card => <Card key={card.product_id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Dashboard;
