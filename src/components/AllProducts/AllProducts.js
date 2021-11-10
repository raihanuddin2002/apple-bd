import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product/Product';

const AllProducts = () => {
    const [products, setproducts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect( () => {
        axios.get("https://secret-tor-67063.herokuapp.com/products")
            .then(res => {
                setLoading(true);
                if(res){
                    setproducts(res.data);
                    setLoading(false);
                }
            })
    },[]);
    return (
        <div>
            {/*All products */}
        <section className="container">
            <div className="blank d-none d-md-block"  style={{height:"50px"}}></div>
            <h2 className="py-4 mt-3 mt-lg-5 display-3 bg-light-pink text-center">ALL PRODUCTS</h2>
            <div className="blank mb-5"></div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">

                {
                    !isLoading && products.map(product => <Product key={product._id} data={product}></Product>)
                }
                {
                    isLoading &&<div className="spinner-border text-pink p-4" role="status"><span className="visually-hidden">Loading...</span></div>
                       
                }
                
            </div>
        </section>
        </div>
    );
};

export default AllProducts;