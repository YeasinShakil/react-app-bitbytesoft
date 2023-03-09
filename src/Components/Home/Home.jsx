import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch('../../../public/products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    }, [])
    // console.log(products)
   
   
    return (
        <div className='w-[1000px] bg-slate-50 top-[160px] left-[270px] absolute px-10 py-5'>
            <h1 className=' text-2xl font-bold'>Finalizing Output</h1>

            <div className=' grid grid-cols-5 gap-4'>
                {/* <div className=' mt-5'>
                    <div>
                        <img src={productLink} alt="" />
                    </div>
                    <h4>T-shirt</h4>
                </div> */}

                {
                    products.map(product=> (<Product key={product?.id} title={product?.name} price={product?.price} ratings={product?.ratings} photo={product?.img} brand={product?.seller}></Product>))
                }
                
            </div>
            
        </div>
    );
};

export default Home;