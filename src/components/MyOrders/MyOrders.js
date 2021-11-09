import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import OurOrder from './OurOrder/OurOrder';

const Ourservices = () => {
    const [services, setservices] = useState([]);
    const {user} = useAuth();
    const userInfo ={
        userEmail: user?.email
    }
    
    useEffect(() => {
       
        axios.post('https://damp-cliffs-56350.herokuapp.com/myOrders', userInfo)
            .then(res => {
                setservices(res.data)
            })

    },[services]);
    return (
        <div>
             <div className="container">
                <h2 className="text-white py-4 mt-3 mt-lg-5 display-3 bg-dark text-center">YOUR ORDERS</h2>
                 <div className="row row-cols-1 gy-4 mt-3 my-5">
                    {
                       services && services.map(service => <OurOrder key={service._id} data={service}></OurOrder>)
                    }

                 </div>
             </div>
        </div>
    );
};

export default Ourservices;