import axios from 'axios';
import React from 'react';

const Order = (props) => {
    const {_id,name,displayName,price,people,rating, description,email, address, picture, phone, orderStatus} = props.data;

    const handleDelete = (id) => {
        const isConfirm = window.confirm("Are you sure to delete your order?");
        if(isConfirm){
            axios.delete(`https://secret-tor-67063.herokuapp.com/myOrders/${id}`)
            .then(res => console.log("deleted"))
        } 
    }
    // Approve status
    const handleOrderStatus = (id) => {
        const isConfirm = window.confirm("Are you sure to Approve this order?");
        
        if(isConfirm){
            axios.put(`https://secret-tor-67063.herokuapp.com/products`,{id})
            .then(res => console.log("Your order Approved"));
        }
    }
    return (
        <div>
            <div className="col d-flex justify-content-center align-items-stretch">
                    <div className="row border-pink w-100">
                        <div className="col-lg-6 p-5 ourservice-article">
                            <img className="img-fluid mb-3" srcSet={picture} alt="" width="400" height="200"/>
                            <h3 className="text-uppercase">{name}</h3>
                            <p>{description}</p>
                            <p><span className="fw-bold"><i className="fas fa-star fs-5 text-pink"></i> {rating}</span>({people})</p>
                            <h5 className="mb-0">${price}</h5>
                            <p  className="m-0 mt-4">
                                <button onClick={() => handleDelete(_id)} className="btn bg-pink btn-lg rounded-0 me-3">Delete</button>
                                {(orderStatus === "Approved") ? "": <button onClick={() => handleOrderStatus(_id)} className="btn bg-pink btn-lg rounded-0">Approve</button> }
                            </p>
                        </div>

                        <div className="col-lg-6 p-5 ourservice-article">
                            <h6 className="text-danger text-end">{orderStatus}</h6>
                            <h1 className="">USER INFO</h1>
                            <hr />
                            <h3 className="text-uppercase">Name: {displayName}</h3>
                            <h5 className="mb-3">Email: {email}</h5>
                            <p className="mb-0">Adress: {address}</p>
                            <p className="mb-0">Phone: {phone}</p>
                            <p>Id: {_id}</p>
                            
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Order;