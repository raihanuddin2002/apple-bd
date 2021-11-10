import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import OurOrder from './OurOrder/OurOrder';

const Ourservices = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const {user} = useAuth();
    const userInfo ={
        userEmail: user?.email
    }
    
    useEffect(() => {
        axios.post('https://secret-tor-67063.herokuapp.com/myOrders', userInfo)
            .then(res => {
                setLoading(true);
                if(res){
                    setServices(res.data);
                    setLoading(false);
                }
            })

    },[services]);
    return (
        <div>
             <div className="container">
                <h2 className="py-4 mt-3 mt-lg-5 display-3 bg-light-pink text-center">YOUR ORDERS</h2>
                 <div className="row row-cols-1 gy-4 mt-3 my-5">
                    {
                        isLoading && <p className="text-center">
                            <div class="spinner-border text-danger p-4" role="status"><span class="visually-hidden">Loading...</span></div>
                        </p>
                    }
                    {
                       services && services.map(service => <OurOrder key={service._id} data={service}></OurOrder>)
                    }

                 </div>
             </div>
        </div>
    );
};

export default Ourservices;