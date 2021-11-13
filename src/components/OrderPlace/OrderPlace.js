import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ServiceDetails = () => {
    const {id} = useParams();
    const history = useHistory();

    const [services,setServices] = useState([]);
    const [quantity, setQuantiy] = useState(1);
    const [sucess,setSucess] = useState("");
    const {user} = useAuth('');
    const {displayName, email} = user;
    const {name,description,price,rating,people,picture} = services;

    const [memory, setMemory] = useState(0);
    const [storage, setStorage] = useState(0);
    const [delivery, setDelivery] = useState(10);
    const [memoryType, setMemoryType] = useState("4GB");
    const [storageType, setStorageType] = useState("256GB");
    const [deliveryType, setDeliveryType] = useState("7");
    const totalCost = (parseFloat(quantity) * parseFloat(price)) + memory + storage + delivery || 0;

    const orderStatus = "Pending";
    const [isLoading, setIsLoading] = useState(true);
    const [isProceed, setIsProceed] = useState(false);
    // rating 
    const rate= parseFloat(rating) || 0;
    // get cart value
    const adressRef = useRef(); 
    const phoneRef = useRef(); 

    // quantity quantity
    const productQuantity = (e) => {
        const productQuantityValue = e.target.value;
        setQuantiy(productQuantityValue);
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
    },[])

    // Handle Cart from
    const handleCartForm = (e) => {
        e.preventDefault();
        setIsProceed(true);
        const productQuantity = quantity;
        const address = adressRef.current.value; 
        const phone = phoneRef.current.value;
        
        const proceedOrder = {
            name,description,price,rating,people,picture,displayName,email,address, phone, productQuantity, totalCost, orderStatus, memoryType, storageType, deliveryType
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
                                    <button onClick={() => {setMemory(0); setMemoryType("4GB")}} type="button" className="btn bg-pink me-2 mb-sm-2 mb-lg-0">4GB unified Memory </button>
                                    <button onClick={() => {setMemory(200); setMemoryType("6GB")}} type="button" className="btn bg-pink">6GB unified Memory</button>
                                </div>
                            </div>
                            {/* <!-- Storage --> */}
                            <div className="storage mb-4">
                                <h6>Storage</h6>
                                <div id="storage-buttons">
                                    <button  onClick={() => {setStorage(0); setStorageType("128GB")}} type="button" className="btn bg-pink me-2 mb-sm-2 mb-lg-0" >256GB SSD Storage</button>
                                    <button  onClick={() => {setStorage(300); setStorageType("256GB")}} type="button" className="btn bg-pink me-2 mb-sm-2 mb-lg-0" >512GB SSD Storage</button>
                                    <button  onClick={() => {setStorage(500); setStorageType("512GB")}} type="button" className="btn bg-pink">512 GB SSD Storage</button>
                                </div>
                        </div>
                        {/* <!-- delivery --> */}
                        <div className="delivery mb-4">
                            <h6>Choose your delivery option</h6>
                            <div id="delivery-buttons">
                                <button  onClick={() => {setDelivery(10); setDeliveryType('7')}} type="button" className="btn bg-pink me-2 mb-sm-2 mb-lg-0">7 days delivery</button>
                                <button  onClick={() => {setDelivery(30); setDeliveryType('3')}} type="button" className="btn bg-pink">3 days Delivery</button>
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
                                    <input onChange={productQuantity} type="text" className="form-control" id="exampleInputQuantity" aria-describedby="quantityHelp" value={quantity}/>
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="exampleInputCost" className="form-label">Extra Memory Cost $</label>
                                    <input type="text" className="form-control" id="exampleInputCost" aria-describedby="costHelp" value={memory} readOnly/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputCost" className="form-label">Extra Storage Cost $</label>
                                    <input type="text" className="form-control" id="exampleInputCost" aria-describedby="costHelp" value={storage} readOnly/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputCost" className="form-label">Delivery Charge $</label>
                                    <input type="text" className="form-control" id="exampleInputCost" aria-describedby="costHelp" value={delivery} readOnly/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputCost" className="form-label">Total Extra Cost $</label>
                                    <input type="text" className="form-control" id="exampleInputCost" aria-describedby="costHelp" value={memory+ storage +delivery} readOnly/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputCost" className="form-label">Base Price $</label>
                                    <input type="text" className="form-control" id="exampleInputCost" aria-describedby="costHelp" value={(parseFloat(price)*quantity).toFixed(2)} readOnly/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputCost" className="form-label">Total Price $</label>
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