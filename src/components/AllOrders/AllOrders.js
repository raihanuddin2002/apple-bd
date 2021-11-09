import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Order from './Order/Order';

//https://i.ibb.co/QNGwN03/3.png
const AllOrders = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect( () => {
        axios.get(`https://damp-cliffs-56350.herokuapp.com/allOrders`)
            .then(res => {
                setLoading(true);
                if(res){
                    setServices(res.data);
                    setLoading(false);
                }
            })
    },[services]);
    
    return (
        <div className="container">
            <h2 className="text-white py-4 mt-3 mt-lg-5 display-3 bg-dark text-center">ALL ORDERS</h2>
            <div className="row row-cols-1 gy-4 mt-3 my-5">
                {
                   !isLoading && services.map(data => <Order key={data._id} data={data}></Order>)
                }

                {
                    isLoading &&<div> <h1 className="text-center">Loading...  
                            <div className="spinner-grow text-primary" role="status"></div>
                            <div className="spinner-grow text-secondary" role="status"></div>
                            <div className="spinner-grow text-success" role="status"> </div>
                            <div className="spinner-grow text-danger" role="status"></div>
                            <div className="spinner-grow text-warning" role="status"></div>
                            <div className="spinner-grow text-info" role="status">
                            </div>
                            <div className="spinner-grow text-dark" role="status"></div>
                            </h1> </div>
                       
                }
            </div>
        </div>
        
    );
}
export default AllOrders;