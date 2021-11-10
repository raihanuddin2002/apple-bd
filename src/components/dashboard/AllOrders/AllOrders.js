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
        <div className="row text-wrap">
            <div className="col">
                <h5 className="card-header text-center display-4 bg-light-pink">ALL ORDERS</h5>
                <div className="row row-cols-1 gy-4 mt-2 mb-5">
                    {
                    !isLoading && products.map(data => <Order key={data._id} data={data}></Order>)
                    }

                    {
                        isLoading && <div className="text-center">
                            <div className="spinner-border text-pink p-4" role="status"><span className="visually-hidden">Loading...</span></div>
                        </div>
                    }
                </div>
            </div>
        </div> 
    );
}
export default AllOrders;