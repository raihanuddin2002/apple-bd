import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Menu from '../DashBoard/Menu/Menu';
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
                <h2 className="py-2 mt-3 mt-lg-5 display-3 bg-light-pink text-center mb-4">DashBoard</h2>
                
                <div className="col-sm-12 col-lg-2 ps-lg-0">
                    <h5 className="d-none d-lg-block card-header text-center display-4 bg-light-pink fixed">Menu</h5>
                    <Menu></Menu>
                </div>
                <div className="col-sm-12 col-lg-10 pe-lg-0 scroll-div">
                    <h5 className="card-header text-center display-4 bg-light-pink">MY ORDERS</h5>
                    <div className="row row-cols-1 gy-4 mt-2 mb-5">
                        {
                            isLoading && <p className="text-center">
                                <div className="spinner-border text-pink p-4" role="status"><span class="visually-hidden">Loading...</span></div>
                            </p>
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