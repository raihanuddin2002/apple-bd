import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ServiceDetails = () => {
    const {id} = useParams();
    const history = useHistory();

    const [services,setServices] = useState([]);
    const [ticket, setTicekt] = useState(1);
    const [sucess,setSucess] = useState("");
    const {user} = useAuth('');
    const {displayName, email} = user;
    const {_id,name,description,price,rating,people,picture} = services;
    const totalCost = parseFloat(ticket) * parseFloat(price) || 0;
    const orderStatus = "Pending";

    // get cart value
    const adressRef = useRef(); 
    const phoneRef = useRef(); 

    // ticket quantity
    const ticketQuantity = (e) => {
        const ticketQuantityValue = e.target.value;
        setTicekt(ticketQuantityValue);
    }
    useEffect( () => {
        axios.get(`https://damp-cliffs-56350.herokuapp.com/services/${id}`)
            .then(res => setServices(res.data))
    },[services])

    // Handle Cart from
    const handleCartForm = (e) => {
        e.preventDefault();

        const ticketQuantity = ticket;
        const address = adressRef.current.value; 
        const phone = phoneRef.current.value;
        
        const proceedOrder = {
            name,description,price,rating,people,picture,displayName,email,address, phone, ticketQuantity, totalCost, orderStatus
        }

        // Saved order
        
        fetch(`https://damp-cliffs-56350.herokuapp.com/placeOrder/${id}`, {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(proceedOrder)
        })
            .then(res => res.json())
            .then(data => {
                setSucess("Order Placed sucessfully :)");
                e.target.reset();
                setTimeout( () => {
                history.push('/my-orders')
                },3000);
            });
    }
    
    
    return (
        <div className="container my-5 py-5">
            <div className="row cardd">
                <div className="col-lg-8">
                    <h5 className="card-header text-center display-4 bg-dark text-white">Service Info</h5>
                    <div className="">
                        <table className="table table-striped table-bordered border-top-0 fs-4">
                            <tbody>
                                <tr>
                                <th scope="row">Service no</th>
                                <td>{_id}</td>
                                </tr>
                                <tr>
                                <th scope="row">Place</th>
                                <td>{name}</td>
                                </tr>
                                <tr>
                                <th scope="row">Description</th>
                                <td>{description}</td>
                                </tr>
                                <tr>
                                <th scope="row">Price</th>
                                <td>${price}</td>
                                </tr>
                                <tr>
                                <th scope="row">Rating</th>
                                <td><i className="fas fa-star fs-5 text-warning"></i> {rating}</td>
                                </tr>
                                <tr>
                                <th scope="row">People</th>
                                <td>{people}</td>
                                </tr>
                                <tr>
                                <th scope="row">Image</th>
                                <td><img srcSet={picture} alt="" width="250" height="150" srcset="" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="border">
                        <h5 className="card-header text-center bg-dark text-white">Cart</h5>
                        <div className="p-3">
                            <form onSubmit={handleCartForm}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputText" className="form-label">Your Name</label>
                                    <input type="text" className="form-control" id="exampleInputText" aria-describedby="emailHelp" value={displayName} readOnly/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} readOnly/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputText" className="form-label">Your Adress</label>
                                    <input ref={adressRef} type="text" className="form-control" id="exampleInputText" aria-describedby="textHelp" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPhone" className="form-label">Your Phone Number</label>
                                    <input  ref={phoneRef} type="text" className="form-control" id="exampleInputPhone" aria-describedby="phoneHelp" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputQuantity" className="form-label">Ticket Quantity</label>
                                    <input onChange={ticketQuantity} type="text" className="form-control" id="exampleInputQuantity" aria-describedby="quantityHelp" value={ticket}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputCost" className="form-label">Total Price</label>
                                    <input type="text" className="form-control" id="exampleInputCost" aria-describedby="costHelp" value={totalCost.toFixed(2)} readOnly/>
                                </div>
                                <button type="submit" className="btn btn-warning">Proceed Order</button>
                                <h6 className="text-success mt-3">{sucess}</h6>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;