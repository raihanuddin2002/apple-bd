import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Order from './Order/Order';

const AllOrders = () => {
    const [products, setproducts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect( () => {
        axios.get(`https://secret-tor-67063.herokuapp.com/allOrders`)
            .then(res => {
                setLoading(true);
                if(res){
                    setproducts(res.data);
                    setLoading(false);
                }
            })
    },[products]);
    
    return (
        <div className="container">
            <h2 className="text-white py-4 mt-3 mt-lg-5 display-3 bg-dark text-center">ALL ORDERS</h2>
            <div className="row row-cols-1 gy-4 mt-3 my-5">
                {
                   !isLoading && products.map(data => <Order key={data._id} data={data}></Order>)
                }

                {
                     isLoading && <p className="text-center">
                        <div class="spinner-border text-pink p-4" role="status"><span class="visually-hidden">Loading...</span></div>
                     </p>
                 }
            </div>
        </div>
        
    );
}
export default AllOrders;