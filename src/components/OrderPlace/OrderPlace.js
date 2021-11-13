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
    const {name,description,price,rating,people,picture} = services;
    const [otherCost, setOtherCost] = useState(0);
    const totalCost = (parseFloat(ticket) * parseFloat(price)) || 0;
    const orderStatus = "Pending";
    const [isLoading, setIsLoading] = useState(true);
    const [isProceed, setIsProceed] = useState(false);
    // rating 
    const rate= parseFloat(rating) || 0;
    // get cart value
    const adressRef = useRef(); 
    const phoneRef = useRef(); 

    // ticket quantity
    const productQuantity = (e) => {
        const productQuantityValue = e.target.value;
        setTicekt(productQuantityValue);
    }
    useEffect( () => {
        axios.get(`https://secret-tor-67063.herokuapp.com/products/${id}`)
            .then(res => {
                setIsLoading(true);
                if(res){
                    setServices(res.data);
                    setIsLoading(false);
                }
            })
    },[services])

    // Handle Cart from
    const handleCartForm = (e) => {
        e.preventDefault();
        setIsProceed(true);
        const productQuantity = ticket;
        const address = adressRef.current.value; 
        const phone = phoneRef.current.value;
        
        const proceedOrder = {
            name,description,price,rating,people,picture,displayName,email,address, phone, productQuantity, totalCost, orderStatus
        }

        // Saved order
        
        fetch(`https://secret-tor-67063.herokuapp.com/placeOrder/${id}`, {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(proceedOrder)
        })
            .then(res => res.json())
            .then(data => {
                setIsProceed(false);
                setSucess("Order Placed sucessfully :)");
                e.target.reset();
                setTimeout( () => {
                history.push('/dashboard/my-orders');
                },3000);
            });
    }
    return (
        <div className="container my-5 py-5">
            <div className="row cardd">
                <div className="col-lg-8">
                    <h5 className="card-header text-center display-4 bg-light-pink">Service Info</h5>
                    {!isLoading && <div className="">
                        <div className="mb-3">
                            <img srcSet={picture} className="img-fluid" alt="" />
                        </div>
                        <div>
                            <h1>{name}</h1>
                            <p>{description}</p>
                            <h4>${price}</h4>
                            <div>{ [...Array(rate)].map(e => <i className="fas fa-star fs-5 text-pink"></i> ) } <b>{rate}</b>/5 - <i className="fas fa-user fs-5 text-pink"></i> {people}</div>
                            <h6></h6>
                        </div>
                       
                        <div className="mt-4">
                        {/* <!-- Memory --> */}
                            <div className="memory mb-4">
                                <h6>Memory</h6>
                                <div id="memory-buttons">
                                    <button type="button" className="btn bg-pink me-2">8GB unified Memory</button>
                                    <button type="button" className="btn bg-pink">16GB unified Memory</button>
                                </div>
                            </div>
                            {/* <!-- Storage --> */}
                            <div className="storage mb-4">
                                <h6>Storage</h6>
                                <div id="storage-buttons">
                                    <button type="button" className="btn bg-pink me-2" >256GB SSD Storage</button>
                                    <button type="button" className="btn bg-pink me-2" >512GB SSD Storage</button>
                                    <button type="button" className="btn bg-pink">1TB SSD Storage</button>
                                </div>
                        </div>
                        {/* <!-- delivery --> */}
                        <div className="delivery mb-4">
                            <h6>Choose your delivery option</h6>
                            <div id="delivery-buttons">
                                <button type="button" className="btn bg-pink me-2">7 days delivery</button>
                                <button type="button" className="btn bg-pink me-2">3 days Delivery</button>
                            </div>
                        </div>
                        </div>
                    </div>}
                    {
                    isLoading && <div className="text-center my-5">
                        <div className="spinner-border text-pink p-4" role="status"><span className="visually-hidden">Loading...</span></div>
                    </div>
                    }
                </div>
               

                <div className="col-lg-4">
                    <div className="border">
                        <h5 className="card-header text-center bg-light-pink">Cart</h5>
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
                                    <label htmlFor="exampleInputQuantity" className="form-label">Quantity</label>
                                    <input onChange={productQuantity} type="text" className="form-control" id="exampleInputQuantity" aria-describedby="quantityHelp" value={ticket}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputCost" className="form-label">Total Price</label>
                                    <input type="text" className="form-control" id="exampleInputCost" aria-describedby="costHelp" value={totalCost.toFixed(2)} readOnly/>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div> <button type="submit" className="btn bg-pink">Proceed Order</button></div>
                                    {
                                        isProceed && <div className="spinner-border text-pink p-4" role="status"><span className="visually-hidden">Loading...</span></div>
                                        
                                    }
                                </div>
                                
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

{/* <table className="table table-striped table-bordered fs-4">
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
                                <td><i className="fas fa-star fs-5 text-pink"></i> {rating}</td>
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
                        </table> */}