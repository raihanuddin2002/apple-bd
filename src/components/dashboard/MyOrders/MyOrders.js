import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
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
        
        <div className="container">
            <div className="row">
                
                <div className="col pe-lg-0 scroll-div">
                    <h5 className="card-header text-center display-4 bg-light-pink">MY ORDERS</h5>
                    <div className="row row-cols-1 gy-4 mt-2 mb-5">
                        {
                            isLoading && <div className="text-center">
                                <div className="spinner-border text-pink p-4" role="status"><span className="visually-hidden">Loading...</span></div>
                            </div>
                        }
                        {
                        services && services.map(service => <OurOrder key={service._id} data={service}></OurOrder>)
                        }

                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Ourservices;