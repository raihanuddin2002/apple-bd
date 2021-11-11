import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ManageProduct from './ManageProduct/ManageProduct';
const ManageProducts = () => {
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
    },[products]);
    return (
        <div>
            {/* Manage All products */}
        <section>
            <h2 className="py-2 display-4 bg-light-pink text-center">MANAGE PRODUCTS</h2>
            <div className="blank mb-5"></div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">

                {
                    !isLoading && products.map(product => <ManageProduct key={product._id} data={product}></ManageProduct>)
                }
                {
                    isLoading &&<div className="spinner-border text-pink p-4" role="status"><span className="visually-hidden">Loading...</span></div>
                       
                }
                
            </div>
        </section>
        </div>
    );
};

export default ManageProducts;