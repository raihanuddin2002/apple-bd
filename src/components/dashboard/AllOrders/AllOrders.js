import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Menu from '../DashBoard/Menu/Menu';
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
        <div className="row">
            <h2 className="py-2 mt-3 mt-lg-5 display-3 bg-light-pink text-center mb-4">DashBoard</h2>
            
            <div className="col-sm-12 col-lg-2 ps-lg-0">
                <h5 className="d-none d-lg-block card-header text-center display-4 bg-light-pink fixed">Menu</h5>
                <Menu></Menu>
            </div>
            <div className="col-sm-12 col-lg-10 pe-lg-0 scroll-div">
                <h5 className="card-header text-center display-4 bg-light-pink">ALL ORDERS</h5>
                <div className="row row-cols-1 gy-4 mt-2 mb-5">
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
        </div>
    </div>   
    );
}
export default AllOrders;