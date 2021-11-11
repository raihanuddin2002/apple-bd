import React from 'react';
import axios from 'axios';
const ManageProduct = (props) => {
    const {_id,name,price, description, picture, rating,people} = props.data;
    const handleDelete = () => {
        const isConfirm = window.confirm("Are you sure? delete this product?");
        if(isConfirm){
            axios.delete(`https://secret-tor-67063.herokuapp.com/products/${_id}`).then(res=>console.log("product deleted "));
        }
    }
    return (
        <div className="col d-flex align-items-stretch">
            <article className="service-col p-5 bg-light shadow-lg rounded-4">
                <p className="mb-4 text-center">
                    <img style={{height: '30vh'}} srcSet={picture} alt="" className="img-fluid" />
                </p>
                <h3 className="fw-bold mb-4 ff-volkhob">
                   {name}
                </h3>
                <p className="text-muted">
                    {description}
                </p>
               
                <div className="d-flex justify-content-between">
                    <h5 className="">
                        ${price}
                    </h5>
                    <div>
                    <i className="fas fa-star fs-5 text-pink"></i> <span className="fw-bold">{rating}</span>({people})
                    </div>
                </div>
                <button onClick={handleDelete} className="btn bg-pink px-4">Delete</button>
            </article>
        </div>
    );
};

export default ManageProduct;