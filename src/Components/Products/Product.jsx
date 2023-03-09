import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Product = ({title, photo, ratings, price, brand}) => {
    const productLink = 'https://img.freepik.com/free-psd/isolated-white-t-shirt-front-view_125540-1194.jpg?w=360';
    return (
        <div className=' mt-5 cursor-pointer'>
            <div>
                <img src={photo} alt="" />
            </div>
            <div>
            <h4 title={title}>{title.length > 15 ? title.slice(0, 15) + "....." : title}</h4>
            <p>Price: $ {price}</p>
            <p>Brand: {brand}</p>
            <p className='flex items-center'>Rating: {
                Array(ratings)
                .fill()
                .map((_, i)=> (
                    <p className='pl-1 text-orange-500'><AiFillStar/></p>
                ))
                }</p>
            </div>
        </div>
    );
};

export default Product;